
import * as p_ from 'pareto-core/implementation/transformer'

import p_change_context from 'pareto-core/implementation/refiner/specials/change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/list_of_characters/signatures/transformers/boilerplate_for_migrate.js"

import * as t_out from "../../../../../../interface/generated/liana/schemas/list_of_characters/data.js"

export const List_of_Characters: t_signatures.List_of_Characters = ($) => p_.from.list($,
).map(
    ($) => $,
)
