import * as p_ from 'pareto-core/implementation/transformer'
import * as p_i from 'pareto-core/interface/transformer'

//data types
import type * as d_in from "../../../../interface/generated/liana/schemas/fs_unrestricted_read_directory/data.js"
import type * as d_out from "pareto-fountain-pen/interface/generated/liana/schemas/prose/data"

export namespace interface_ {

    export type Error = p_i.Transformer<
        d_in.Error,
        d_out.Phrase
    >

}

//dependencies
import * as t_path_to_text from "../unrestricted_path/deprecated_list_of_characters.js"

//shorthands
import * as sh from "pareto-fountain-pen/shorthands/prose/deprecated"

export const Error: interface_.Error = ($) => sh.ph.composed([
    p_.from.state($.type).decide(
        ($) => {
            switch ($[0]) {
                case 'directory does not exist': return p_.option($, ($) => sh.ph.literal("directory does not exist"))
                case 'node is not a directory': return p_.option($, ($) => sh.ph.literal("node is not a directory"))
                default: return p_.exhaustive($[0])
            }
        }),
    sh.ph.literal(": "),
    sh.ph.serialize(t_path_to_text.Context_Path($.path)),
])