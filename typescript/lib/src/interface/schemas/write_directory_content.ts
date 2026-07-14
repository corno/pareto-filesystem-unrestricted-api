import * as p_ from 'pareto-core/interface/schema'

// import type * as s_make_directory from "./generated/liana/schemas/make_directory.js"
import type * as s_write_file from "./fs_unrestricted_write_file.js"
import type * as s_path from "./fs_unrestricted_path.js"
import type * as s_directory_contents from "../schemas/to_be_written_directory_content.js"

export type Parameters = {
    'path': s_path.Context_Path,
    'directory': s_directory_contents.Directory
}

export type Node_Error =
    | ['file', s_write_file.Error]
    | ['directory', Error]

export type Error =
    // | ['make directory', s_make_directory.Error]
    | ['directory content', p_.Dictionary<Node_Error>]
