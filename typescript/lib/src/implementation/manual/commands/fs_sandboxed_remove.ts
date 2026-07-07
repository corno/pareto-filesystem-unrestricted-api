
// import * as interface_ from "../../../interface/signatures/filesystem_sandboxed.js"

// //dependencies
// import * as t_path_to_path from "../transformers/sandboxed_path/unrestricted_path.js"


// export const $$: interface_.commands.remove = p_.command(
//     ($d, $s, $q, $c, $x) => [
//         $c.unrestricted.execute(
//             {
//                 'path': t_path_to_path.Context_Path(
//                     $p.path,
//                     {
//                         'context': $x.context
//                     }
//                 ),
//                 'error if not exists': $p['error if not exists']
//             },
//             ($) => $,
//         )
//     ]
// )