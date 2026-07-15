import * as p_ from 'pareto-core/implementation/serializer'

//schemas
import type * as s_in from "../../interface/schemas/fs_unrestricted_stat.js"

namespace declarations {
    export type Error = p_.Serializer<
        s_in.Error
    >
}

//dependencies
import * as t_path_to_text from "./unrestricted_path.js"

//shorthands

export const Error: declarations.Error = ($) => p_.ph.composed([
    p_.from.state($.type).decide(
        ($) => {
            switch ($[0]) {
                case 'node does not exist': return p_.option($, ($) => p_.ph.literal("node does not exist"))
                default: return p_.exhaustive($[0])
            }
        }),
    p_.ph.literal(": "),
    t_path_to_text.Node_Path($.path),
])