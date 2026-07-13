import * as p_ from 'pareto-core/implementation/serializer'

//schemas
import type * as s_in from "../../interface/schemas/fs_unrestricted_read_directory.js"

namespace declarations {
    export type Error = p_.Phrase_Serializer<
        s_in.Error
    >
}

//dependencies
import * as t_path_to_text from "./unrestricted_path.js"

//shorthands
import * as sh from "pareto-fountain-pen/shorthands/prose/deprecated"

export const Error: declarations.Error = ($) => sh.ph.composed([
    p_.from.state($.type).decide(
        ($) => {
            switch ($[0]) {
                case 'directory does not exist': return p_.option($, ($) => sh.ph.literal("directory does not exist"))
                case 'node is not a directory': return p_.option($, ($) => sh.ph.literal("node is not a directory"))
                default: return p_.exhaustive($[0])
            }
        }),
    sh.ph.literal(": "),
    t_path_to_text.Context_Path($.path),
])