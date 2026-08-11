import type * as p_ from 'pareto-core/interface/refiner'

//schemas
import type * as s_in from "../../list_of_characters/schema.js"
import type * as s_out from "../schema.js"
import type * as s_error from "../../path_error/schema.js"

export namespace s_parameters {
    export type Parameters = { 'pedantic': boolean }

}

namespace declarations {
    export type Node_Path = p_.Refiner_With_Parameter<
        s_out.Node_Path,
        s_error.Error,
        s_in.List_Of_Characters,
        s_parameters.Parameters
    >
}


//dependencies
import * as r_from_non_normalized_path from "./non_normalized_path.js"
import * as r_non_normalized_path_from_loc from "../../path_non_normalized/refiners/list_of_characters.js"

export const Node_Path: declarations.Node_Path = ($, abort, $p) => {
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