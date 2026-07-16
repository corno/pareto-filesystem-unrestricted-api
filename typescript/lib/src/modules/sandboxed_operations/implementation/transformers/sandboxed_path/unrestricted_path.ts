// import * as p_ from 'pareto-core/implementation/transformer'

// import type * as s_out from "../../../interface/schemas/path.js"
// import type * as s_in from "../../../interface/schemas/fs_sandboxed_path.js"

// export const Context_Path: p_i.Transformer_With_Parameter<
// s_in.Context_Path, s_out.Context_Path, { 'context': s_out.Context_Path }> = ($, $p) => ({
//     'start': $p.context.start,
//     'subpath': p_.literal.nested_ list([
//         $p.context.subpath,
//         $.subpath,
//     ]),
// })


// export const Node_Path: p_i.Transformer_With_Parameter<
// s_in.Node_Path, s_out.Node_Path, { 'context': s_out.Context_Path }> = ($, $p) => ({
//     'context': Context_Path($.context, { 'context': $p.context }),
//     'node': $.node,
// })