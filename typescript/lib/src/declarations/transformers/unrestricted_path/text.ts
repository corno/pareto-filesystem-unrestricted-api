import type * as p_ from 'pareto-core/interface/transformer'

//data types
import type * as d_in from "../../../interface/schemas/fs_unrestricted_path.js"
import type * as d_out from "pareto-fountain-pen/interface/data/text"


export type Node_Path = p_.Transformer<
    d_in.Node_Path,
    d_out.Text
>
export type Context_Path = p_.Transformer<
    d_in.Context_Path,
    d_out.Text
>

