import * as p_ from 'pareto-core/interface/schema'

import type * as s_read_directory from "../../unrestricted/interface/schemas/read_directory.js"
import type * as s_read_file from "../../unrestricted/interface/schemas/read_file.js"
import type * as s_path from "../../unrestricted/interface/schemas/path.js"
import type * as s_directory_contents from "./directory_content_as_read.js"



export type Parameters = {
    'path': s_path.Context_Path,
}

export type Result = s_directory_contents.Directory

export type Node_Error =
    | ['file', s_read_file.Error]
    | ['directory', Error]

export type Error =
    | ['read directory', s_read_directory.Error]
    | ['directory content processing', p_.Dictionary<Node_Error>]
