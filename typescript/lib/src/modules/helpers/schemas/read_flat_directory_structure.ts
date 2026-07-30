import * as p_ from 'pareto-core/interface/schema'

import type * as s_flat_directory_structure from "./flat_directory_structure.js"
import type * as s_read_nested_directory_structure from "./read_nested_directory_structure.js"


export type Parameters = s_read_nested_directory_structure.Parameters

export type Result = s_flat_directory_structure.Directory

export type Error = s_read_nested_directory_structure.Error
