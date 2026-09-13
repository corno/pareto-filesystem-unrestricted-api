import type * as p_di from 'pareto-core/schema'
import * as p_ from 'pareto-core/transformer'

//schemas
import type * as s_in from "../schema.js"
import type * as s_out from "../schema.js"

export const Context_Path = (
    $: s_in.Context_Path,
    $p: {
        'addition': p_di.List<string>
    }
): s_out.Context_Path => ({
    'start': $.start,
    'subpath': p_.literal.segmented_list([
        $.subpath,
        $p.addition,
    ]),
})
