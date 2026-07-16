

import type * as interface_ from "../../../declarations/refiners/path/list_of_characters.js"

//schemas
import type * as s_in from "../../../interface/schemas/list_of_characters.js"
import type * as s_out from "../../../interface/schemas/path.js"

//dependencies
import * as r_from_non_normalized_path from "./non_normalized_path.js"
import * as r_non_normalized_path_from_loc from "../path_non_normalized/list_of_characters.js"

export const Node_Path: interface_.Node_Path = ($, abort, $p) => {
    return r_from_non_normalized_path.Node_Path(
        r_non_normalized_path_from_loc.Non_Normalized_Path($),
        abort,
        $p,
    )
}

export const Context_Path = ( //This one is exceptional because it will never produce errors
    $: s_in.List_Of_Characters,
): s_out.Context_Path => r_from_non_normalized_path.Context_Path(
    r_non_normalized_path_from_loc.Non_Normalized_Path($),
)