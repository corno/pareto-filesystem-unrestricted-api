
// import type * as d_out from "../../../interface/generated/liana/schemas/fs_sandboxed_path/data.js"
// import type * as d_in from "../../../interface/generated/liana/schemas/path_non_normalized/data.js"
// import type * as d_function from "../../../interface/data/sandboxed_path_from_non_normalized_path.js"

// import { remove_last_element } from "../../../temp/temp_core.js"


// type Intermediate_Result = {
//     subppath: d_out.Context_Subpath
//     node: string | null
//     up_steps: number
// }

// export type Error =
//     | ['trailing slash not allowed', null]
//     | ['no node', null]
//     | ['absolute path not allowed', null]
//     | ['up steps not allowed', null]

// export namespace interface_ {
//     export type Node_Path = p_i.Refiner_With_Parameter<
// d_out.Node_Path, Error, d_in.Non_Normalized_Path, { 'pedantic': boolean }
// >
// }

// export const Node_Path: interface_.Node_Path = ($, abort, $p) => {

//     if ($p.pedantic) {
//         if ($['trailing slash']) {
//             abort(['trailing slash not allowed', null])
//         }
//     }
//     let intermediate_result: Intermediate_Result = {

//         subppath: p_.literal.list([]),
//         node: null,
//         up_steps: 0,
//     }

//     $.segments.__  l_map_deprecated(
// ($) => {
//         intermediate_result = p_.from.state($).decide(
//($): Intermediate_Result => {
//             switch ($[0]) {
//                 case 'parent': return p_.option($, ($) => ({
//                     'up_steps': intermediate_result.node === null
//                         ? p_.from.list(intermediate_result.subppath).is_ empty()
//                             ? intermediate_result.up_steps + 1
//                             : intermediate_result.up_steps
//                         : intermediate_result.up_steps,
//                     'subppath': intermediate_result.node === null
//                         ? p_.from.list(intermediate_result.subppath).is_ empty()
//                             ? p_.literal.list([])
//                             : remove_last_element(intermediate_result.subppath)
//                         : intermediate_result.subppath,
//                     'node': null,
//                 }))
//                 case 'child': return p_.option($, ($): Intermediate_Result => ({
//                     'up_steps': intermediate_result.up_steps,
//                     'subppath': intermediate_result.node === null
//                         ? intermediate_result.subppath
//                         : p_.literal.nested_ list([
//                             intermediate_result.subppath,
//                             [
//                                 intermediate_result.node
//                             ]
//                         ]),
//                     'node': $,
//                 }))
//                 case 'current': return p_.option($, ($) => intermediate_result)
//                 case 'nothing': return p_.option($, ($) => intermediate_result)
//                 default: return p_.exhaustive($[0])
//             }
//         })
//     })

//     if (intermediate_result.node === null) {
//         return abort(['no node', null])
//     }

//     if ($['leading slash']) {
//         return abort(['absolute path not allowed', null])
//     }
//     if (intermediate_result.up_steps > 0) {
//         return abort(['up steps not allowed', null])
//     }
//     return {
//         'context': {
//             'start': null,
//             'subpath': intermediate_result.subppath,
//         },
//         'node': intermediate_result.node
//     }

// }

// type Intermediate_Result2 = {
//     subppath: d_out.Context_Subpath
//     up_steps: number
// }

// export const Context_Path: p_i.Refiner<
// d_out.Context_Path, d_function.Error, d_in.Non_Normalized_Path
// > = (
//     $,
//     abort,
// ) => {

//     let intermediate_result: Intermediate_Result2 = {

//         subppath: p_.literal.list([]),
//         up_steps: 0,
//     }

//     $.segments.__ l_map_deprecated(
// ($) => {
//         intermediate_result = p_.from.state($).decide(
// ($): Intermediate_Result2 => {
//             switch ($[0]) {
//                 case 'parent': return p_.option($, ($) => ({
//                     'up_steps': p_.from.list(intermediate_result.subppath).is_ empty()
//                         ? intermediate_result.up_steps + 1
//                         : intermediate_result.up_steps,
//                     'subppath': p_.from.list(intermediate_result.subppath).is_ empty()
//                         ? intermediate_result.subppath
//                         : remove_last_element(intermediate_result.subppath),
//                     'node': null,
//                 }))
//                 case 'child': return p_.option($, ($): Intermediate_Result2 => ({
//                     'up_steps': intermediate_result.up_steps,
//                     'subppath': p_.literal.nested_ list([
//                         intermediate_result.subppath,
//                         [
//                             $
//                         ]
//                     ]),
//                 }))
//                 case 'current': return p_.option($, ($) => intermediate_result)
//                 case 'nothing': return p_.option($, ($) => intermediate_result)
//                 default: return p_.exhaustive($[0])
//             }
//         })
//     })

//     if ($['leading slash']) {
//         return abort(['absolute path not allowed', null])
//     }
//     if (intermediate_result.up_steps > 0) {
//         return abort(['up steps not allowed', null])
//     }
//     return {
//         'start': null,
//         'subpath': intermediate_result.subppath,
//     }

// }
