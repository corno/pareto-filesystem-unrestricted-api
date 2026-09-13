import * as p_ from 'pareto-core/serializer'
import p_list_from_text from 'pareto-core/refiner/specials/list_from_text'
import p_text_from_list from 'pareto-core/transformer/specials/text_from_list'

export const Name: p_.Serializer<string> = ($) => p_text_from_list(
    p_list_from_text(
        $,
        ($) => $ === 0x20 //space
            ? 0x5F //underscore
            : $ 
    ),
    ($) => $
)