import * as p_ from 'pareto-core/implementation/transformer'

import type * as interface_ from "../../../../declarations/transformers/read_file/prose.js"


//dependencies
import * as t_path_to_text from "../unrestricted_path/deprecated_list_of_characters.js"

//shorthands
import * as sh from "pareto-fountain-pen/shorthands/prose/deprecated"

export const Error: interface_.Error = ($) => sh.ph.composed([
    p_.from.state($.type).decide(
        ($) => {
            switch ($[0]) {
                case 'permission denied': return p_.option($, ($) => sh.ph.literal("permission denied"))
                case 'file does not exist': return p_.option($, ($) => sh.ph.composed([
                    sh.ph.literal("file does not exist"),

                ]))
                case 'node is not a file': return p_.option($, ($) => sh.ph.literal("node is not a file"))
                case 'file too large': return p_.option($, ($) => sh.ph.literal("file too large"))
                case 'device not ready': return p_.option($, ($) => sh.ph.literal("device not ready"))
                default: return p_.exhaustive($[0])
            }
        }),
    sh.ph.literal(": "),
    sh.ph.serialize(t_path_to_text.Node_Path($.path)),

])