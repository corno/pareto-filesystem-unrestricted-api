import * as p_ from 'pareto-core/implementation/transformer'
import p_text_from_list from 'pareto-core/implementation/transformer/specials/text_from_list'

//schemas
import type * as s_in from "../../../interface/schemas/fs_unrestricted_path.js"
import type * as s_out from "../../../interface/schemas/text.js"

namespace declarations {
    export type Node_Path = p_.Transformer<
        s_in.Node_Path,
        s_out.Text
    >
    export type Context_Path = p_.Transformer<
        s_in.Context_Path,
        s_out.Text
    >
}

//dependencies
import * as t_to_loc from "./deprecated_list_of_characters.js"

export const Node_Path: declarations.Node_Path = ($) => p_text_from_list(
    t_to_loc.Node_Path($),
    ($) => $
)

export const Context_Path: declarations.Context_Path = ($) => p_text_from_list(
    t_to_loc.Context_Path($),
    ($) => $
)