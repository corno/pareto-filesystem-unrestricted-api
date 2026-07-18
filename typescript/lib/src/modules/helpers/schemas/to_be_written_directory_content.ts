import * as p_ from 'pareto-core/interface/schema'

import * as s_to_be_written_file_content from "./to_be_written_file_content.js"

export type Node =
    | ['other', null]
    | ['file', File]
    | ['directory', Directory]

export type Directory = p_.Dictionary<Node>

export type File = {
    'content': s_to_be_written_file_content.File_Content
}