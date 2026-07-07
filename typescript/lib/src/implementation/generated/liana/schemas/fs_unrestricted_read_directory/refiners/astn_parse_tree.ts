
import * as p_ from 'pareto-core/implementation/refiner'

import p_change_context from 'pareto-core/implementation/refiner/specials/change_context'

import p_list_from_text from 'pareto-core/implementation/refiner/specials/list_from_text'

import p_variables from 'pareto-core/implementation/refiner/specials/variables'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/fs_unrestricted_read_directory/signatures/refiners/astn_parse_tree.js"

import * as t_out from "../../../../../../interface/generated/liana/schemas/fs_unrestricted_read_directory/data.js"

import * as v_unmarshalled_from_parse_tree from "liana-core/implementation/manual/refiners/unmarshalled/astn_parse_tree"

import * as v_parse_tree_to_location from "liana-core/implementation/manual/transformers/parse_tree/start_token_range"

import * as v_external_path from "../../fs_unrestricted_path/refiners/astn_parse_tree.js"

export const Parameters: t_signatures.Parameters = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': p_.literal.dictionary(
                {
                    "path": null,
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
                'path': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'path',
                            'subdocument context': p_.literal.not_set(),
                        },
                    ),
                    ($) => v_external_path.Context_Path(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
            }
        },
    ),
)

export const Error: t_signatures.Error = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': p_.literal.dictionary(
                {
                    "path": null,
                    "type": null,
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
                'path': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'path',
                            'subdocument context': p_.literal.not_set(),
                        },
                    ),
                    ($) => v_external_path.Context_Path(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
                'type': p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'type',
                            'subdocument context': p_.literal.not_set(),
                        },
                    ),
                    ($) => p_change_context(
                        v_unmarshalled_from_parse_tree.State(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                        ($) => p_.from.text(
                            $['option']['token']['value'],
                        ).to_state($, 
                            ($, $t):t_out.Error.type_ => {
                                switch ($t) {
                                    case 'directory does not exist':
                                        return p_change_context(
                                            $['value'],
                                            ($) => ['directory does not exist', v_unmarshalled_from_parse_tree.Nothing(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            )],
                                        )
                                    case 'node is not a directory':
                                        return p_change_context(
                                            $['value'],
                                            ($) => ['node is not a directory', v_unmarshalled_from_parse_tree.Nothing(
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
                    ),
                ),
            }
        },
    ),
)

export const Result: t_signatures.Result = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.Dictionary(
        $,
        ($) => abort(
            $,
        ),
        {
            'subdocument context': p_.literal.not_set(),
        },
    ),
    ($) => p_.from.dictionary($['entries'],
    ).map(
        ($, id) => p_change_context(
            v_unmarshalled_from_parse_tree.Verbose_Group(
                $,
                ($) => abort(
                    $,
                ),
                {
                    'expected properties': p_.literal.dictionary(
                        {
                            "node type": null,
                            "context directory": null,
                            "path": null,
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
                        'node type': p_change_context(
                            v_unmarshalled_from_parse_tree.Property(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'id': 'node type',
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                            ($) => Node_Type(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            ),
                        ),
                        'context directory': p_change_context(
                            v_unmarshalled_from_parse_tree.Property(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'id': 'context directory',
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                            ($) => v_external_path.Context_Path(
                                $,
                                ($) => abort(
                                    $,
                                ),
                            ),
                        ),
                        'path': p_change_context(
                            v_unmarshalled_from_parse_tree.Property(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'id': 'path',
                                    'subdocument context': p_.literal.not_set(),
                                },
                            ),
                            ($) => v_external_path.Node_Path(
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
)

export const Node_Type: t_signatures.Node_Type = ($, abort) => p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            $,
        ),
    ),
    ($) => p_.from.text(
        $['option']['token']['value'],
    ).to_state($, 
        ($, $t):t_out.Node_Type => {
            switch ($t) {
                case 'file':
                    return p_change_context(
                        $['value'],
                        ($) => ['file', v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )],
                    )
                case 'directory':
                    return p_change_context(
                        $['value'],
                        ($) => ['directory', v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )],
                    )
                case 'other':
                    return p_change_context(
                        $['value'],
                        ($) => ['other', v_unmarshalled_from_parse_tree.Nothing(
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
)
