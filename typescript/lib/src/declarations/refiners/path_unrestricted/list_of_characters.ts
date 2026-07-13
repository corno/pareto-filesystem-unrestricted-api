import type * as p_ from 'pareto-core/interface/refiner'

import type * as s_in from "../../../interface/schemas/list_of_characters.js"
import type * as s_out from "../../../interface/schemas/fs_unrestricted_path.js"
import type * as s_error from "./non_normalized_path.js"

export namespace s_parameters {
    export type Parameters = { 'pedantic': boolean }

}

export type Node_Path = p_.Refiner_With_Parameter<
    s_out.Node_Path,
    s_error.Error,
    s_in.List_Of_Characters,
    s_parameters.Parameters
>

