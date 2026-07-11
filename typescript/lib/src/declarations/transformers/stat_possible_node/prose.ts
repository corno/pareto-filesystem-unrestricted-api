
import type * as p_ from 'pareto-core/interface/transformer'

//data types
import type * as d_in from "../../../interface/schemas/fs_unrestricted_stat_possible_node.js"
import type * as d_out from "pareto-fountain-pen/interface/data/prose"



export type Error = p_.Transformer<
    d_in.Error,
    d_out.Phrase
>

