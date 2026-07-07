
import * as p_ from 'pareto-core/implementation/transformer'

const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <State, B>($: State,  assign: ($: State) => B,  otherwise: () => B) => assign($)
import p_change_context from 'pareto-core/implementation/refiner/specials/change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/fs_unrestricted_read_file/signatures/transformers/boilerplate_for_migrate.js"

import * as t_out from "../../../../../../interface/generated/liana/schemas/fs_unrestricted_read_file/data.js"

import * as v_path from "../../fs_unrestricted_path/transformers/boilerplate_for_migrate.js"

import * as v_list_of_characters from "../../list_of_characters/transformers/boilerplate_for_migrate.js"

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
                    case 'file does not exist':
                        return p_.option(
                            $,
                            ($) => ['file does not exist', null],
                        )
                    case 'node is not a file':
                        return p_.option(
                            $,
                            ($) => ['node is not a file', null],
                        )
                    case 'permission denied':
                        return p_.option(
                            $,
                            ($) => ['permission denied', null],
                        )
                    case 'file too large':
                        return p_.option(
                            $,
                            ($) => ['file too large', null],
                        )
                    case 'device not ready':
                        return p_.option(
                            $,
                            ($) => ['device not ready', null],
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

export const Result: t_signatures.Result = ($) => v_list_of_characters.List_of_Characters(
    $,
)
