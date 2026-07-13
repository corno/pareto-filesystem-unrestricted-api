import * as p_ from 'pareto-core/implementation/serializer'
import p_list_build_deprecated from 'pareto-core/implementation/refiner/specials/list_build_deprecated'
import p_list_from_text from 'pareto-core/implementation/refiner/specials/list_from_text'

//schemas
import type * as s_in from "../../interface/schemas/fs_unrestricted_path.js"
import type * as s_out from "../../interface/schemas/list_of_characters.js"

namespace declarations {
    export type Node_Path = p_.Phrase_Serializer<
        s_in.Node_Path
    >
    export type Context_Path = p_.Phrase_Serializer<
        s_in.Context_Path
    >
}

import * as sh from "pareto-fountain-pen/shorthands/prose/deprecated"

export const Node_Path: declarations.Node_Path = ($) => sh.ph.composed([
    Context_Path($.context),
    sh.ph.list_of_characters(
        p_.literal.segmented_list([
            p_.literal.list([
                47, // '/'
            ]),
            p_list_from_text(
                $.node,
                ($) => $
            )
        ])
    )
])

export const Context_Path: declarations.Context_Path = ($) => sh.ph.list_of_characters(
    p_list_build_deprecated(
        ($i) => {
            p_.from.state($.start).decide(
                ($): null => {
                    switch ($[0]) {
                        case 'absolute': return p_.option($, ($) => {
                            // $i.add_character(47) // '/'
                            return null
                        })
                        case 'relative': return p_.option($, ($) => {
                            $i['add item'](46) // .

                            $i['add list'](
                                p_.from.list(p_.from.number(
                                    $['up steps']
                                ).repeat(
                                    p_.literal.list([
                                        47, // '/'
                                        46, // .
                                        46, // .
                                    ])
                                )
                                ).flatten(
                                    ($) => $
                                )
                            )
                            return null
                        })
                        default: return p_.exhaustive($[0])
                    }
                })
            if (p_.from.list($.subpath).on_has_items(
                () => true,
                () => false
            ) && $.start[0] === 'absolute') {
                $i['add item'](47) // '/'
            }
            p_.from.list($.subpath).map(
                ($) => {
                    $i['add item'](47) // '/'
                    $i['add list'](p_list_from_text(
                        $,
                        ($) => $
                    ))
                    return null
                }
            )
        }
    )
)