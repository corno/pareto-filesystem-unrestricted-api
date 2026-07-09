import p_text_from_list from 'pareto-core/implementation/transformer/specials/text_from_list'

import type * as interface_ from "../../../../declarations/transformers/unrestricted_path/text.js"

//dependencies
import * as t_to_loc from "./deprecated_list_of_characters.js"

export const Node_Path: interface_.Node_Path = ($) => p_text_from_list(
    t_to_loc.Node_Path($),
    ($) => $
)

export const Context_Path: interface_.Context_Path = ($) => p_text_from_list(
    t_to_loc.Context_Path($),
    ($) => $
)