import type * as p_ from 'pareto-core/interface/refiner'

//schemas
import type * as s_out from "../../../interface/schemas/fs_unrestricted_path.js"
import type * as s_error from "./non_normalized_path.js"

export namespace s_parameters {

    export type Parameters = { 'pedantic': boolean }

}



export type Node_Path = p_.Refiner_With_Parameter<
    s_out.Node_Path,
    s_error.Error,
    string,
    s_parameters.Parameters
>

