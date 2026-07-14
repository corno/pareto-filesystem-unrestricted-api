import * as p_ from 'pareto-core/implementation/command'
import p_list_from_text from 'pareto-core/implementation/refiner/specials/list_from_text'

//interface dependencies
import type * as command_interfaces from "../../interface/commands.js"

//schemas
import type * as s_write_directory_content from "../../interface/schemas/write_directory_content.js"

//dependencies
import * as t_path_to_path from "../transformers/unrestricted_path/unrestricted_path.js"

export const $$: p_.Command_Implementation<
    p_.Command_Interface<
        s_write_directory_content.Error,
        s_write_directory_content.Parameters
    >,
    null,
    null,
    {
        // 'make directory': resources_pareto.commands.make_directory
        'write file': command_interfaces.write_file

    }
> = p_.command(
    ($d, $s, $q, $c) => [
        // $c['make directory'].execute(
        //     $p.path,
        //     ($): inf.Error => ['make directory', $]
        // ),
        p_.s.dictionary(
            $d.directory,
            ($, id): p_.Command_Block<s_write_directory_content.Node_Error> => [
                p_.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'other': return p_.option($, ($) => [
                            //what should be done with this?
                        ])
                        case 'file': return p_.option($, ($) => [
                            $c['write file'].execute(
                                {
                                    'path': t_path_to_path.create_node_path($d.path, { 'node': id }),
                                    'data': $['data'],
                                },
                                ($): s_write_directory_content.Node_Error => ['file', $]
                            )
                        ])
                        case 'directory': return p_.option($, ($) => [
                            $$(null, null, $c).execute(
                                {
                                    'directory': $,
                                    'path': t_path_to_path.extend_context_path_with_single_step($d.path, { 'addition': id }),
                                },
                                ($): s_write_directory_content.Node_Error => ['directory', $]

                            )
                        ])

                        default: return p_.exhaustive($[0])
                    }
                })
            ],
            ($): s_write_directory_content.Error => ['directory content', $]
        )
    ]
)
