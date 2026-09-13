import type * as p_di from 'pareto-core/schema'
import * as p_ from 'pareto-core/transformer'

//schemas
import type * as s_in from "../schema.js"
import type * as s_out from "../schema.js"

export const Context_Path = (
    $: s_in.Context_Path,
    $p: {
        'addition': string
    }
): s_out.Context_Path => ({
    'start': $.start,
    'subpath': p_.literal.chain(
        $.subpath,
        $p.addition
    ),
})

export const Node_Path = (
    $: s_in.Node_Path,
    $p: {
        'addition': string
    }
): s_out.Node_Path => ({
    'context': Context_Path(
        $.context,
        {
            'addition': $.node
        }
    ),
    'node': $p.addition,
})
