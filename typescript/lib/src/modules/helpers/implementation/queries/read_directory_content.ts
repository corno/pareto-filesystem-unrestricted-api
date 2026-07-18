import * as p_ from 'pareto-core/implementation/query'
import p_super_query_result from 'pareto-core/implementation/query/super_query_result'


import type * as s_read_directory_content from "../../schemas/read_directory_content.js"
import type * as s_directory_content from "../../schemas/directory_content_as_read.js"
import type * as query_interfaces_unrestricted from "../../../unrestricted/interface/queries.js"

//dependencies
import * as t_path_to_path from "../../../unrestricted/implementation/transformers/path/path.js"

export const $$: p_.Query_Implementation<
     p_.Query_Interface<
        s_read_directory_content.Result,
        s_read_directory_content.Error,
        s_read_directory_content.Parameters
    >,
    null,
    {
        'read directory': query_interfaces_unrestricted.read_directory,
        'read file': query_interfaces_unrestricted.read_file,
    }
> = p_.query(
    ($d, $s, $q) => p_super_query_result($q['read directory'](
        {
            'path': $d.path,
        },
        ($): s_read_directory_content.Error => ['read directory', $],
    )).query(
        ($) => p_.e.dictionary(
            $,
            ($): p_.Query_Result<s_directory_content.Node, s_read_directory_content.Node_Error> => {
                const path = $.path
                return p_.decide.state($['node type'], ($) => {
                    switch ($[0]) {
                        case 'file': return p_.option($, ($) => p_super_query_result($q['read file'](
                            path,
                            ($): s_read_directory_content.Node_Error => ['file', $],
                        )).transform(
                            ($) => ['file', {
                                'data': $.data
                            }]))
                        case 'directory': return p_.option($, ($) => p_super_query_result($$(
                            null,
                            $q,
                        )(
                            {
                                'path': t_path_to_path.deprecated_node_path_to_context_path(path),
                            },
                            ($): s_read_directory_content.Node_Error => ['directory', $]
                        )).transform(
                            ($): s_directory_content.Node => ['directory', $]))
                        case 'other': return p_.option($, ($) => p_.e.direct_result(['other', null]))
                        default: return p_.exhaustive($[0])
                    }
                })
            },
            ($): s_read_directory_content.Error => ['directory content processing', $],
        )
    )
)
