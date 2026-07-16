import type * as p_di from 'pareto-core/interface/schema'
import * as p_ from 'pareto-core/implementation/transformer'

//schemas
import type * as s_in from "../../../interface/schemas/path.js"
import type * as s_out from "../../../interface/schemas/path.js"

export const extend_context_path_with_single_step = (
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

export const extend_context_path_with_list = (
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


export const deprecated_extend_node_path = (
    $: s_in.Node_Path,
    $p: {
        'addition': string
    }
): s_out.Node_Path => ({
    'context': deprecated_node_path_to_context_path($),
    'node': $p.addition,
})

export const create_node_path = (
    $: s_in.Context_Path,
    $p: {
        node: string
    }
): s_out.Node_Path => ({
    'context': $,
    'node': $p.node,
})

export const deprecated_node_path_to_context_path = (
    $: s_in.Node_Path
): s_out.Context_Path => extend_context_path_with_single_step(
    $.context,
    {
        'addition': $.node
    }
)