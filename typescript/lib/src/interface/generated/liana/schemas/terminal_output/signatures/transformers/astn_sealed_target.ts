
import * as p_i from 'pareto-core/interface/__internal/Abort'

import * as i_out from "astn-core/interface/generated/liana/schemas/sealed_target/data"

import * as i_in from "../../data.js"

export namespace Message_ {
    
    export type I = i_in.Message
    
    export type O = i_out.Value
    
    export namespace P {
        
    }
    
}

export type Message_ = (
    context: Message_.I,
) => Message_.O

export type { 
    Message_ as Message, 
}
