import type * as p_ from 'pareto-core/interface/refiner'

import type * as s_out from "../../../interface/schemas/fs_unrestricted_path.js"
import type * as s_in from "pareto-fountain-pen/interface/data/list_of_characters"
import type * as s_function from "./non_normalized_path.js"

export namespace s_function2 {
    export type Parameters = { 'pedantic': boolean }

}

export type Node_Path = p_.Refiner_With_Parameter<
    s_out.Node_Path,
    s_function.Error,
    s_in.List_of_Characters,
    s_function2.Parameters
>

