import type * as p_ from 'pareto-core/interface/refiner'
import p_list_from_text from 'pareto-core/implementation/refiner/specials/list_from_text'

//schemas
import type * as s_out from "../../interface/schemas/path.js"
import type * as s_error from "../../interface/schemas/path_error.js"

export namespace s_parameters {

    export type Parameters = { 'pedantic': boolean }

}



export type Node_Path = p_.Refiner_With_Parameter<
    s_out.Node_Path,
    s_error.Error,
    string,
    s_parameters.Parameters
>


//dependencies
import * as r_from_list_of_characters from "../refiners/path/list_of_characters.js"


export const Node_Path: Node_Path = ($, abort, $p) => {
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