import type * as p_ from 'pareto-core/interface/refiner'

//data types
import type * as d_out from "../../../interface/generated/liana/schemas/path_non_normalized/data.js"



export type Non_Normalized_Path = p_.Production_Without_Error<
    d_out.Non_Normalized_Path,
    number,
    null
>

