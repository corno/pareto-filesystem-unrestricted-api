
import * as p_ from 'pareto-core/implementation/refiner'

import p_change_context from 'pareto-core/implementation/refiner/specials/change_context'

import p_list_from_text from 'pareto-core/implementation/refiner/specials/list_from_text'

import p_variables from 'pareto-core/implementation/refiner/specials/variables'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/fountain_pen/signatures/refiners/astn_parse_tree.js"

import * as t_out from "../../../../../../interface/generated/liana/schemas/fountain_pen/data.js"

import * as v_unmarshalled_from_parse_tree from "liana-core/implementation/manual/refiners/unmarshalled/astn_parse_tree"

import * as v_parse_tree_to_location from "liana-core/implementation/manual/transformers/parse_tree/start_token_range"

import * as v_external_list_of_characters from "../../list_of_characters/refiners/astn_parse_tree.js"

export const Paragraph: t_signatures.Paragraph = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            $,
        ),
    ),
    ($) => p_.from.text(
        $['option']['token']['value'],
    ).to_state($, 
        ($, $t):t_out.Paragraph => {
            switch ($t) {
                case 'composed':
                    return p_change_context(
                        $['value'],
                        ($) => ['composed', p_.from.list(v_unmarshalled_from_parse_tree.List(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'subdocument context': p_.literal.not_set(),
                                },
                            )['items'],
                        ).map(
                            ($) => p_change_context(
                                $['value'],
                                ($) => Paragraph(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                ),
                            ),
                        )],
                    )
                case 'sentences':
                    return p_change_context(
                        $['value'],
                        ($) => ['sentences', p_.from.list(v_unmarshalled_from_parse_tree.List(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'subdocument context': p_.literal.not_set(),
                                },
                            )['items'],
                        ).map(
                            ($) => p_change_context(
                                $['value'],
                                ($) => Sentence(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                ),
                            ),
                        )],
                    )
                case 'optional':
                    return p_change_context(
                        $['value'],
                        ($) => ['optional', p_.from.optional(v_unmarshalled_from_parse_tree.Optional(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            )['optional'],
                        ).map(
                            ($) => Paragraph(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            ),
                        )],
                    )
                case 'nothing':
                    return p_change_context(
                        $['value'],
                        ($) => ['nothing', v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )],
                    )
                case 'rich list':
                    return p_change_context(
                        $['value'],
                        ($) => ['rich list', p_change_context(
                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'expected properties': p_.literal.dictionary(
                                        {
                                            "items": null,
                                            "if empty": null,
                                            "if not empty": null,
                                        },
                                    ),
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                            ($) => p_variables(
                                () => {
                                    
                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                        $['value'],
                                        {
                                            'subdocument context': p_.literal.not_set(),
                                        },
                                    )
                                    return {
                                        'items': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'items',
                                                    'subdocument context': p_.literal.not_set(),
                                                },
                                            ),
                                            ($) => p_.from.list(v_unmarshalled_from_parse_tree.List(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                )['items'],
                                            ).map(
                                                ($) => p_change_context(
                                                    $['value'],
                                                    ($) => Sentence(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                ),
                                            ),
                                        ),
                                        'if empty': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'if empty',
                                                    'subdocument context': p_.literal.not_set(),
                                                },
                                            ),
                                            ($) => p_.from.optional(v_unmarshalled_from_parse_tree.Optional(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                )['optional'],
                                            ).map(
                                                ($) => Sentence(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                ),
                                            ),
                                        ),
                                        'if not empty': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'if not empty',
                                                    'subdocument context': p_.literal.not_set(),
                                                },
                                            ),
                                            ($) => p_change_context(
                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'expected properties': p_.literal.dictionary(
                                                            {
                                                                "before": null,
                                                                "indent": null,
                                                                "separator": null,
                                                                "after": null,
                                                            },
                                                        ),
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                ),
                                                ($) => p_variables(
                                                    () => {
                                                        
                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                            $['value'],
                                                            {
                                                                'subdocument context': p_.literal.not_set(),
                                                            },
                                                        )
                                                        return {
                                                            'before': p_change_context(
                                                                v_unmarshalled_from_parse_tree.Property(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                    {
                                                                        'id': 'before',
                                                                        'subdocument context': p_.literal.not_set(),
                                                                    },
                                                                ),
                                                                ($) => p_.from.optional(v_unmarshalled_from_parse_tree.Optional(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    )['optional'],
                                                                ).map(
                                                                    ($) => Sentence(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                ),
                                                            ),
                                                            'indent': p_change_context(
                                                                v_unmarshalled_from_parse_tree.Property(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                    {
                                                                        'id': 'indent',
                                                                        'subdocument context': p_.literal.not_set(),
                                                                    },
                                                                ),
                                                                ($) => v_unmarshalled_from_parse_tree.Boolean(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                    {
                                                                        'type': ['true/false', null],
                                                                        'subdocument context': p_.literal.not_set(),
                                                                    },
                                                                ),
                                                            ),
                                                            'separator': p_change_context(
                                                                v_unmarshalled_from_parse_tree.Property(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                    {
                                                                        'id': 'separator',
                                                                        'subdocument context': p_.literal.not_set(),
                                                                    },
                                                                ),
                                                                ($) => p_.from.optional(v_unmarshalled_from_parse_tree.Optional(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    )['optional'],
                                                                ).map(
                                                                    ($) => Phrase(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                ),
                                                            ),
                                                            'after': p_change_context(
                                                                v_unmarshalled_from_parse_tree.Property(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                    {
                                                                        'id': 'after',
                                                                        'subdocument context': p_.literal.not_set(),
                                                                    },
                                                                ),
                                                                ($) => p_.from.optional(v_unmarshalled_from_parse_tree.Optional(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    )['optional'],
                                                                ).map(
                                                                    ($) => Sentence(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                ),
                                                            ),
                                                        }
                                                    },
                                                ),
                                            ),
                                        ),
                                    }
                                },
                            ),
                        )],
                    )
                default:
                    return abort(
                        ['liana', {
                            'type': ['state', ['unknown option', $['option']['token']['value']]],
                            'range': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                        }],
                    )
            }
        },
    ),
)

export const Sentence: t_signatures.Sentence = ($, abort) => p_.from.list(v_unmarshalled_from_parse_tree.List(
        $,
        ($) => abort(
            $,
        ),
        {
            'subdocument context': p_.literal.not_set(),
        },
    )['items'],
).map(
    ($) => p_change_context(
        $['value'],
        ($) => Phrase(
            $,
            ($) => abort(
                $,
            ),
        ),
    ),
)

export const Phrase: t_signatures.Phrase = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            $,
        ),
    ),
    ($) => p_.from.text(
        $['option']['token']['value'],
    ).to_state($, 
        ($, $t):t_out.Phrase => {
            switch ($t) {
                case 'value':
                    return p_change_context(
                        $['value'],
                        ($) => ['value', p_change_context(
                            v_unmarshalled_from_parse_tree.State(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            ),
                            ($) => p_.from.text(
                                $['option']['token']['value'],
                            ).to_state($, 
                                ($, $t):t_out.Phrase.value => {
                                    switch ($t) {
                                        case 'text':
                                            return p_change_context(
                                                $['value'],
                                                ($) => ['text', v_unmarshalled_from_parse_tree.Text(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                )],
                                            )
                                        case 'list of characters':
                                            return p_change_context(
                                                $['value'],
                                                ($) => ['list of characters', v_external_list_of_characters.List_of_Characters(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                )],
                                            )
                                        default:
                                            return abort(
                                                ['liana', {
                                                    'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                    'range': v_parse_tree_to_location.Value(
                                                        $['value'],
                                                        {
                                                            'subdocument context': p_.literal.not_set(),
                                                        },
                                                    ),
                                                }],
                                            )
                                    }
                                },
                            ),
                        )],
                    )
                case 'indent':
                    return p_change_context(
                        $['value'],
                        ($) => ['indent', Paragraph(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )],
                    )
                case 'composed':
                    return p_change_context(
                        $['value'],
                        ($) => ['composed', p_.from.list(v_unmarshalled_from_parse_tree.List(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'subdocument context': p_.literal.not_set(),
                                },
                            )['items'],
                        ).map(
                            ($) => p_change_context(
                                $['value'],
                                ($) => Phrase(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                ),
                            ),
                        )],
                    )
                case 'optional':
                    return p_change_context(
                        $['value'],
                        ($) => ['optional', p_.from.optional(v_unmarshalled_from_parse_tree.Optional(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            )['optional'],
                        ).map(
                            ($) => Phrase(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            ),
                        )],
                    )
                case 'nothing':
                    return p_change_context(
                        $['value'],
                        ($) => ['nothing', v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )],
                    )
                case 'rich list':
                    return p_change_context(
                        $['value'],
                        ($) => ['rich list', p_change_context(
                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'expected properties': p_.literal.dictionary(
                                        {
                                            "items": null,
                                            "if empty": null,
                                            "if not empty": null,
                                        },
                                    ),
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                            ($) => p_variables(
                                () => {
                                    
                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                        $['value'],
                                        {
                                            'subdocument context': p_.literal.not_set(),
                                        },
                                    )
                                    return {
                                        'items': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'items',
                                                    'subdocument context': p_.literal.not_set(),
                                                },
                                            ),
                                            ($) => p_.from.list(v_unmarshalled_from_parse_tree.List(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                )['items'],
                                            ).map(
                                                ($) => p_change_context(
                                                    $['value'],
                                                    ($) => Phrase(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                ),
                                            ),
                                        ),
                                        'if empty': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'if empty',
                                                    'subdocument context': p_.literal.not_set(),
                                                },
                                            ),
                                            ($) => Phrase(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                        'if not empty': p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'if not empty',
                                                    'subdocument context': p_.literal.not_set(),
                                                },
                                            ),
                                            ($) => p_change_context(
                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'expected properties': p_.literal.dictionary(
                                                            {
                                                                "before": null,
                                                                "separator": null,
                                                                "after": null,
                                                            },
                                                        ),
                                                        'subdocument context': p_.literal.not_set(),
                                                    },
                                                ),
                                                ($) => p_variables(
                                                    () => {
                                                        
                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                            $['value'],
                                                            {
                                                                'subdocument context': p_.literal.not_set(),
                                                            },
                                                        )
                                                        return {
                                                            'before': p_change_context(
                                                                v_unmarshalled_from_parse_tree.Property(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                    {
                                                                        'id': 'before',
                                                                        'subdocument context': p_.literal.not_set(),
                                                                    },
                                                                ),
                                                                ($) => Phrase(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                ),
                                                            ),
                                                            'separator': p_change_context(
                                                                v_unmarshalled_from_parse_tree.Property(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                    {
                                                                        'id': 'separator',
                                                                        'subdocument context': p_.literal.not_set(),
                                                                    },
                                                                ),
                                                                ($) => Phrase(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                ),
                                                            ),
                                                            'after': p_change_context(
                                                                v_unmarshalled_from_parse_tree.Property(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                    {
                                                                        'id': 'after',
                                                                        'subdocument context': p_.literal.not_set(),
                                                                    },
                                                                ),
                                                                ($) => Phrase(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                ),
                                                            ),
                                                        }
                                                    },
                                                ),
                                            ),
                                        ),
                                    }
                                },
                            ),
                        )],
                    )
                default:
                    return abort(
                        ['liana', {
                            'type': ['state', ['unknown option', $['option']['token']['value']]],
                            'range': v_parse_tree_to_location.Value(
                                $['value'],
                                {
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                        }],
                    )
            }
        },
    ),
)
