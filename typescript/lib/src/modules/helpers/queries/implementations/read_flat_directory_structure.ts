import * as p_ from 'pareto-core/implementation/query'
import * as p_t from 'pareto-core/implementation/transformer'
import * as p_r from 'pareto-core/implementation/refiner'
import p_super_query_result from 'pareto-core/implementation/query/super_query_result'
import p_unreachable_code_path from 'pareto-core/implementation/transformer/specials/unreachable_code_path'

import type * as s_flat_directory_structure from "../../schemas/flat_directory_structure/schema.js"
import type * as s_nested_directory_structure from "../../schemas/nested_directory_structure/schema.js"
import type * as s_read_flat_directory_structure from "../../schemas/read_flat_directory_structure/schema.js"

//interface dependencies
import type * as query_interfaces_unrestricted from "../../../unrestricted/queries/interfaces.js"

//dependencies
import { $$ as q_read_nested_directory_structure } from "./read_nested_directory_structure.js"


const Directory: p_t.Transformer<
    s_nested_directory_structure.Directory,
    s_flat_directory_structure.Directory
> = ($): s_flat_directory_structure.Directory => p_t.from.dictionary($).flatten2(
    ($, id) => p_t.from.state($).decide(
        ($) => {
            switch ($[0]) {
                case 'other': return p_t.ss($, ($) => p_t.literal.dictionary({}))
                case 'file': return p_t.ss($, ($) => p_t.literal.dictionary({
                    [id]: null,
                }))
                case 'directory': return p_t.ss($, ($) => p_r.from.dictionary(
                    Directory($)
                ).re_id(
                    ($, id2) => `${id}/${id2}`,
                    () => p_unreachable_code_path("a directory can be flattened into a flat list of files"),
                ))
                default: return p_t.au($[0])
            }
        }
    ),
    {
        'duplicate_id': () => p_unreachable_code_path("a directory can be flattened into a flat list of files"),
    }
)

export const $$: p_.Query_Implementation<
    p_.Query_Interface<
        s_read_flat_directory_structure.Result,
        s_read_flat_directory_structure.Error,
        s_read_flat_directory_structure.Parameters
    >,
    null,
    {
        'read directory': query_interfaces_unrestricted.read_directory,
    }
> = p_.query(
    ($d, $s, $q) => p_super_query_result(
        q_read_nested_directory_structure(
            null,
            $q,
        )(
            {
                'path': $d.path,
            },
            ($): s_read_flat_directory_structure.Error => $,
        )
    ).transform(
        ($): s_flat_directory_structure.Directory => Directory($)
    )
)
