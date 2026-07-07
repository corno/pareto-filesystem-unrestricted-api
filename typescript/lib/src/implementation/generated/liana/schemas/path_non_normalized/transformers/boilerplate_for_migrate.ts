
import * as p_ from 'pareto-core/implementation/transformer'

const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <State, B>($: State,  assign: ($: State) => B,  otherwise: () => B) => assign($)
import p_change_context from 'pareto-core/implementation/refiner/specials/change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/path_non_normalized/signatures/transformers/boilerplate_for_migrate.js"

import * as t_out from "../../../../../../interface/generated/liana/schemas/path_non_normalized/data.js"

export const Non_Normalized_Path: t_signatures.Non_Normalized_Path = ($) => ({
    'leading slash': p_change_context(
        $['leading slash'],
        ($) => $,
    ),
    'segments': p_change_context(
        $['segments'],
        ($) => p_.from.list($,
        ).map(
            ($) => p_decide_state(
                $,
                ($): t_out.Non_Normalized_Path.segments.L => {
                    switch ($[0]) {
                        case 'parent':
                            return p_.option(
                                $,
                                ($) => ['parent', null],
                            )
                        case 'child':
                            return p_.option(
                                $,
                                ($) => ['child', $],
                            )
                        case 'current':
                            return p_.option(
                                $,
                                ($) => ['current', null],
                            )
                        case 'nothing':
                            return p_.option(
                                $,
                                ($) => ['nothing', null],
                            )
                        default:
                            return p_.au(
                                $[0],
                            )
                    }
                },
            ),
        ),
    ),
    'trailing slash': p_change_context(
        $['trailing slash'],
        ($) => $,
    ),
})
