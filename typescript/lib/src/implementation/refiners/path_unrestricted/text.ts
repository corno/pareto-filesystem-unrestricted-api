import p_list_from_text from 'pareto-core/implementation/refiner/specials/list_from_text'

import type * as interface_ from "../../../declarations/refiners/path_unrestricted/text.js"

//data types
import type * as d_out from "../../../interface/data/fs_unrestricted_path.js"
import type * as d_in from "pareto-fountain-pen/interface/generated/liana/schemas/text/data"

//dependencies
import * as r_from_list_of_characters from "./list_of_characters.js"


export const Node_Path: interface_.Node_Path = ($, abort, $p) => {
    return r_from_list_of_characters.Node_Path(
        p_list_from_text(
            $,
            ($) => $
        ),
        abort,
        $p,
    )
}

export const Context_Path = ( //This one is exceptional because it will never produce errors
    $: d_in.Text,
): d_out.Context_Path => r_from_list_of_characters.Context_Path(
    p_list_from_text(
        $,
        ($) => $
    )
)