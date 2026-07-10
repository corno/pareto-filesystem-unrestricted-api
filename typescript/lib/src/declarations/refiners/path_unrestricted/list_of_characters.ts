import type * as p_ from 'pareto-core/interface/refiner'

import type * as d_out from "../../../interface/data/fs_unrestricted_path.js"
import type * as d_in from "pareto-fountain-pen/interface/generated/liana/schemas/list_of_characters/data"
import type * as d_function from "./non_normalized_path.js"

export namespace d_function2 {
    export type Parameters = { 'pedantic': boolean }

}

export type Node_Path = p_.Refiner_With_Parameter<
    d_out.Node_Path,
    d_function.Error,
    d_in.List_of_Characters,
    d_function2.Parameters
>

