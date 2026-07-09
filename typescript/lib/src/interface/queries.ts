import * as p_ from 'pareto-core/interface/query_interface'

import type * as d_fs_unrestricted_read_directory from "./generated/liana/schemas/fs_unrestricted_read_directory/data.js"
import type * as d_fs_unrestricted_read_file from "./generated/liana/schemas/fs_unrestricted_read_file/data.js"
import type * as d_fs_unrestricted_stat from "./generated/liana/schemas/fs_unrestricted_stat/data.js"
import type * as d_fs_unrestricted_stat_possible_node from "./generated/liana/schemas/fs_unrestricted_stat_possible_node/data.js"
import type * as d_read_directory_content from "./data/read_directory_content.js"
import type * as d_read_directory_structure from "./data/read_directory_structure.js"

export type read_directory = p_.Query_Interface<
    d_fs_unrestricted_read_directory.Result,
    d_fs_unrestricted_read_directory.Error,
    d_fs_unrestricted_read_directory.Parameters
>
export type read_file = p_.Query_Interface<
    d_fs_unrestricted_read_file.Result,
    d_fs_unrestricted_read_file.Error,
    d_fs_unrestricted_read_file.Parameters
>
export type stat = p_.Query_Interface<
    d_fs_unrestricted_stat.Result,
    d_fs_unrestricted_stat.Error,
    d_fs_unrestricted_stat.Parameters
>
export type stat_possible_node = p_.Query_Interface<
    d_fs_unrestricted_stat_possible_node.Result,
    d_fs_unrestricted_stat_possible_node.Error,
    d_fs_unrestricted_stat_possible_node.Parameters
>

//these are not part of the API
export type read_directory_content = p_.Query_Interface<
    d_read_directory_content.Result,
    d_read_directory_content.Error,
    d_read_directory_content.Parameters
>
export type read_directory_structure = p_.Query_Interface<
    d_read_directory_structure.Result,
    d_read_directory_structure.Error,
    d_read_directory_structure.Parameters
>
