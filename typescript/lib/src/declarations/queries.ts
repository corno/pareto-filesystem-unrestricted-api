import * as p_qi from 'pareto-core/interface/query_implementation'

import * as query_interfaces from "../interface/queries.js"

export namespace queries {
    /**
     * creates a tree structure representing the directory structure, including file contents
     */
    export type read_directory_content = p_qi.Query_Implementation<
        query_interfaces.read_directory_content,
        null,
        {
            'read directory': query_interfaces.read_directory,
            'read file': query_interfaces.read_file,
        }
    >
    /**
     * creates a tree structure representing the directory structure, excluding file contents
     */
    export type read_directory_structure = p_qi.Query_Implementation<
        query_interfaces.read_directory_structure,
        null,
        {
            'read directory': query_interfaces.read_directory,
        }
    >

}