
import * as p_ from 'pareto-core/implementation/transformer'

import * as p_di from 'pareto-core/interface/data'
const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <OV extends p_di.Value, B extends p_di.Value>($: p_di.Optional_Value<OV>,  assign: ($: OV) => B,  otherwise: () => B) => p_.from.optional($).decide(assign, otherwise)
import p_change_context from 'pareto-core/implementation/refiner/specials/change_context'

import _p_text_from_list from 'pareto-core/implementation/transformer/specials/text_from_list'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/fountain_pen/signatures/transformers/astn_sealed_target.js"

import * as t_out from "astn-core/interface/generated/liana/schemas/sealed_target/data"

import * as v_primitives_to_text from "liana-core/implementation/manual/transformers/primitives/text"

import * as v_external_list_of_characters from "../../list_of_characters/transformers/astn_sealed_target.js"

export const Paragraph: t_signatures.Paragraph = ($) => ['state', p_decide_state(
    $,
    ($): t_out.Value.state => {
        switch ($[0]) {
            case 'composed':
                return p_.option(
                    $,
                    ($) => ({
                        'option': 'composed',
                        'value': ['list', p_.from.list($,
                        ).map(
                            ($) => Paragraph(
                                $,
                            ),
                        )],
                    }),
                )
            case 'sentences':
                return p_.option(
                    $,
                    ($) => ({
                        'option': 'sentences',
                        'value': ['list', p_.from.list($,
                        ).map(
                            ($) => Sentence(
                                $,
                            ),
                        )],
                    }),
                )
            case 'optional':
                return p_.option(
                    $,
                    ($) => ({
                        'option': 'optional',
                        'value': ['optional', p_decide_optional(
                            $,
                            ($): t_out.Value.optional => ['set', Paragraph(
                                $,
                            )],
                            () => ['not set', null],
                        )],
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
            case 'rich list':
                return p_.option(
                    $,
                    ($) => ({
                        'option': 'rich list',
                        'value': ['group', ['verbose', p_.literal.dictionary(
                            {
                                "items": p_change_context(
                                    $['items'],
                                    ($) => ['list', p_.from.list($,
                                    ).map(
                                        ($) => Sentence(
                                            $,
                                        ),
                                    )],
                                ),
                                "if empty": p_change_context(
                                    $['if empty'],
                                    ($) => ['optional', p_decide_optional(
                                        $,
                                        ($): t_out.Value.optional => ['set', Sentence(
                                            $,
                                        )],
                                        () => ['not set', null],
                                    )],
                                ),
                                "if not empty": p_change_context(
                                    $['if not empty'],
                                    ($) => ['group', ['verbose', p_.literal.dictionary(
                                        {
                                            "before": p_change_context(
                                                $['before'],
                                                ($) => ['optional', p_decide_optional(
                                                    $,
                                                    ($): t_out.Value.optional => ['set', Sentence(
                                                        $,
                                                    )],
                                                    () => ['not set', null],
                                                )],
                                            ),
                                            "indent": p_change_context(
                                                $['indent'],
                                                ($) => ['text', {
                                                    'delimiter': ['none', null],
                                                    'value': v_primitives_to_text.true_false(
                                                        $,
                                                    ),
                                                }],
                                            ),
                                            "separator": p_change_context(
                                                $['separator'],
                                                ($) => ['optional', p_decide_optional(
                                                    $,
                                                    ($): t_out.Value.optional => ['set', Phrase(
                                                        $,
                                                    )],
                                                    () => ['not set', null],
                                                )],
                                            ),
                                            "after": p_change_context(
                                                $['after'],
                                                ($) => ['optional', p_decide_optional(
                                                    $,
                                                    ($): t_out.Value.optional => ['set', Sentence(
                                                        $,
                                                    )],
                                                    () => ['not set', null],
                                                )],
                                            ),
                                        },
                                    )]],
                                ),
                            },
                        )]],
                    }),
                )
            default:
                return p_.au(
                    $[0],
                )
        }
    },
)]

export const Sentence: t_signatures.Sentence = ($) => ['list', p_.from.list($,
).map(
    ($) => Phrase(
        $,
    ),
)]

export const Phrase: t_signatures.Phrase = ($) => ['state', p_decide_state(
    $,
    ($): t_out.Value.state => {
        switch ($[0]) {
            case 'value':
                return p_.option(
                    $,
                    ($) => ({
                        'option': 'value',
                        'value': ['state', p_decide_state(
                            $,
                            ($): t_out.Value.state => {
                                switch ($[0]) {
                                    case 'text':
                                        return p_.option(
                                            $,
                                            ($) => ({
                                                'option': 'text',
                                                'value': ['text', {
                                                    'delimiter': ['quote', null],
                                                    'value': $,
                                                }],
                                            }),
                                        )
                                    case 'list of characters':
                                        return p_.option(
                                            $,
                                            ($) => ({
                                                'option': 'list of characters',
                                                'value': v_external_list_of_characters.List_of_Characters(
                                                    $,
                                                ),
                                            }),
                                        )
                                    default:
                                        return p_.au(
                                            $[0],
                                        )
                                }
                            },
                        )],
                    }),
                )
            case 'indent':
                return p_.option(
                    $,
                    ($) => ({
                        'option': 'indent',
                        'value': Paragraph(
                            $,
                        ),
                    }),
                )
            case 'composed':
                return p_.option(
                    $,
                    ($) => ({
                        'option': 'composed',
                        'value': ['list', p_.from.list($,
                        ).map(
                            ($) => Phrase(
                                $,
                            ),
                        )],
                    }),
                )
            case 'optional':
                return p_.option(
                    $,
                    ($) => ({
                        'option': 'optional',
                        'value': ['optional', p_decide_optional(
                            $,
                            ($): t_out.Value.optional => ['set', Phrase(
                                $,
                            )],
                            () => ['not set', null],
                        )],
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
            case 'rich list':
                return p_.option(
                    $,
                    ($) => ({
                        'option': 'rich list',
                        'value': ['group', ['verbose', p_.literal.dictionary(
                            {
                                "items": p_change_context(
                                    $['items'],
                                    ($) => ['list', p_.from.list($,
                                    ).map(
                                        ($) => Phrase(
                                            $,
                                        ),
                                    )],
                                ),
                                "if empty": p_change_context(
                                    $['if empty'],
                                    ($) => Phrase(
                                        $,
                                    ),
                                ),
                                "if not empty": p_change_context(
                                    $['if not empty'],
                                    ($) => ['group', ['verbose', p_.literal.dictionary(
                                        {
                                            "before": p_change_context(
                                                $['before'],
                                                ($) => Phrase(
                                                    $,
                                                ),
                                            ),
                                            "separator": p_change_context(
                                                $['separator'],
                                                ($) => Phrase(
                                                    $,
                                                ),
                                            ),
                                            "after": p_change_context(
                                                $['after'],
                                                ($) => Phrase(
                                                    $,
                                                ),
                                            ),
                                        },
                                    )]],
                                ),
                            },
                        )]],
                    }),
                )
            default:
                return p_.au(
                    $[0],
                )
        }
    },
)]
