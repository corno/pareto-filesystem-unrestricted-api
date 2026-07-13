import * as p_ from 'pareto-core/interface/schema'

export type Node =
    | ['other', null]
    | ['file', string]
    | ['directory', Directory]

export type Directory = p_.Dictionary<Node>
