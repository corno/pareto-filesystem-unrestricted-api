
import * as p_ from 'pareto-core-shorthands/unconstrained_target'
import * as p_di from 'pareto-core/interface/schema'
import p_text_from_list from 'pareto-core/implementation/transformer/specials/text_from_list'

//schemas
import type * as s_target from "../../schemas/to_be_written_directory_content.js"

export namespace n {


    export const file = (
        lines: p_di.List<string>,
        newline: string,
    ): s_target.Node => ['file', {
        'content': {
            'lines': lines,
            'parameters': {
                'newline': newline
            }
        },
    }]

    export const directory = (
        content: p_di.Dictionary<s_target.Node>,
    ): s_target.Node => ['directory', content]
}