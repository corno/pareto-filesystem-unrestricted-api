import * as p_ from 'pareto-core/implementation/command'
import p_list_from_text from 'pareto-core/implementation/refiner/specials/list_from_text'


import * as interface_ from "../../../interface/declarations/commands.js"

//data types
import * as d_write_directory_content from "../../../interface/data/write_directory_content.js"

//dependencies
import * as t_path_to_path from "../transformers/unrestricted_path/unrestricted_path.js"

export const $$: interface_.write_directory_content = p_.command(
    ($d, $s, $q, $c) => [
        // $c['make directory'].execute(
        //     $p.path,
        //     ($): inf.Error => ['make directory', $]
        // ),
        p_.s.dictionary(
            $d.directory,
            ($, id): p_.Command_Block<d_write_directory_content.Node_Error> => [
                p_.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'other': return p_.option($, ($) => [
                            //what should be done with this?
                        ])
                        case 'file': return p_.option($, ($) => [
                            $c['write file'].execute(
                                {
                                    'path': t_path_to_path.create_node_path($d.path, { 'node': id }),
                                    'data': p_list_from_text(
                                        $,
                                        ($) => $
                                    ),
                                },
                                ($): d_write_directory_content.Node_Error => ['file', $]
                            )
                        ])
                        case 'directory': return p_.option($, ($) => [
                            $$(null, null, $c).execute(
                                {
                                    'directory': $,
                                    'path': t_path_to_path.extend_context_path_with_single_step($d.path, { 'addition': id }),
                                },
                                ($): d_write_directory_content.Node_Error => ['directory', $]

                            )
                        ])

                        default: return p_.au($[0])
                    }
                })
            ],
            ($): d_write_directory_content.Error => ['directory content', $]
        )
    ]
)
