import * as p_ from 'pareto-core/implementation/transformer'
import * as p_i from 'pareto-core/interface/transformer'
import p_list_build_deprecated from 'pareto-core/implementation/refiner/specials/list_build_deprecated'
import p_list_from_text from 'pareto-core/implementation/refiner/specials/list_from_text'

//data types
import * as d_in from "../../../../interface/generated/liana/schemas/fs_unrestricted_path/data.js"
import * as d_out from "pareto-fountain-pen/interface/generated/liana/schemas/list_of_characters/data"

export namespace interface_ {
    export type Node_Path = p_i.Transformer<
        d_in.Node_Path,
        d_out.List_of_Characters
    >
    export type Context_Path = p_i.Transformer<
        d_in.Context_Path,
        d_out.List_of_Characters
    >
}

export const Node_Path: interface_.Node_Path = ($) => p_.literal.segmented_list([
    Context_Path($.context),
    p_.literal.list([
        47, // '/'
    ]),
    p_list_from_text(
        $.node,
        ($) => $
    )
])

export const Context_Path: interface_.Context_Path = ($) => p_.literal.segmented_list([
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
                        default: return p_.au($[0])
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
])