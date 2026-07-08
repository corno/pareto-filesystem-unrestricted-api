import * as p_c from 'pareto-core/interface/command'

import * as command_actions from "../actions/commands.js"

/**
 * uses a directory content representation to write files in a directory structure
 */
export type write_directory_content = p_c.Command<
    command_actions.write_directory_content,
    null,
    null,
    {
        // 'make directory': resources_pareto.commands.make_directory
        'write file': command_actions.write_file

    }
>