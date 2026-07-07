// import p_iterate from 'pareto-core/implementation/refiner/specials/iterate'
// import p_text_from_list from 'pareto-core/implementation/refiner/specials/text_from_list'

// import * as d_out from "../../../../interface/generated/liana/schemas/fs_sandboxed_path/data.js"
// import * as d_in from "pareto-fountain-pen/interface/generated/liana/schemas/list_of_characters/data"
// import * as d_error from "./non_normalized_path.js"
// import * as d_function from "../../../../interface/data/sandboxed_path_from_non_normalized_path.js"

// export type Parameters = { 'pedantic': boolean }

// export namespace signatures {
//     export type Node_Path = p_i.Refiner_With_Parameter<
// d_out.Node_Path, d_error.Error, d_in.List_of_Characters, Parameters
// >
// }


// //dependencies
// import * as r_from_non_normalized_path from "./non_normalized_path.js"
// import * as r_non_normalized_path_from_loc from "../path non_normalized/list_of_characters.js"

// export const Node_Path: signatures.Node_Path = ($, abort, $p) => {
//     return r_from_non_normalized_path.Node_Path(
//         r_non_normalized_path_from_loc.Non_Normalized_Path($),
//         abort,
//         $p,
//     )
// }

// export const Context_Path: p_i.Refiner<
// d_out.Context_Path, d_function.Error, d_in.List_of_Characters
// > = (
//     $,
//     abort,
// ) => r_from_non_normalized_path.Context_Path(
//     r_non_normalized_path_from_loc.Non_Normalized_Path($),
//     abort,
// )