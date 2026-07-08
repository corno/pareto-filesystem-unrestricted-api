import * as p_ from 'pareto-core/implementation/transformer'
import type * as p_i from 'pareto-core/interface/transformer'

//data types
import type * as d_in from "../../../../interface/generated/liana/schemas/fs_unrestricted_chmod/data.js"
import type * as d_out from "pareto-fountain-pen/interface/generated/liana/schemas/prose/data"


export namespace interface_ {

    export type Error = p_i.Transformer<
        d_in.Error,
        d_out.Phrase
    >

}
import * as temp_interface_ from "../../../../interface/declarations/transformers/chmod/prose.js"

//dependencies
import * as t_path_to_text from "../unrestricted_path/deprecated_list_of_characters.js"

//shorthands
import * as sh from "pareto-fountain-pen/shorthands/prose/deprecated"

export const Error: interface_.Error = ($) => sh.ph.composed([
    p_.from.state($.type).decide(
        ($) => {
            switch ($[0]) {
                case 'path does not exist': return p_.option($, ($) => sh.ph.literal("path does not exist"))
                case 'permission denied': return p_.option($, ($) => sh.ph.literal("permission denied"))
                case 'invalid mode': return p_.option($, ($) => sh.ph.literal("invalid mode"))
                default: return p_.exhaustive($[0])
            }
        }),
    sh.ph.literal(": "),
    sh.ph.serialize(t_path_to_text.Node_Path($.path)),
])