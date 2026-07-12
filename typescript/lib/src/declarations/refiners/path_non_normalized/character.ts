import type * as p_ from 'pareto-core/interface/refiner'

//schemas
import type * as s_out from "../../../interface/schemas/path_non_normalized.js"


export type Non_Normalized_Path = p_.Production_Without_Error<
    s_out.Non_Normalized_Path,
    number,
    null
>

