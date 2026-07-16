import * as p_ from 'pareto-core/interface/query_interface'

import type * as s_read_directory_content from "../schemas/read_directory_content.js"
import type * as s_read_directory_structure from "../schemas/read_directory_structure.js"

export type read_directory_content = p_.Query_Interface<
    s_read_directory_content.Result,
    s_read_directory_content.Error,
    s_read_directory_content.Parameters
>
export type read_directory_structure = p_.Query_Interface<
    s_read_directory_structure.Result,
    s_read_directory_structure.Error,
    s_read_directory_structure.Parameters
>
