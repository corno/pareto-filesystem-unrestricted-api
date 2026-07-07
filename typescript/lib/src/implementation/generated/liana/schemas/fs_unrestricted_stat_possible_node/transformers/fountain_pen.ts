
import * as p_ from 'pareto-core/implementation/transformer'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/fs_unrestricted_stat_possible_node/signatures/transformers/fountain_pen.js"

import * as v_serialize from "astn-core/implementation/manual/transformers/sealed_target/prose"

import * as v_marshall from "./astn_sealed_target.js"

export const Parameters: t_signatures.Parameters = ($) => v_serialize.Document(
    v_marshall.Parameters(
        $,
    ),
)

export const Error: t_signatures.Error = ($) => v_serialize.Document(
    v_marshall.Error(
        $,
    ),
)

export const Result: t_signatures.Result = ($) => v_serialize.Document(
    v_marshall.Result(
        $,
    ),
)

export const Node_Type: t_signatures.Node_Type = ($) => v_serialize.Document(
    v_marshall.Node_Type(
        $,
    ),
)
