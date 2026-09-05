import * as p_ from 'pareto-core/schema'

import type * as s_list_of_characters from "../../../unrestricted/schemas/list_of_characters/schema.js"

export type Node =
    | ['other', null]
    | ['file', File]
    | ['directory', Directory]

export type File = {
    'data': s_list_of_characters.List_Of_Characters
}

export type Directory = p_.Dictionary<Node>
