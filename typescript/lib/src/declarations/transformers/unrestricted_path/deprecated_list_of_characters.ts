
import type * as p_ from 'pareto-core/interface/transformer'

//data types
import type * as d_in from "../../../interface/generated/liana/schemas/fs_unrestricted_path/data.js"
import type * as d_out from "pareto-fountain-pen/interface/generated/liana/schemas/list_of_characters/data"


export type Node_Path = p_.Transformer<
    d_in.Node_Path,
    d_out.List_of_Characters
>
export type Context_Path = p_.Transformer<
    d_in.Context_Path,
    d_out.List_of_Characters
>

