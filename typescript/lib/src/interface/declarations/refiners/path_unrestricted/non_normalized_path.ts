import * as p_ from 'pareto-core/implementation/refiner'
import * as p_t from 'pareto-core/implementation/transformer'
import type * as p_i from 'pareto-core/interface/refiner'

import type * as d_out from "../../../generated/liana/schemas/fs_unrestricted_path/data.js"
import type * as d_in from "../../../generated/liana/schemas/path_non_normalized/data.js"

type Intermediate_Result = {
    subppath: d_out.Context_Subpath
    node: string | null
    up_steps: number
}

export type Error =
    | ['trailing slash not allowed', null]
    | ['no node', null]

export namespace interface_ {
    
    export type Node_Path = p_i.Refiner_With_Parameter<
        d_out.Node_Path,
        Error,
        d_in.Non_Normalized_Path,
        { 'pedantic': boolean }
    >
}
