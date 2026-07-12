import * as p_ from 'pareto-core/implementation/transformer'

//schemas
import type * as s_in from "../../../interface/schemas/read_directory_content.js"
import type * as s_out from "../../../interface/schemas/prose.js"

namespace declarations {
    export type Error = p_.Transformer<
        s_in.Error,
        s_out.Phrase
    >
    export type Node_Error = p_.Transformer<
        s_in.Node_Error,
        s_out.Phrase
    >
}

//dependencies
import * as t_read_directory_to_prose from "../read_directory/prose.js"
import * as t_read_file_to_prose from "../read_file/prose.js"

//shorthands
import * as sh from "pareto-fountain-pen/shorthands/prose/deprecated"

export const Node_Error: declarations.Node_Error = ($) => p_.from.state($).decide(
    ($) => {
        switch ($[0]) {
            case 'file': return p_.option($, ($) => t_read_file_to_prose.Error($))
            case 'directory': return p_.option($, ($) => Error($))
            default: return p_.exhaustive($[0])
        }
    })

export const Error: declarations.Error = ($) => p_.from.state($).decide(
    ($) => {
        switch ($[0]) {
            case 'directory content processing': return p_.option($, ($) => sh.ph.indent(
                sh.pg.sentences(p_.from.dictionary($).convert_to_list(
                    ($, id) => sh.sentence([
                        sh.ph.literal(id),
                        sh.ph.literal(": "),
                        Node_Error($)
                    ])))
            ))
            case 'read directory': return p_.option($, ($) => t_read_directory_to_prose.Error($))
            default: return p_.exhaustive($[0])
        }
    })