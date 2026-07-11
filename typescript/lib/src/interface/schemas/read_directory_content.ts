import * as p_ from 'pareto-core/interface/data'

import type * as d_read_directory from "./fs_unrestricted_read_directory.js"
import type * as d_read_file from "./fs_unrestricted_read_file.js"
import type * as d_path from "./fs_unrestricted_path.js"
import type * as d_directory_contents from "./directory_content.js"



export type Parameters = {
    'path': d_path.Context_Path,
}

export type Result = d_directory_contents.Directory

export type Node_Error =
    | ['file', d_read_file.Error]
    | ['directory', Error]

export type Error =
    | ['read directory', d_read_directory.Error]
    | ['directory content processing', p_.Dictionary<Node_Error>]
