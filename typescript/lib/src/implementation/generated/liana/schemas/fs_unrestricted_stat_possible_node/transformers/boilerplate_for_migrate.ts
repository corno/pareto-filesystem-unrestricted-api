
import * as p_ from 'pareto-core/implementation/transformer'

const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <State, B>($: State,  assign: ($: State) => B,  otherwise: () => B) => assign($)
import p_change_context from 'pareto-core/implementation/refiner/specials/change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/fs_unrestricted_stat_possible_node/signatures/transformers/boilerplate_for_migrate.js"

import * as t_out from "../../../../../../interface/generated/liana/schemas/fs_unrestricted_stat_possible_node/data.js"

import * as v_path from "../../fs_unrestricted_path/transformers/boilerplate_for_migrate.js"

export const Parameters: t_signatures.Parameters = ($) => v_path.Node_Path(
    $,
)

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
                    case 'unknown':
                        return p_.option(
                            $,
                            ($) => ['unknown', null],
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

export const Result: t_signatures.Result = ($) => Node_Type(
    $,
)

export const Node_Type: t_signatures.Node_Type = ($) => p_decide_state(
    $,
    ($): t_out.Node_Type => {
        switch ($[0]) {
            case 'does not exist':
                return p_.option(
                    $,
                    ($) => ['does not exist', null],
                )
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
            default:
                return p_.au(
                    $[0],
                )
        }
    },
)
