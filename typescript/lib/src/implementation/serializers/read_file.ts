import * as p_ from 'pareto-core/implementation/serializer'

//schemas
import type * as s_in from "../../interface/schemas/fs_unrestricted_read_file.js"

namespace declarations {
    export type Error = p_.Phrase_Serializer<
        s_in.Error
    >
}


//dependencies
import * as t_path_to_text from "./unrestricted_path.js"

//shorthands
import * as sh from "pareto-fountain-pen/shorthands/prose_simple/deprecated"

export const Error: declarations.Error = ($) => sh.ph.composed([
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
    t_path_to_text.Node_Path($.path),

])