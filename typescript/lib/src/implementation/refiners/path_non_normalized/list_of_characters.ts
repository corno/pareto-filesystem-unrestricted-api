import type * as p_t from 'pareto-core/interface/transformer'
import p_iterate from 'pareto-core/implementation/refiner/specials/iterate'

//schemas
import type * as s_in from "../../../interface/schemas/list_of_characters.js"
import type * as s_out from "../../../interface/schemas/path_non_normalized.js"

//dependencies
import * as pr_path from "./character.js"


export const Non_Normalized_Path: p_t.Transformer<
    s_in.List_of_Characters,
    s_out.Non_Normalized_Path
> = ($) => p_iterate({
    list: $,
    end_info: null,
    assign: (iterator) => pr_path.Non_Normalized_Path(iterator),
    on_dangling_item: null,
})