import * as p_ from 'pareto-core/implementation/transformer'

//schemas
import type * as s_in from "../../../schemas/read_directory_content.js"
import type * as s_out from "../../../schemas/paragraph.js"

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
import * as ser_read_directory from "../../../../unrestricted/implementation/serializers/read_directory.js"
import * as ser_read_file from "../../../../unrestricted/implementation/serializers/read_file.js"

//shorthands
import * as sh from "pareto-fountain-pen/shorthands/paragraph/deprecated"

export const Node_Error: declarations.Node_Error = ($) => p_.from.state($).decide(
    ($) => {
        switch ($[0]) {
            case 'file': return p_.option($, ($) => sh.ph.text(ser_read_file.Error($)))
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
                        sh.ph.text(id),
                        sh.ph.text(": "),
                        Node_Error($)
                    ])))
            ))
            case 'read directory': return p_.option($, ($) => sh.ph.text(ser_read_directory.Error($)))
            default: return p_.exhaustive($[0])
        }
    })