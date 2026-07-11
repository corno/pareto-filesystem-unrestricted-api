import type * as p_ from 'pareto-core/interface/refiner'

//data types
import type * as d_out from "../../../interface/schemas/fs_unrestricted_path.js"
import type * as d_in from "pareto-fountain-pen/interface/data/text"
import type * as d_function from "./non_normalized_path.js"

export namespace d_function2 {

    export type Parameters = { 'pedantic': boolean }

}



export type Node_Path = p_.Refiner_With_Parameter<
    d_out.Node_Path,
    d_function.Error,
    d_in.Text,
    d_function2.Parameters
>

