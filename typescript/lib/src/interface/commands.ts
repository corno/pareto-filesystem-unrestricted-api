import * as p_ from 'pareto-core/interface/command_interface'

import type * as d_fs_unrestricted_chmod from "./data/fs_unrestricted_chmod.js"
import type * as d_fs_unrestricted_copy from "./data/fs_unrestricted_copy.js"
import type * as d_fs_unrestricted_make_directory from "./data/fs_unrestricted_make_directory.js"
import type * as d_fs_unrestricted_remove from "./data/fs_unrestricted_remove.js"
import type * as d_fs_unrestricted_write_file from "./data/fs_unrestricted_write_file.js"
import type * as d_write_directory_content from "./data/write_directory_content.js"

export type chmod = p_.Command_Interface<
    d_fs_unrestricted_chmod.Error,
    d_fs_unrestricted_chmod.Parameters
>
export type copy = p_.Command_Interface<
    d_fs_unrestricted_copy.Error,
    d_fs_unrestricted_copy.Parameters
>
export type make_directory = p_.Command_Interface<
    d_fs_unrestricted_make_directory.Error,
    d_fs_unrestricted_make_directory.Parameters
>
export type remove = p_.Command_Interface<
    d_fs_unrestricted_remove.Error,
    d_fs_unrestricted_remove.Parameters
>
export type write_file = p_.Command_Interface<
    d_fs_unrestricted_write_file.Error,
    d_fs_unrestricted_write_file.Parameters
>

//this one is not part of the API
export type write_directory_content = p_.Command_Interface<
    d_write_directory_content.Error,
    d_write_directory_content.Parameters
>
