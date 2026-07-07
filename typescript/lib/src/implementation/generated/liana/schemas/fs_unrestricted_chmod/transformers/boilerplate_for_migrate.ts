
import * as p_ from 'pareto-core/implementation/transformer'

const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <State, B>($: State,  assign: ($: State) => B,  otherwise: () => B) => assign($)
import p_change_context from 'pareto-core/implementation/refiner/specials/change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/fs_unrestricted_chmod/signatures/transformers/boilerplate_for_migrate.js"

import * as t_out from "../../../../../../interface/generated/liana/schemas/fs_unrestricted_chmod/data.js"

import * as v_path from "../../fs_unrestricted_path/transformers/boilerplate_for_migrate.js"

export const Parameters: t_signatures.Parameters = ($) => ({
    'path': p_change_context(
        $['path'],
        ($) => v_path.Node_Path(
            $,
        ),
    ),
    'mode': p_change_context(
        $['mode'],
        ($) => ({
            'owner': p_change_context(
                $['owner'],
                ($) => Permissions(
                    $,
                ),
            ),
            'group': p_change_context(
                $['group'],
                ($) => Permissions(
                    $,
                ),
            ),
            'others': p_change_context(
                $['others'],
                ($) => Permissions(
                    $,
                ),
            ),
            'special bits': p_change_context(
                $['special bits'],
                ($) => p_.from.optional($,
                ).map(
                    ($) => ({
                        'setuid': p_change_context(
                            $['setuid'],
                            ($) => $,
                        ),
                        'setgid': p_change_context(
                            $['setgid'],
                            ($) => $,
                        ),
                        'sticky': p_change_context(
                            $['sticky'],
                            ($) => $,
                        ),
                    }),
                ),
            ),
        }),
    ),
})

export const Permissions: t_signatures.Permissions = ($) => ({
    'read': p_change_context(
        $['read'],
        ($) => $,
    ),
    'write': p_change_context(
        $['write'],
        ($) => $,
    ),
    'execute': p_change_context(
        $['execute'],
        ($) => $,
    ),
})

export const Error: t_signatures.Error = ($) => ({
    'path': p_change_context(
        $['path'],
        ($) => v_path.Node_Path(
            $,
        ),
    ),
    'type': p_change_context(
        $['type'],
        ($) => p_decide_state(
            $,
            ($): t_out.Error.type_ => {
                switch ($[0]) {
                    case 'path does not exist':
                        return p_.option(
                            $,
                            ($) => ['path does not exist', null],
                        )
                    case 'permission denied':
                        return p_.option(
                            $,
                            ($) => ['permission denied', null],
                        )
                    case 'invalid mode':
                        return p_.option(
                            $,
                            ($) => ['invalid mode', null],
                        )
                    default:
                        return p_.au(
                            $[0],
                        )
                }
            },
        ),
    ),
})
