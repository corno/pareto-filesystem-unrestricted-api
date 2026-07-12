import p_list_from_text from 'pareto-core/implementation/refiner/specials/list_from_text'

import type * as interface_ from "../../../declarations/refiners/path_unrestricted/text.js"

//schemas
import type * as s_out from "../../../interface/schemas/fs_unrestricted_path.js"
import type * as s_in from "pareto-fountain-pen/interface/data/text"

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
    $: s_in.Text,
): s_out.Context_Path => r_from_list_of_characters.Context_Path(
    p_list_from_text(
        $,
        ($) => $
    )
)