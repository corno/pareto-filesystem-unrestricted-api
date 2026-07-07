
import * as p_ from 'pareto-core/implementation/transformer'

const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <State, B>($: State,  assign: ($: State) => B,  otherwise: () => B) => assign($)
import p_change_context from 'pareto-core/implementation/refiner/specials/change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/fs_unrestricted_read_directory/signatures/transformers/boilerplate_for_migrate.js"

import * as t_out from "../../../../../../interface/generated/liana/schemas/fs_unrestricted_read_directory/data.js"

import * as v_path from "../../fs_unrestricted_path/transformers/boilerplate_for_migrate.js"

export const Parameters: t_signatures.Parameters = ($) => ({
    'path': p_change_context(
        $['path'],
        ($) => v_path.Context_Path(
            $,
        ),
    ),
})

export const Error: t_signatures.Error = ($) => ({
    'path': p_change_context(
        $['path'],
        ($) => v_path.Context_Path(
            $,
        ),
    ),
    'type': p_change_context(
        $['type'],
        ($) => p_decide_state(
            $,
            ($): t_out.Error.type_ => {
                switch ($[0]) {
                    case 'directory does not exist':
                        return p_.option(
                            $,
                            ($) => ['directory does not exist', null],
                        )
                    case 'node is not a directory':
                        return p_.option(
                            $,
                            ($) => ['node is not a directory', null],
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

export const Result: t_signatures.Result = ($) => p_.from.dictionary($,
).map(
    ($, id) => ({
        'node type': p_change_context(
            $['node type'],
            ($) => Node_Type(
                $,
            ),
        ),
        'context directory': p_change_context(
            $['context directory'],
            ($) => v_path.Context_Path(
                $,
            ),
        ),
        'path': p_change_context(
            $['path'],
            ($) => v_path.Node_Path(
                $,
            ),
        ),
    }),
)

export const Node_Type: t_signatures.Node_Type = ($) => p_decide_state(
    $,
    ($): t_out.Node_Type => {
        switch ($[0]) {
            case 'file':
                return p_.option(
                    $,
                    ($) => ['file', null],
                )
            case 'directory':
                return p_.option(
                    $,
                    ($) => ['directory', null],
                )
            case 'other':
                return p_.option(
                    $,
                    ($) => ['other', null],
                )
            default:
                return p_.au(
                    $[0],
                )
        }
    },
)
