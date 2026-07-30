import * as p_ from 'pareto-core/interface/schema'

import type * as s_read_directory from "../../../unrestricted/schemas/read_directory/schema.js"
import type * as s_read_file from "../../../unrestricted/schemas/read_file/schema.js"
import type * as s_path from "../../../unrestricted/schemas/path/schema.js"
import type * as s_directory_contents from "../nested_directory_content_as_read/schema.js"



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
