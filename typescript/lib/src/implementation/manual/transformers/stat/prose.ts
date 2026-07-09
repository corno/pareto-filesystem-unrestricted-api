import * as p_ from 'pareto-core/implementation/transformer'

import type * as interface_ from "../../../../declarations/transformers/stat/prose.js"

//dependencies
import * as t_path_to_text from "../unrestricted_path/deprecated_list_of_characters.js"

//shorthands
import * as sh from "pareto-fountain-pen/shorthands/prose/deprecated"

export const Error: interface_.Error = ($) => sh.ph.composed([
    p_.from.state($.type).decide(
        ($) => {
            switch ($[0]) {
                case 'node does not exist': return p_.option($, ($) => sh.ph.literal("node does not exist"))
                default: return p_.exhaustive($[0])
            }
        }),
    sh.ph.literal(": "),
    sh.ph.serialize(t_path_to_text.Node_Path($.path)),
])