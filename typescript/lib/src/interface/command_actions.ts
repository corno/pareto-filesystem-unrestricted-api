import * as p_ from 'pareto-core/interface/command_action'

import * as d_fs_unrestricted_chmod from "./generated/liana/schemas/fs_unrestricted_chmod/data.js"
import * as d_fs_unrestricted_copy from "./generated/liana/schemas/fs_unrestricted_copy/data.js"
import * as d_fs_unrestricted_make_directory from "./generated/liana/schemas/fs_unrestricted_make_directory/data.js"
import * as d_fs_unrestricted_remove from "./generated/liana/schemas/fs_unrestricted_remove/data.js"
import * as d_fs_unrestricted_write_file from "./generated/liana/schemas/fs_unrestricted_write_file/data.js"
import * as d_write_directory_content from "./data/write_directory_content.js"

export type chmod = p_.Command_Action<d_fs_unrestricted_chmod.Error, d_fs_unrestricted_chmod.Parameters>
export type copy = p_.Command_Action<d_fs_unrestricted_copy.Error, d_fs_unrestricted_copy.Parameters>
export type make_directory = p_.Command_Action<d_fs_unrestricted_make_directory.Error, d_fs_unrestricted_make_directory.Parameters>
export type remove = p_.Command_Action<d_fs_unrestricted_remove.Error, d_fs_unrestricted_remove.Parameters>
export type write_file = p_.Command_Action<d_fs_unrestricted_write_file.Error, d_fs_unrestricted_write_file.Parameters>

//this one is not part of the API
export type write_directory_content = p_.Command_Action<d_write_directory_content.Error, d_write_directory_content.Parameters>
