import * as p_ from 'pareto-core/implementation/query'
import p_super_query_result from 'pareto-core/implementation/query/super_query_result'

import * as d_directory_structure from "../../../interface/data/directory_structure.js"
import * as d_read_directory_structure from "../../../interface/data/read_directory_structure.js"

import * as interface_ from "../../../interface/declarations/queries.js"

//dependencies
import * as t_path_to_path from "../transformers/unrestricted_path/unrestricted_path.js"

export const $$: interface_.queries.read_directory_structure = p_.query(
    ($d, $s, $q) => p_super_query_result($q['read directory'](
        {
            'path': $d.path,
        },
        ($): d_read_directory_structure.Error => ['read directory', $],
    )).query(
        ($) => p_.e.dictionary(
            $,
            ($) => {
                const path = $.path
                return p_.decide.state($['node type'], ($) => {
                    switch ($[0]) {
                        case 'directory': return p_.option($, ($) => p_super_query_result($$(
                            null,
                            $q,
                        )(
                            {
                                'path': t_path_to_path.deprecated_node_path_to_context_path(path),
                            },
                            ($): d_read_directory_structure.Node_Error => ['directory', $]
                        )).transform(
                            ($): d_directory_structure.Node => ['directory', $]))
                        case 'file': return p_.option($, ($) => p_.e.direct_result(['file', null]))
                        case 'other': return p_.option($, ($) => p_.e.direct_result(['other', null]))
                        default: return p_.au($[0])
                    }
                })
            },
            ($): d_read_directory_structure.Error => ['directory structure processing', $],
        )
    )
)
