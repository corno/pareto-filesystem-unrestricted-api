import * as p_ from 'pareto-core/interface/data'

// import type * as d_make_directory from "../generated/liana/schemas/make_directory/data.js"
import type * as d_write_file from "../generated/liana/schemas/fs_unrestricted_write_file/data.js"
import type * as d_path from "../generated/liana/schemas/fs_unrestricted_path/data.js"
import type * as d_directory_contents from "../data/directory_content.js"

export type Parameters = {
    'path': d_path.Context_Path,
    'directory': d_directory_contents.Directory
}

export type Node_Error =
    | ['file', d_write_file.Error]
    | ['directory', Error]

export type Error =
    // | ['make directory', d_make_directory.Error]
    | ['directory content', p_.Dictionary<Node_Error>]
