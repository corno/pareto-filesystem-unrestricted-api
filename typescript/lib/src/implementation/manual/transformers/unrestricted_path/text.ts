import * as p_i from 'pareto-core/interface/transformer'
import p_text_from_list from 'pareto-core/implementation/transformer/specials/text_from_list'

//data types
import * as d_in from "../../../../interface/generated/liana/schemas/fs_unrestricted_path/data.js"
import * as d_out from "pareto-fountain-pen/interface/generated/liana/schemas/text/data"

export namespace interface_ {
    export type Node_Path = p_i.Transformer<
        d_in.Node_Path,
        d_out.Text
    >
    export type Context_Path = p_i.Transformer<
        d_in.Context_Path,
        d_out.Text
    >
}

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