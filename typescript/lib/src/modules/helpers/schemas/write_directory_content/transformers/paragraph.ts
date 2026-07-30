import * as p_ from 'pareto-core/implementation/transformer'

//schemas
import type * as s_in from "../schema.js"
import type * as s_out from "pareto-fountain-pen/modules/paragraph/schemas/paragraph/schema"

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
import * as ser_write_file from "../../../../unrestricted/schemas/write_file/serializers.js"
import * as ser_remove from "../../../../unrestricted/schemas/remove/serializers.js"

//shorthands
import * as sh from "pareto-fountain-pen/modules/paragraph/schemas/paragraph/shorthands/deprecated"

export const Node_Error: declarations.Node_Error = ($) => p_.from.state($).decide(
    ($) => {
        switch ($[0]) {
            case 'file': return p_.option($, ($) => sh.ph.text(ser_write_file.Error($)))
            case 'directory': return p_.option($, ($) => Error($))
            default: return p_.exhaustive($[0])
        }
    })

export const Error: declarations.Error = ($) => p_.from.state($).decide(
    ($) => {
        switch ($[0]) {
            case 'directory content': return p_.option($, ($) => sh.ph.indent(
                sh.pg.sentences(p_.from.dictionary($).convert_to_list(
                    ($, id) => sh.sentence([
                        sh.ph.text(id),
                        sh.ph.text(": "),
                        Node_Error($)
                    ])))
            ))
            case 'remove': return p_.option($, ($) => sh.ph.text(ser_remove.Error($)))
            default: return p_.exhaustive($[0])
        }
    })