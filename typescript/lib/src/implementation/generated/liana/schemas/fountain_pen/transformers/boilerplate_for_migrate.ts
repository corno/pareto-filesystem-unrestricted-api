
import * as p_ from 'pareto-core/implementation/transformer'

const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <State, B>($: State,  assign: ($: State) => B,  otherwise: () => B) => assign($)
import p_change_context from 'pareto-core/implementation/refiner/specials/change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/fountain_pen/signatures/transformers/boilerplate_for_migrate.js"

import * as t_out from "../../../../../../interface/generated/liana/schemas/fountain_pen/data.js"

import * as v_list_of_characters from "../../list_of_characters/transformers/boilerplate_for_migrate.js"

export const Paragraph: t_signatures.Paragraph = ($) => p_decide_state(
    $,
    ($): t_out.Paragraph => {
        switch ($[0]) {
            case 'composed':
                return p_.option(
                    $,
                    ($) => ['composed', p_.from.list($,
                    ).map(
                        ($) => Paragraph(
                            $,
                        ),
                    )],
                )
            case 'sentences':
                return p_.option(
                    $,
                    ($) => ['sentences', p_.from.list($,
                    ).map(
                        ($) => Sentence(
                            $,
                        ),
                    )],
                )
            case 'optional':
                return p_.option(
                    $,
                    ($) => ['optional', p_.from.optional($,
                    ).map(
                        ($) => Paragraph(
                            $,
                        ),
                    )],
                )
            case 'nothing':
                return p_.option(
                    $,
                    ($) => ['nothing', null],
                )
            case 'rich list':
                return p_.option(
                    $,
                    ($) => ['rich list', {
                        'items': p_change_context(
                            $['items'],
                            ($) => p_.from.list($,
                            ).map(
                                ($) => Sentence(
                                    $,
                                ),
                            ),
                        ),
                        'if empty': p_change_context(
                            $['if empty'],
                            ($) => p_.from.optional($,
                            ).map(
                                ($) => Sentence(
                                    $,
                                ),
                            ),
                        ),
                        'if not empty': p_change_context(
                            $['if not empty'],
                            ($) => ({
                                'before': p_change_context(
                                    $['before'],
                                    ($) => p_.from.optional($,
                                    ).map(
                                        ($) => Sentence(
                                            $,
                                        ),
                                    ),
                                ),
                                'indent': p_change_context(
                                    $['indent'],
                                    ($) => $,
                                ),
                                'separator': p_change_context(
                                    $['separator'],
                                    ($) => p_.from.optional($,
                                    ).map(
                                        ($) => Phrase(
                                            $,
                                        ),
                                    ),
                                ),
                                'after': p_change_context(
                                    $['after'],
                                    ($) => p_.from.optional($,
                                    ).map(
                                        ($) => Sentence(
                                            $,
                                        ),
                                    ),
                                ),
                            }),
                        ),
                    }],
                )
            default:
                return p_.au(
                    $[0],
                )
        }
    },
)

export const Sentence: t_signatures.Sentence = ($) => p_.from.list($,
).map(
    ($) => Phrase(
        $,
    ),
)

export const Phrase: t_signatures.Phrase = ($) => p_decide_state(
    $,
    ($): t_out.Phrase => {
        switch ($[0]) {
            case 'value':
                return p_.option(
                    $,
                    ($) => ['value', p_decide_state(
                        $,
                        ($): t_out.Phrase.value => {
                            switch ($[0]) {
                                case 'text':
                                    return p_.option(
                                        $,
                                        ($) => ['text', $],
                                    )
                                case 'list of characters':
                                    return p_.option(
                                        $,
                                        ($) => ['list of characters', v_list_of_characters.List_of_Characters(
                                            $,
                                        )],
                                    )
                                default:
                                    return p_.au(
                                        $[0],
                                    )
                            }
                        },
                    )],
                )
            case 'indent':
                return p_.option(
                    $,
                    ($) => ['indent', Paragraph(
                        $,
                    )],
                )
            case 'composed':
                return p_.option(
                    $,
                    ($) => ['composed', p_.from.list($,
                    ).map(
                        ($) => Phrase(
                            $,
                        ),
                    )],
                )
            case 'optional':
                return p_.option(
                    $,
                    ($) => ['optional', p_.from.optional($,
                    ).map(
                        ($) => Phrase(
                            $,
                        ),
                    )],
                )
            case 'nothing':
                return p_.option(
                    $,
                    ($) => ['nothing', null],
                )
            case 'rich list':
                return p_.option(
                    $,
                    ($) => ['rich list', {
                        'items': p_change_context(
                            $['items'],
                            ($) => p_.from.list($,
                            ).map(
                                ($) => Phrase(
                                    $,
                                ),
                            ),
                        ),
                        'if empty': p_change_context(
                            $['if empty'],
                            ($) => Phrase(
                                $,
                            ),
                        ),
                        'if not empty': p_change_context(
                            $['if not empty'],
                            ($) => ({
                                'before': p_change_context(
                                    $['before'],
                                    ($) => Phrase(
                                        $,
                                    ),
                                ),
                                'separator': p_change_context(
                                    $['separator'],
                                    ($) => Phrase(
                                        $,
                                    ),
                                ),
                                'after': p_change_context(
                                    $['after'],
                                    ($) => Phrase(
                                        $,
                                    ),
                                ),
                            }),
                        ),
                    }],
                )
            default:
                return p_.au(
                    $[0],
                )
        }
    },
)
