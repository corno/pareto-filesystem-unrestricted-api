
import * as p_i from 'pareto-core/interface/__internal/Abort'

import * as i_in from "../../data.js"

import * as i_out from "pareto-fountain-pen/interface/generated/liana/schemas/prose/data"

export namespace List_of_Characters_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Paragraph
    
    export namespace P {
        
    }
    
}

export type List_of_Characters_ = (
    context: List_of_Characters_.I,
) => List_of_Characters_.O

export type { 
    List_of_Characters_ as List_of_Characters, 
}
