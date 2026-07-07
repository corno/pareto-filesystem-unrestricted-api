import * as p_ from 'pareto-core/interface/data'

import * as d_read_directory from "../generated/liana/schemas/fs_unrestricted_read_directory/data.js"
import * as d_path from "../generated/liana/schemas/fs_unrestricted_path/data.js"
import * as d_directory_structure from "./directory_structure.js"



export type Parameters = {
    'path': d_path.Context_Path,
}

export type Result = d_directory_structure.Directory

export type Node_Error =
    | ['directory', Error]

export type Error =
    | ['read directory', d_read_directory.Error]
    | ['directory structure processing', p_.Dictionary<Node_Error>]
