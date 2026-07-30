import * as p_ from 'pareto-core/interface/schema'

import type * as s_read_nested_directory_content from "../read_nested_directory_content/schema.js"
import type * as s_flat_directory_content_as_read from "../flat_directory_content_as_read/schema.js"


export type Parameters = s_read_nested_directory_content.Parameters

export type Result = s_flat_directory_content_as_read.Data

export type Error = s_read_nested_directory_content.Error
