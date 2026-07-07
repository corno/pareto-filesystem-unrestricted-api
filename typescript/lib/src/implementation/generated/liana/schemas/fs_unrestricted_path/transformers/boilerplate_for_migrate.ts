
import * as p_ from 'pareto-core/implementation/transformer'

const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <State, B>($: State,  assign: ($: State) => B,  otherwise: () => B) => assign($)
import p_change_context from 'pareto-core/implementation/refiner/specials/change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/fs_unrestricted_path/signatures/transformers/boilerplate_for_migrate.js"

import * as t_out from "../../../../../../interface/generated/liana/schemas/fs_unrestricted_path/data.js"

export const Node_Path: t_signatures.Node_Path = ($) => ({
    'context': p_change_context(
        $['context'],
        ($) => Context_Path(
            $,
        ),
    ),
    'node': p_change_context(
        $['node'],
        ($) => $,
    ),
})

export const Context_Path: t_signatures.Context_Path = ($) => ({
    'start': p_change_context(
        $['start'],
        ($) => Start(
            $,
        ),
    ),
    'subpath': p_change_context(
        $['subpath'],
        ($) => Context_Subpath(
            $,
        ),
    ),
})

export const Context_Subpath: t_signatures.Context_Subpath = ($) => p_.from.list($,
).map(
    ($) => $,
)

export const Start: t_signatures.Start = ($) => p_decide_state(
    $,
    ($): t_out.Start => {
        switch ($[0]) {
            case 'absolute':
                return p_.option(
                    $,
                    ($) => ['absolute', null],
                )
            case 'relative':
                return p_.option(
                    $,
                    ($) => ['relative', {
                        'up steps': p_change_context(
                            $['up steps'],
                            ($) => Up_Steps(
                                $,
                            ),
                        ),
                    }],
                )
            default:
                return p_.au(
                    $[0],
                )
        }
    },
)

export const Up_Steps: t_signatures.Up_Steps = ($) => $
