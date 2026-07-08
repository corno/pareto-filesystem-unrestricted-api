import type * as p_i from 'pareto-core/interface/transformer'
import p_text_from_list from 'pareto-core/implementation/transformer/specials/text_from_list'

//data types
import type * as d_in from "../../../generated/liana/schemas/fs_unrestricted_path/data.js"
import type * as d_out from "pareto-fountain-pen/interface/generated/liana/schemas/text/data"


    export type Node_Path = p_i.Transformer<
        d_in.Node_Path,
        d_out.Text
    >
    export type Context_Path = p_i.Transformer<
        d_in.Context_Path,
        d_out.Text
    >

