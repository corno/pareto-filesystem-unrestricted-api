// import * as p_ from 'pareto-core/implementation/transformer'

// import * as d_out from "../../../../interface/generated/liana/schemas/fs_unrestricted_path/data.js"
// import * as d_in from "../../../../interface/generated/liana/schemas/fs_sandboxed_path/data.js"

// export const Context_Path: p_i.Transformer_With_Parameter<
// d_in.Context_Path, d_out.Context_Path, { 'context': d_out.Context_Path }> = ($, $p) => ({
//     'start': $p.context.start,
//     'subpath': p_.literal.nested_ list([
//         $p.context.subpath,
//         $.subpath,
//     ]),
// })


// export const Node_Path: p_i.Transformer_With_Parameter<
// d_in.Node_Path, d_out.Node_Path, { 'context': d_out.Context_Path }> = ($, $p) => ({
//     'context': Context_Path($.context, { 'context': $p.context }),
//     'node': $.node,
// })