
import * as p_ from 'pareto-core/implementation/transformer'
import * as p_di from 'pareto-core/interface/data'
const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <OV extends p_di.Value, B extends p_di.Value>($: p_di.Optional_Value<OV>,  assign: ($: OV) => B,  otherwise: () => B) => p_.from.optional($).decide(assign, otherwise)
import p_change_context from 'pareto-core/implementation/refiner/specials/change_context'

import _p_text_from_list from 'pareto-core/implementation/transformer/specials/text_from_list'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/fs_unrestricted_chmod/signatures/transformers/astn_sealed_target.js"

import * as t_out from "astn-core/interface/generated/liana/schemas/sealed_target/data"

import * as v_primitives_to_text from "liana-core/implementation/manual/transformers/primitives/text"

import * as v_external_path from "../../fs_unrestricted_path/transformers/astn_sealed_target.js"

export const Parameters: t_signatures.Parameters = ($) => ['group', ['verbose', p_.literal.dictionary(
    {
        "path": p_change_context(
            $['path'],
            ($) => v_external_path.Node_Path(
                $,
            ),
        ),
        "mode": p_change_context(
            $['mode'],
            ($) => ['group', ['verbose', p_.literal.dictionary(
                {
                    "owner": p_change_context(
                        $['owner'],
                        ($) => Permissions(
                            $,
                        ),
                    ),
                    "group": p_change_context(
                        $['group'],
                        ($) => Permissions(
                            $,
                        ),
                    ),
                    "others": p_change_context(
                        $['others'],
                        ($) => Permissions(
                            $,
                        ),
                    ),
                    "special bits": p_change_context(
                        $['special bits'],
                        ($) => ['optional', p_decide_optional(
                            $,
                            ($): t_out.Value.optional => ['set', ['group', ['verbose', p_.literal.dictionary(
                                {
                                    "setuid": p_change_context(
                                        $['setuid'],
                                        ($) => ['text', {
                                            'delimiter': ['none', null],
                                            'value': v_primitives_to_text.true_false(
                                                $,
                                            ),
                                        }],
                                    ),
                                    "setgid": p_change_context(
                                        $['setgid'],
                                        ($) => ['text', {
                                            'delimiter': ['none', null],
                                            'value': v_primitives_to_text.true_false(
                                                $,
                                            ),
                                        }],
                                    ),
                                    "sticky": p_change_context(
                                        $['sticky'],
                                        ($) => ['text', {
                                            'delimiter': ['none', null],
                                            'value': v_primitives_to_text.true_false(
                                                $,
                                            ),
                                        }],
                                    ),
                                },
                            )]]],
                            () => ['not set', null],
                        )],
                    ),
                },
            )]],
        ),
    },
)]]

export const Permissions: t_signatures.Permissions = ($) => ['group', ['verbose', p_.literal.dictionary(
    {
        "read": p_change_context(
            $['read'],
            ($) => ['text', {
                'delimiter': ['none', null],
                'value': v_primitives_to_text.true_false(
                    $,
                ),
            }],
        ),
        "write": p_change_context(
            $['write'],
            ($) => ['text', {
                'delimiter': ['none', null],
                'value': v_primitives_to_text.true_false(
                    $,
                ),
            }],
        ),
        "execute": p_change_context(
            $['execute'],
            ($) => ['text', {
                'delimiter': ['none', null],
                'value': v_primitives_to_text.true_false(
                    $,
                ),
            }],
        ),
    },
)]]

export const Error: t_signatures.Error = ($) => ['group', ['verbose', p_.literal.dictionary(
    {
        "path": p_change_context(
            $['path'],
            ($) => v_external_path.Node_Path(
                $,
            ),
        ),
        "type": p_change_context(
            $['type'],
            ($) => ['state', p_decide_state(
                $,
                ($): t_out.Value.state => {
                    switch ($[0]) {
                        case 'path does not exist':
                            return p_.option(
                                $,
                                ($) => ({
                                    'option': 'path does not exist',
                                    'value': ['nothing', null],
                                }),
                            )
                        case 'permission denied':
                            return p_.option(
                                $,
                                ($) => ({
                                    'option': 'permission denied',
                                    'value': ['nothing', null],
                                }),
                            )
                        case 'invalid mode':
                            return p_.option(
                                $,
                                ($) => ({
                                    'option': 'invalid mode',
                                    'value': ['nothing', null],
                                }),
                            )
                        default:
                            return p_.au(
                                $[0],
                            )
                    }
                },
            )],
        ),
    },
)]]
