import type * as p_ti from 'pareto-core/interface/transformer'
import p_list_from_text from 'pareto-core/implementation/refiner/specials/list_from_text'

//data types
import type * as d_out from "../../../interface/data/path_non_normalized.js"
import type * as d_in from "pareto-fountain-pen/interface/generated/liana/schemas/text/data"

//dependencies
import * as t_from_list_of_characters from "./list_of_characters.js"


export const Non_Normalized_Path: p_ti.Transformer<
    d_in.Text,
    d_out.Non_Normalized_Path
> = ($) => t_from_list_of_characters.Non_Normalized_Path(
    p_list_from_text(
        $,
        ($) => $
    )
)