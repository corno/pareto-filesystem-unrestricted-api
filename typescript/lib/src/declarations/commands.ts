import * as p_c from 'pareto-core/interface/command_implementation'

import type * as command_interfaces from "../interface/commands.js"

/**
 * uses a directory content representation to write files in a directory structure
 */
export type write_directory_content = p_c.Command_Implementation<
    command_interfaces.write_directory_content,
    null,
    null,
    {
        // 'make directory': resources_pareto.commands.make_directory
        'write file': command_interfaces.write_file

    }
>