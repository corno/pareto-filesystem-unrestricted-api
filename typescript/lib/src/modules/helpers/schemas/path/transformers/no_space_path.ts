import * as p_ from 'pareto-core/transformer'

import type * as s_in from "../schema.js"

import type * as s_out from "../schema.js"

//dependencies
import * as ser from "../serializers.js"

export const Node_Path = (
    $: s_in.Node_Path,
): s_out.Node_Path => ({
    'context': Context_Path($.context),
    'node': ser.No_Space_Name($.node),
})

export const Context_Path = (
    $: s_in.Context_Path,
): s_out.Context_Path => ({
    'start': $.start,
    'subpath': p_.from.list($.subpath).map(
        ($) => ser.No_Space_Name($)
    )
})