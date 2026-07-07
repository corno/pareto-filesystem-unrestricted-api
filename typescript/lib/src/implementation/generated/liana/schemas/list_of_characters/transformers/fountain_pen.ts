
import * as p_ from 'pareto-core/implementation/transformer'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/list_of_characters/signatures/transformers/fountain_pen.js"

import * as v_serialize from "astn-core/implementation/manual/transformers/sealed_target/prose"

import * as v_marshall from "./astn_sealed_target.js"

export const List_of_Characters: t_signatures.List_of_Characters = ($) => v_serialize.Document(
    v_marshall.List_of_Characters(
        $,
    ),
)
