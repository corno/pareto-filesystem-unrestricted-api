
import * as p_i from 'pareto-core/interface/__internal/Abort'

import * as i_generic from "liana-core/interface/data/deserialize"

import * as i_in from "pareto-fountain-pen/interface/generated/liana/schemas/list_of_characters/data"

import * as i_out from "../../data.js"

export namespace List_of_Characters_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.List_of_Characters
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type tab_size = number
        
    }
    
}

export type List_of_Characters_ = (
    context: List_of_Characters_.I,
    abort: p_i.Abort<List_of_Characters_.E>,
    parameters: {
        readonly 'tab size': List_of_Characters_.P.tab_size
    },
) => List_of_Characters_.O

export type { 
    List_of_Characters_ as List_of_Characters, 
}
