import type * as p_ from 'pareto-core/interface/refiner'

//data types
import type * as d_out from "../../../interface/schemas/path_non_normalized.js"



export type Non_Normalized_Path = p_.Production_Without_Error<
    d_out.Non_Normalized_Path,
    number,
    null
>

