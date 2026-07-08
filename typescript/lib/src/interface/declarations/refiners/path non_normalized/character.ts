import type * as p_ from 'pareto-core/interface/refiner'
import p_text_from_list from 'pareto-core/implementation/transformer/specials/text_from_list'
import p_unreachable_code_path from 'pareto-core/implementation/transformer/specials/unreachable_code_path'

//data types
import type * as d_out from "../../../generated/liana/schemas/path_non_normalized/data.js"



    export type Non_Normalized_Path = p_.Production_Without_Error<
        d_out.Non_Normalized_Path,
        number,
        null
    >

