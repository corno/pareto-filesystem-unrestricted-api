import * as p_ from 'pareto-core/interface/query_interface'

import type * as s_fs_unrestricted_read_directory from "../schemas/read_directory/schema.js"
import type * as s_fs_unrestricted_read_file from "../schemas/read_file/schema.js"
import type * as s_fs_unrestricted_stat from "../schemas/stat/schema.js"
import type * as s_fs_unrestricted_stat_possible_node from "../schemas/stat_possible_node/schema.js"

export type read_directory = p_.Query_Interface<
    s_fs_unrestricted_read_directory.Result,
    s_fs_unrestricted_read_directory.Error,
    s_fs_unrestricted_read_directory.Parameters
>
export type read_file = p_.Query_Interface<
    s_fs_unrestricted_read_file.Result,
    s_fs_unrestricted_read_file.Error,
    s_fs_unrestricted_read_file.Parameters
>
export type stat = p_.Query_Interface<
    s_fs_unrestricted_stat.Result,
    s_fs_unrestricted_stat.Error,
    s_fs_unrestricted_stat.Parameters
>
export type stat_possible_node = p_.Query_Interface<
    s_fs_unrestricted_stat_possible_node.Result,
    s_fs_unrestricted_stat_possible_node.Error,
    s_fs_unrestricted_stat_possible_node.Parameters
>
