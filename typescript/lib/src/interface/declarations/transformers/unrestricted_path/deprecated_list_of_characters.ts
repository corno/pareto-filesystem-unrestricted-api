import * as p_ from 'pareto-core/implementation/transformer'
import type * as p_i from 'pareto-core/interface/transformer'
import p_list_build_deprecated from 'pareto-core/implementation/refiner/specials/list_build_deprecated'
import p_list_from_text from 'pareto-core/implementation/refiner/specials/list_from_text'

//data types
import type * as d_in from "../../../../interface/generated/liana/schemas/fs_unrestricted_path/data.js"
import type * as d_out from "pareto-fountain-pen/interface/generated/liana/schemas/list_of_characters/data"

export namespace interface_ {
    export type Node_Path = p_i.Transformer<
        d_in.Node_Path,
        d_out.List_of_Characters
    >
    export type Context_Path = p_i.Transformer<
        d_in.Context_Path,
        d_out.List_of_Characters
    >
}
