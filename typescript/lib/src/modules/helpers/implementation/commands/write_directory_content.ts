import * as p_ from 'pareto-core/implementation/command'
import p_list_from_text from 'pareto-core/implementation/refiner/specials/list_from_text'

//interface dependencies
import type * as command_interfaces from "../../../unrestricted/interface/commands.js"

//schemas
import type * as s_write_directory_content from "../../schemas/write_directory_content.js"

//dependencies
import * as t_path_to_path from "../../../unrestricted/implementation/transformers/path/path.js"

export const $$: p_.Command_Implementation<
    p_.Command_Interface<
        s_write_directory_content.Error,
        s_write_directory_content.Parameters
    >,
    {
        'remove before writing': boolean
    },
    null,
    {
        // 'make directory': resources_pareto.commands.make_directory
        'write file': command_interfaces.write_file,
        'remove': command_interfaces.remove,

    }
> = p_.command(
    ($d, $s, $q, $c) => [
        p_.s.if_(
            $s['remove before writing'],
            [
                $c.remove.execute(
                    {
                        'path': $d.path,
                        'error if not exists': false,
                    },
                    ($): s_write_directory_content.Error => ['remove', $]
                ),
            ],
            []
        ),
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
                                    'content': $.content
                                },
                                ($): s_write_directory_content.Node_Error => ['file', $]
                            )
                        ])
                        case 'directory': return p_.option($, ($) => [
                            $$(
                                {
                                    'remove before writing': false
                                },
                                null,
                                $c
                            ).execute(
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
