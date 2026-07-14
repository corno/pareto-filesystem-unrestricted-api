import * as p_ from 'pareto-core/interface/schema'
import * as p_prose from 'pareto-core/temp/fountain_pen/prose'


export type Node =
    | ['other', null]
    | ['file', {
        'data': p_prose.Paragraph
    }]
    | ['directory', Directory]

export type Directory = p_.Dictionary<Node>
