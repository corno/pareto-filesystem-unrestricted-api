// import * as p_ from 'pareto-core/implementation/transformer'

// import type * as d_out from "../../../interface/schemas/fs_sandboxed_path.js"
// import type * as d_in from "../../../interface/schemas/fs_sandboxed_path.js"

// export const extend_context_path_with_single_step = (
//     $: d_in.Context_Path,
//     $p: {
//         'addition': string
//     }
// ): d_out.Context_Path => ({
//     'start': null,
//     'subpath': p_.literal.nested_ list([
//         $.subpath,
//         [
//             $p.addition
//         ]
//     ]),
// })

// export const extend_context_path_with_list = (
//     $: d_in.Context_Path,
//     $p: {
//         'addition': p_di.List<string>
//     }
// ): d_out.Context_Path => ({
//     'start': null,
//     'subpath': p_.literal.nested_ list([
//         $.subpath,
//         $p.addition,
//     ]),
// })


// export const deprecated_extend_node_path = (
//     $: d_in.Node_Path,
//     $p: {
//         'addition': string
//     }
// ): d_out.Node_Path => ({
//     'context': deprecated_node_path_to_context_path($),
//     'node': $p.addition,
// })

// export const create_node_path = (
//     $: d_in.Context_Path,
//     $p: {
//         node: string
//     }
// ): d_out.Node_Path => ({
//     'context': $,
//     'node': $p.node,
// })

// export const deprecated_node_path_to_context_path = (
//     $: d_in.Node_Path
// ): d_out.Context_Path => extend_context_path_with_single_step(
//     $.context,
//     {
//         'addition': $.node
//     }
// )