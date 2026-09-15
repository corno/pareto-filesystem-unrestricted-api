import * as p_ from 'pareto-core/command'

//interface dependencies
import type * as command_interfaces from "../../../unrestricted/commands/interfaces.js"

//schemas
import type * as s_write_directory_content from "../../schemas/write_directory_content/schema.js"

//dependencies
import * as t_path_to_path from "../../../unrestricted/schemas/path/transformers/path_extended_with_single_step.js"
import * as t_path_to_escaped_path from "../../schemas/path/transformers/no_space_path.js"

export const $$: p_.Command_Implementation<
    p_.Command_Interface<
        s_write_directory_content.Error,
        s_write_directory_content.Parameters
    >,
    {
        'replace spaces in node names by underscores': boolean,
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
                                    'path': $s['replace spaces in node names by underscores']
                                        ? t_path_to_escaped_path.Node_Path({
                                            'context': $d.path,
                                            'node': id
                                        })
                                        : {
                                            'context': $d.path,
                                            'node': id
                                        },
                                    'content': $.content
                                },
                                ($): s_write_directory_content.Node_Error => ['file', $]
                            )
                        ])
                        case 'directory': return p_.option($, ($) => [
                            $$(
                                {
                                    'remove before writing': false,
                                    'replace spaces in node names by underscores': $s['replace spaces in node names by underscores'],
                                },
                                null,
                                $c
                            ).execute(
                                {
                                    'directory': $,
                                    'path': t_path_to_path.Context_Path($d.path, { 'addition': id }),
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
