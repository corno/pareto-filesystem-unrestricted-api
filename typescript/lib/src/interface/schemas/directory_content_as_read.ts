import * as p_ from 'pareto-core/interface/schema'
import * as p_prose from 'pareto-core/temp/fountain_pen/prose'

import type * as s_list_of_characters from "./list_of_characters.js"

export type Node =
    | ['other', null]
    | ['file', {
        'data': s_list_of_characters.List_Of_Characters
    }]
    | ['directory', Directory]

export type Directory = p_.Dictionary<Node>
