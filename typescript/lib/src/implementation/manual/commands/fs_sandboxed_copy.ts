
// import type * as interface_ from "../../../interface/signatures/filesystem_sandboxed.js"

// //dependencies
// import * as t_path_to_path from "../transformers/sandboxed_path/unrestricted_path.js"


// export const $$: interface_.commands.copy = p_.command(
//     ($d, $s, $q, $c, $x) => [
//         $c.unrestricted.execute(
//             {
//                 'source': t_path_to_path.Node_Path(
//                     $p.source,
//                     {
//                         'context': $x.context
//                     }
//                 ),
//                 'target': t_path_to_path.Node_Path(
//                     $p.target,
//                     {
//                         'context': $x.context
//                     }
//                 ),
//                 'options': $p.options
//             },
//             ($) => $,
//         )
//     ]
// )