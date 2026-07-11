import * as p_ from 'pareto-core/interface/data'

import type * as s_read_directory from "./fs_unrestricted_read_directory.js"
import type * as s_path from "./fs_unrestricted_path.js"
import type * as s_directory_structure from "./directory_structure.js"



export type Parameters = {
    'path': s_path.Context_Path,
}

export type Result = s_directory_structure.Directory

export type Node_Error =
    | ['directory', Error]

export type Error =
    | ['read directory', s_read_directory.Error]
    | ['directory structure processing', p_.Dictionary<Node_Error>]
