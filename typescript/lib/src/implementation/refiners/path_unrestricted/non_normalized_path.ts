import * as p_ from 'pareto-core/implementation/refiner'
import * as p_t from 'pareto-core/implementation/transformer'

import type * as interface_ from "../../../declarations/refiners/path_unrestricted/non_normalized_path.js"

import type * as d_out from "../../../interface/schemas/fs_unrestricted_path.js"
import type * as d_in from "../../../interface/schemas/path_non_normalized.js"

type Intermediate_Result = {
    subppath: d_out.Context_Subpath
    node: string | null
    up_steps: number
}

export const Node_Path: interface_.Node_Path = ($, abort, $p) => {

    if ($p.pedantic) {
        if ($['trailing slash']) {
            abort(['trailing slash not allowed', null])
        }
    }
    let intermediate_result: Intermediate_Result = {

        subppath: p_.literal.list([]),
        node: null,
        up_steps: 0,
    }

    p_.from.list($.segments).map(
        ($) => {
            intermediate_result = p_t.from.state($).decide(
                ($): Intermediate_Result => {
                    switch ($[0]) {
                        case 'parent': return p_.option($, ($) => {

                            return intermediate_result.node === null
                                ? p_t.from.list(intermediate_result.subppath).on_has_last_item(
                                    ($, rest) => { //there are subpath steps, the last one will be removed
                                        return {
                                            'up_steps': intermediate_result.up_steps,
                                            'subppath': rest,
                                            'node': null,

                                        }
                                    },
                                    () => { //there are no subpath steps, the up_steps will be increased
                                        return {
                                            'up_steps': intermediate_result.up_steps + 1,
                                            'subppath': p_.literal.list([]),
                                            'node': null,
                                        }
                                    }
                                )
                                : { //node was not null, now it will be
                                    'up_steps': intermediate_result.up_steps,
                                    'subppath': intermediate_result.subppath,
                                    'node': null,
                                }


                        })
                        case 'child': return p_.option($, ($): Intermediate_Result => ({
                            'up_steps': intermediate_result.up_steps,
                            'subppath': intermediate_result.node === null
                                ? intermediate_result.subppath
                                : p_.literal.chain(
                                    intermediate_result.subppath,
                                    intermediate_result.node
                                ),
                            'node': $,
                        }))
                        case 'current': return p_.option($, ($) => intermediate_result)
                        case 'nothing': return p_.option($, ($) => intermediate_result)
                        default: return p_.exhaustive($[0])
                    }
                })
            return null
        })

    if (intermediate_result.node === null) {
        return abort(['no node', null])
    }
    return {
        'context': {
            'start': $['leading slash']
                ? ['absolute', null]
                : ['relative', {
                    'up steps': intermediate_result.up_steps,
                }],
            'subpath': intermediate_result.subppath,
        },
        'node': intermediate_result.node
    }

}

type Intermediate_Result2 = {
    subppath: d_out.Context_Subpath
    up_steps: number
}

export const Context_Path = (
    $: d_in.Non_Normalized_Path,
): d_out.Context_Path => {

    let intermediate_result: Intermediate_Result2 = {

        subppath: p_.literal.list([]),
        up_steps: 0,
    }

    p_.from.list($.segments).map(
        ($) => {
            intermediate_result = p_t.from.state($).decide(
                ($): Intermediate_Result2 => {
                    switch ($[0]) {
                        case 'parent': return p_.option($, ($) => {

                            return p_t.from.list(intermediate_result.subppath).on_has_last_item(
                                ($, rest) => { //there are subpath steps, the last one will be removed
                                    return {
                                        'up_steps': intermediate_result.up_steps,
                                        'subppath': rest,
                                        'node': null,

                                    }
                                },
                                () => { //there are no subpath steps, the up_steps will be increased
                                    return {
                                        'up_steps': intermediate_result.up_steps + 1,
                                        'subppath': p_.literal.list([]),
                                        'node': null,
                                    }
                                }
                            )
                        })
                        case 'child': return p_.option($, ($): Intermediate_Result2 => ({
                            'up_steps': intermediate_result.up_steps,
                            'subppath': p_.literal.chain(
                                intermediate_result.subppath,
                                $
                            ),
                        }))
                        case 'current': return p_.option($, ($) => intermediate_result)
                        case 'nothing': return p_.option($, ($) => intermediate_result)
                        default: return p_.exhaustive($[0])
                    }
                })
            return null
        })

    return {
        'start': $['leading slash']
            ? ['absolute', null]
            : ['relative', {
                'up steps': intermediate_result.up_steps,
            }],
        'subpath': intermediate_result.subppath,
    }

}
