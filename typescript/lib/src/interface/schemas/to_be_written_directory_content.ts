import * as p_ from 'pareto-core/interface/schema'
import * as p_prose from 'pareto-core/temp/fountain_pen/prose'


export type Node =
    | ['other', null]
    | ['file', {
        'paragraph': p_prose.Paragraph
        'newline': string
        'indentation': string
    }]
    | ['directory', Directory]

export type Directory = p_.Dictionary<Node>
