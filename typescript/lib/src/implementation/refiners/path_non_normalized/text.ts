import type * as p_ti from 'pareto-core/interface/transformer'
import p_list_from_text from 'pareto-core/implementation/refiner/specials/list_from_text'

//schemas
import type * as s_in from "../../../interface/schemas/text.js"
import type * as s_out from "../../../interface/schemas/path_non_normalized.js"

//dependencies
import * as t_from_list_of_characters from "./list_of_characters.js"


export const Non_Normalized_Path: p_ti.Transformer<
    s_in.Text,
    s_out.Non_Normalized_Path
> = ($) => t_from_list_of_characters.Non_Normalized_Path(
    p_list_from_text(
        $,
        ($) => $
    )
)