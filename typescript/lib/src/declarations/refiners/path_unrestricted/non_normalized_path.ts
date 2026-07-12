
import type * as p_ from 'pareto-core/interface/refiner'

import type * as s_in from "../../../interface/schemas/path_non_normalized.js"
import type * as s_out from "../../../interface/schemas/fs_unrestricted_path.js"

export type Error =
    | ['trailing slash not allowed', null]
    | ['no node', null]



export type Node_Path = p_.Refiner_With_Parameter<
    s_out.Node_Path,
    Error,
    s_in.Non_Normalized_Path,
    {
        'pedantic': boolean
    }
>

