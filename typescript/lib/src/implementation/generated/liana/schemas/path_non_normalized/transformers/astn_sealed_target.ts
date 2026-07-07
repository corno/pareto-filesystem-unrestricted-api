
import * as p_ from 'pareto-core/implementation/transformer'

const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <State, B>($: State,  assign: ($: State) => B,  otherwise: () => B) => assign($)
import p_change_context from 'pareto-core/implementation/refiner/specials/change_context'

import _p_text_from_list from 'pareto-core/implementation/transformer/specials/text_from_list'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/path_non_normalized/signatures/transformers/astn_sealed_target.js"

import * as t_out from "astn-core/interface/generated/liana/schemas/sealed_target/data"

import * as v_primitives_to_text from "liana-core/implementation/manual/transformers/primitives/text"

export const Non_Normalized_Path: t_signatures.Non_Normalized_Path = ($) => ['group', ['verbose', p_.literal.dictionary(
    {
        "leading slash": p_change_context(
            $['leading slash'],
            ($) => ['text', {
                'delimiter': ['none', null],
                'value': v_primitives_to_text.true_false(
                    $,
                ),
            }],
        ),
        "segments": p_change_context(
            $['segments'],
            ($) => ['list', p_.from.list($,
            ).map(
                ($) => ['state', p_decide_state(
                    $,
                    ($): t_out.Value.state => {
                        switch ($[0]) {
                            case 'parent':
                                return p_.option(
                                    $,
                                    ($) => ({
                                        'option': 'parent',
                                        'value': ['nothing', null],
                                    }),
                                )
                            case 'child':
                                return p_.option(
                                    $,
                                    ($) => ({
                                        'option': 'child',
                                        'value': ['text', {
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        }],
                                    }),
                                )
                            case 'current':
                                return p_.option(
                                    $,
                                    ($) => ({
                                        'option': 'current',
                                        'value': ['nothing', null],
                                    }),
                                )
                            case 'nothing':
                                return p_.option(
                                    $,
                                    ($) => ({
                                        'option': 'nothing',
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
            )],
        ),
        "trailing slash": p_change_context(
            $['trailing slash'],
            ($) => ['text', {
                'delimiter': ['none', null],
                'value': v_primitives_to_text.true_false(
                    $,
                ),
            }],
        ),
    },
)]]
