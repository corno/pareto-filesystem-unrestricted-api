import type * as p_ from 'pareto-core/interface/transformer'

//data types
import type * as s_in from "../../../interface/schemas/fs_unrestricted_path.js"
import type * as s_out from "pareto-fountain-pen/interface/data/text"


export type Node_Path = p_.Transformer<
    s_in.Node_Path,
    s_out.Text
>
export type Context_Path = p_.Transformer<
    s_in.Context_Path,
    s_out.Text
>

