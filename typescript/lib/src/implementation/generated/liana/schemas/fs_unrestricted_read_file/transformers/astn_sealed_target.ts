
import * as p_ from 'pareto-core/implementation/transformer'

const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <State, B>($: State,  assign: ($: State) => B,  otherwise: () => B) => assign($)
import p_change_context from 'pareto-core/implementation/refiner/specials/change_context'

import _p_text_from_list from 'pareto-core/implementation/transformer/specials/text_from_list'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/fs_unrestricted_read_file/signatures/transformers/astn_sealed_target.js"

import * as t_out from "astn-core/interface/generated/liana/schemas/sealed_target/data"

import * as v_primitives_to_text from "liana-core/implementation/manual/transformers/primitives/text"

import * as v_external_path from "../../fs_unrestricted_path/transformers/astn_sealed_target.js"

import * as v_external_list_of_characters from "../../list_of_characters/transformers/astn_sealed_target.js"

export const Parameters: t_signatures.Parameters = ($) => v_external_path.Node_Path(
    $,
)

export const Error: t_signatures.Error = ($) => ['group', ['verbose', p_.literal.dictionary(
    {
        "path": p_change_context(
            $['path'],
            ($) => v_external_path.Node_Path(
                $,
            ),
        ),
        "type": p_change_context(
            $['type'],
            ($) => ['state', p_decide_state(
                $,
                ($): t_out.Value.state => {
                    switch ($[0]) {
                        case 'file does not exist':
                            return p_.option(
                                $,
                                ($) => ({
                                    'option': 'file does not exist',
                                    'value': ['nothing', null],
                                }),
                            )
                        case 'node is not a file':
                            return p_.option(
                                $,
                                ($) => ({
                                    'option': 'node is not a file',
                                    'value': ['nothing', null],
                                }),
                            )
                        case 'permission denied':
                            return p_.option(
                                $,
                                ($) => ({
                                    'option': 'permission denied',
                                    'value': ['nothing', null],
                                }),
                            )
                        case 'file too large':
                            return p_.option(
                                $,
                                ($) => ({
                                    'option': 'file too large',
                                    'value': ['nothing', null],
                                }),
                            )
                        case 'device not ready':
                            return p_.option(
                                $,
                                ($) => ({
                                    'option': 'device not ready',
                                    'value': ['nothing', null],
                                }),
                            )
                        default:
                            return p_.au(
                                $[0],
                            )
                    }
                },
            )],
        ),
    },
)]]

export const Result: t_signatures.Result = ($) => v_external_list_of_characters.List_of_Characters(
    $,
)
