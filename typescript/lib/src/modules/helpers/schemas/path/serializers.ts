import * as p_ from 'pareto-core/serializer'
import p_list_from_text from 'pareto-core/refiner/specials/list_from_text'
import p_text_from_list from 'pareto-core/transformer/specials/text_from_list'
import p_variables from 'pareto-core/transformer/specials/variables'

export const Non_Escaped_Name: p_.Serializer<string> = ($) => {
    if ($ === "") {
        return "$empty"
    }
    if ($ === "..") {
        return "$parent"
    }
    if ($ === ".") {
        return "$current"
    }
    return p_text_from_list(
        p_.from.list(
            p_list_from_text(
                $,
                ($) => p_variables(
                    () => {
                        switch ($) {
                            case 0x24: //dollar
                                return p_.literal.list([0x24, 0x24]) //dollar, dollar
                            case 0x5C: //backslash
                                return p_.literal.list([0x24, 0x62, 0x73]) //dollar, b, s
                            case 0x2F: //forward slash
                                return p_.literal.list([0x24, 0x66, 0x73]) //dollar, f, s
                            default:
                                return p_.literal.list([$])
                        }
                    }
                )
            )
        ).flatten(
            ($) => $
        ),
        ($) => $
    )
}
export const No_Space_Name: p_.Serializer<string> = ($) => {
    return p_text_from_list(
        p_.from.list(
            p_list_from_text(
                Non_Escaped_Name($),
                ($) => p_variables(
                    () => {
                        switch ($) {
                            case 0x20: //space
                                return p_.literal.list([0x5F]) //underscore
                            case 0x5F: //underscore
                                return p_.literal.list([0x24, 0x5F]) //dollar, underscore
                            default:
                                return p_.literal.list([$])
                        }
                    }
                )
            )
        ).flatten(
            ($) => $
        ),
        ($) => $
    )
}