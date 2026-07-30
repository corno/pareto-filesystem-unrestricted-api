import * as p_ from 'pareto-core/interface/schema'

import type * as s_remove from "../../../unrestricted/schemas/remove/schema.js"
import type * as s_write_file from "../../../unrestricted/schemas/write_file/schema.js"
import type * as s_path from "../../../unrestricted/schemas/path/schema.js"
import type * as s_directory_contents from "../to_be_written_directory_content/schema.js"

export type Parameters = {
    'path': s_path.Context_Path,
    'directory': s_directory_contents.Directory
}

export type Node_Error =
    | ['file', s_write_file.Error]
    | ['directory', Error]

export type Error =
    | ['remove', s_remove.Error]
    | ['directory content', p_.Dictionary<Node_Error>]

export type File_Write_Parameters = {
    'newline': string
}