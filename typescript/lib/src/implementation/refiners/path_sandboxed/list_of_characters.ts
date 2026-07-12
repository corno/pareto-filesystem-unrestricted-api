// import p_iterate from 'pareto-core/implementation/refiner/specials/iterate'
// import p_text_from_list from 'pareto-core/implementation/refiner/specials/text_from_list'

// import type * as s_out from "../../../interface/schemas/fs_sandboxed_path.js"
// import type * as s_in from "../../../interface/schemas/list_of_characters.js"
// import type * as s_error from "./non_normalized_path.js"
// import type * as s_function from "../../../interface/schemas/sandboxed_path_from_non_normalized_path.js"

// export type Parameters = { 'pedantic': boolean }

// export namespace interface_ {
//     export type Node_Path = p_i.Refiner_With_Parameter<
// s_out.Node_Path, s_error.Error, s_in.List_of_Characters, Parameters
// >
// }


// //dependencies
// import * as r_from_non_normalized_path from "./non_normalized_path.js"
// import * as r_non_normalized_path_from_loc from "../path non_normalized/list_of_characters.js"

// export const Node_Path: interface_.Node_Path = ($, abort, $p) => {
//     return r_from_non_normalized_path.Node_Path(
//         r_non_normalized_path_from_loc.Non_Normalized_Path($),
//         abort,
//         $p,
//     )
// }

// export const Context_Path: p_i.Refiner<
// s_out.Context_Path, s_function.Error, s_in.List_of_Characters
// > = (
//     $,
//     abort,
// ) => r_from_non_normalized_path.Context_Path(
//     r_non_normalized_path_from_loc.Non_Normalized_Path($),
//     abort,
// )