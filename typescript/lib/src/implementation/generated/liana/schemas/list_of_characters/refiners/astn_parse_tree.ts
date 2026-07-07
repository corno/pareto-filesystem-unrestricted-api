
import * as p_ from 'pareto-core/implementation/refiner'

import p_change_context from 'pareto-core/implementation/refiner/specials/change_context'

import p_list_from_text from 'pareto-core/implementation/refiner/specials/list_from_text'

import p_variables from 'pareto-core/implementation/refiner/specials/variables'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/list_of_characters/signatures/refiners/astn_parse_tree.js"

import * as t_out from "../../../../../../interface/generated/liana/schemas/list_of_characters/data.js"

import * as v_unmarshalled_from_parse_tree from "liana-core/implementation/manual/refiners/unmarshalled/astn_parse_tree"

import * as v_parse_tree_to_location from "liana-core/implementation/manual/transformers/parse_tree/start_token_range"

export const List_of_Characters: t_signatures.List_of_Characters = ($, abort) => p_.from.list(v_unmarshalled_from_parse_tree.List(
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
        ($) => v_unmarshalled_from_parse_tree.Number(
            $,
            ($) => abort(
                $,
            ),
            {
                'type': ['decimal', null],
                'subdocument context': p_.literal.not_set(),
            },
        ),
    ),
)
