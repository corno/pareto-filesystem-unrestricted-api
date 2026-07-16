import * as p_ from 'pareto-core/interface/command_interface'

import type * as s_fs_unrestricted_chmod from "./schemas/chmod.js"
import type * as s_fs_unrestricted_copy from "./schemas/copy.js"
import type * as s_fs_unrestricted_make_directory from "./schemas/make_directory.js"
import type * as s_fs_unrestricted_remove from "./schemas/remove.js"
import type * as s_fs_unrestricted_write_file from "./schemas/write_file.js"

export type chmod = p_.Command_Interface<
    s_fs_unrestricted_chmod.Error,
    s_fs_unrestricted_chmod.Parameters
>
export type copy = p_.Command_Interface<
    s_fs_unrestricted_copy.Error,
    s_fs_unrestricted_copy.Parameters
>
export type make_directory = p_.Command_Interface<
    s_fs_unrestricted_make_directory.Error,
    s_fs_unrestricted_make_directory.Parameters
>
export type remove = p_.Command_Interface<
    s_fs_unrestricted_remove.Error,
    s_fs_unrestricted_remove.Parameters
>
export type write_file = p_.Command_Interface<
    s_fs_unrestricted_write_file.Error,
    s_fs_unrestricted_write_file.Parameters
>