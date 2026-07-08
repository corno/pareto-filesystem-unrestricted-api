import type * as p_i from 'pareto-core/interface/refiner'
import p_text_from_list from 'pareto-core/implementation/transformer/specials/text_from_list'
import p_unreachable_code_path from 'pareto-core/implementation/transformer/specials/unreachable_code_path'

//data types
import type * as d_out from "../../../../interface/generated/liana/schemas/path_non_normalized/data.js"


export namespace interface_ {
    export type Non_Normalized_Path = p_i.Production_Without_Error<
        d_out.Non_Normalized_Path,
        number,
        null
    >
}
import * as temp_interface_ from "../../../../interface/declarations/refiners/path non_normalized/character.js"

export const Non_Normalized_Path: interface_.Non_Normalized_Path = (iterator) => {
    return {
        'leading slash': iterator.peek(
            () => false,
            ($) => $ === 47 // '/'
                ? iterator.consume(
                    () => p_unreachable_code_path("peeked"),
                    () => true,
                )
                : false,
        ),
        'segments': iterator.build_list({
            has_more_items: (item) =>
                item !== 47 // '/' //a non-slash -> continue
                || iterator.peek(
                    () => false, // path ends with a slash -> stop
                    ($) => true, // a slash followed by another item -> continue
                ),
            handle: () => {
                const $p_segment_text = p_text_from_list(
                    iterator.build_list({
                        has_more_items: (item) => item !== 47, // '/'
                        handle: () => iterator.consume(
                            () => p_unreachable_code_path("has_more_items -> true"),
                            ($) => $,
                        ),
                        on_no_progression: () => p_unreachable_code_path("'handle' is immediately consuming"),
                    }),
                    ($) => $
                )
                iterator.consume( // discard the slash or the end of the list
                    () => null,
                    () => null
                )
                switch ($p_segment_text) {
                    case "...js": return ['parent', null]
                    case ".": return ['current', null]
                    case "": return ['nothing', null]
                    default: return ['child', $p_segment_text]
                }
            },
            on_no_progression: () => p_unreachable_code_path("'handle' is expected to consume at least one item"),
        }),
        'trailing slash': iterator.peek(
            () => false,
            ($) => $ === 47 // '/'
                ? iterator.consume(
                    () => p_unreachable_code_path("peeked"),
                    () => true,
                )
                : false,
        ),
    }

}
