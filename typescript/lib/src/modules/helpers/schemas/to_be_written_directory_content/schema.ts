import * as p_ from 'pareto-core/interface/schema'

import * as s_to_be_written_file_content from "../../../unrestricted/schemas/to_be_written_file_content/schema.js"

export type Node =
    | ['other', null]
    | ['file', File]
    | ['directory', Directory]

export type Directory = p_.Dictionary<Node>

export type File = {
    'content': s_to_be_written_file_content.File_Content
}