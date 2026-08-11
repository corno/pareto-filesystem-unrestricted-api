import type * as p_ from 'pareto-core/interface/refiner'
import p_list_from_text from 'pareto-core/implementation/refiner/specials/list_from_text'

//schemas
import type * as s_out from "./schema.js"
import type * as s_error from "../path_error/schema.js"

namespace s_parameters {

    export type Parameters = { 'pedantic': boolean }

}

namespace declarations {

    export type Node_Path = p_.Refiner_With_Parameter<
        s_out.Node_Path,
        s_error.Error,
        string,
        s_parameters.Parameters
    >

}


//dependencies
import * as r_from_list_of_characters from "./refiners/list_of_characters.js"


export const Node_Path: declarations.Node_Path = ($, abort, $p) => {
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
    $: string,
): s_out.Context_Path => r_from_list_of_characters.Context_Path(
    p_list_from_text(
        $,
        ($) => $
    )
)