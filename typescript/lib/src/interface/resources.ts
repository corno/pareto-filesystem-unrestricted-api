import * as p_ci from 'pareto-core/interface/command'
import * as p_qi from 'pareto-core/interface/query'

import * as d_fs_unrestricted_chmod from "./generated/liana/schemas/fs_unrestricted_chmod/data.js"
import * as d_fs_unrestricted_copy from "./generated/liana/schemas/fs_unrestricted_copy/data.js"
import * as d_fs_unrestricted_make_directory from "./generated/liana/schemas/fs_unrestricted_make_directory/data.js"
import * as d_fs_unrestricted_read_directory from "./generated/liana/schemas/fs_unrestricted_read_directory/data.js"
import * as d_fs_unrestricted_read_file from "./generated/liana/schemas/fs_unrestricted_read_file/data.js"
import * as d_fs_unrestricted_remove from "./generated/liana/schemas/fs_unrestricted_remove/data.js"
import * as d_fs_unrestricted_stat from "./generated/liana/schemas/fs_unrestricted_stat/data.js"
import * as d_fs_unrestricted_stat_possible_node from "./generated/liana/schemas/fs_unrestricted_stat_possible_node/data.js"
import * as d_fs_unrestricted_write_file from "./generated/liana/schemas/fs_unrestricted_write_file/data.js"
import * as d_read_directory_content from "./data/read_directory_content.js"
import * as d_read_directory_structure from "./data/read_directory_structure.js"
import * as d_write_directory_content from "./data/write_directory_content.js"


export namespace resources {

    export namespace commands {

        export type chmod = p_ci.Command<d_fs_unrestricted_chmod.Error, d_fs_unrestricted_chmod.Parameters>
        export type copy = p_ci.Command<d_fs_unrestricted_copy.Error, d_fs_unrestricted_copy.Parameters>
        export type make_directory = p_ci.Command<d_fs_unrestricted_make_directory.Error, d_fs_unrestricted_make_directory.Parameters>
        export type remove = p_ci.Command<d_fs_unrestricted_remove.Error, d_fs_unrestricted_remove.Parameters>
        export type write_file = p_ci.Command<d_fs_unrestricted_write_file.Error, d_fs_unrestricted_write_file.Parameters>

    }

    export namespace queries {

        export type read_directory = p_qi.Query<d_fs_unrestricted_read_directory.Result, d_fs_unrestricted_read_directory.Error, d_fs_unrestricted_read_directory.Parameters>
        export type read_file = p_qi.Query<d_fs_unrestricted_read_file.Result, d_fs_unrestricted_read_file.Error, d_fs_unrestricted_read_file.Parameters>
        export type stat = p_qi.Query<d_fs_unrestricted_stat.Result, d_fs_unrestricted_stat.Error, d_fs_unrestricted_stat.Parameters>
        export type stat_possible_node = p_qi.Query<d_fs_unrestricted_stat_possible_node.Result, d_fs_unrestricted_stat_possible_node.Error, d_fs_unrestricted_stat_possible_node.Parameters>

    }
}

export namespace resources2 {

    export namespace commands {

        export type write_directory_content = p_ci.Command<d_write_directory_content.Error, d_write_directory_content.Parameters>
    }

    export namespace queries {

        export type read_directory_content = p_qi.Query<d_read_directory_content.Result, d_read_directory_content.Error, d_read_directory_content.Parameters>
        export type read_directory_structure = p_qi.Query<d_read_directory_structure.Result, d_read_directory_structure.Error, d_read_directory_structure.Parameters>

    }

}