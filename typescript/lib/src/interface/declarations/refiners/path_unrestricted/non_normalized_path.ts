
import type * as p_ from 'pareto-core/interface/refiner'

import type * as d_out from "../../../generated/liana/schemas/fs_unrestricted_path/data.js"
import type * as d_in from "../../../generated/liana/schemas/path_non_normalized/data.js"

export type Error =
    | ['trailing slash not allowed', null]
    | ['no node', null]



export type Node_Path = p_.Refiner_With_Parameter<
    d_out.Node_Path,
    Error,
    d_in.Non_Normalized_Path,
    { 'pedantic': boolean }
>

