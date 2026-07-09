

import type * as interface_ from "../../../declarations/refiners/path_unrestricted/list_of_characters.js"

import type * as d_out from "../../../interface/generated/liana/schemas/fs_unrestricted_path/data.js"
import type * as d_in from "pareto-fountain-pen/interface/generated/liana/schemas/list_of_characters/data"


//dependencies
import * as r_from_non_normalized_path from "./non_normalized_path.js"
import * as r_non_normalized_path_from_loc from "../path non_normalized/list_of_characters.js"

export const Node_Path: interface_.Node_Path = ($, abort, $p) => {
    return r_from_non_normalized_path.Node_Path(
        r_non_normalized_path_from_loc.Non_Normalized_Path($),
        abort,
        $p,
    )
}

export const Context_Path = ( //This one is exceptional because it will never produce errors
    $: d_in.List_of_Characters,
): d_out.Context_Path => r_from_non_normalized_path.Context_Path(
    r_non_normalized_path_from_loc.Non_Normalized_Path($),
)