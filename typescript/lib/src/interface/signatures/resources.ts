import * as p_ci from 'pareto-core/interface/command'
import * as p_qi from 'pareto-core/interface/query'

import * as resources from "../resources.js"

export namespace commands {

    /**
     * uses a directory content representation to write files in a directory structure
     */
    export type write_directory_content = p_ci.Command_Procedure<
        resources.resources2.commands.write_directory_content,
        null,
        null,
        {
            // 'make directory': resources_pareto.commands.make_directory
            'write file': resources.resources.commands.write_file

        }
    >

}

export namespace queries {
    /**
     * creates a tree structure representing the directory structure, including file contents
     */
    export type read_directory_content = p_qi.Query_Function<
        resources.resources2.queries.read_directory_content,
        null,
        {
            'read directory': resources.resources.queries.read_directory,
            'read file': resources.resources.queries.read_file,
        }
    >
    /**
     * creates a tree structure representing the directory structure, excluding file contents
     */
    export type read_directory_structure = p_qi.Query_Function<
        resources.resources2.queries.read_directory_structure,
        null,
        {
            'read directory': resources.resources.queries.read_directory,
        }
    >

}