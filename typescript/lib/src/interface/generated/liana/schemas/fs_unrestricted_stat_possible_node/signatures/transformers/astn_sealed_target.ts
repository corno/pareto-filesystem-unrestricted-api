
import * as p_i from 'pareto-core/interface/__internal/Abort'

import * as i_out from "astn-core/interface/generated/liana/schemas/sealed_target/data"

import * as i_in from "../../data.js"

export namespace Parameters_ {
    
    export type I = i_in.Parameters
    
    export type O = i_out.Value
    
    export namespace P {
        
    }
    
}

export type Parameters_ = (
    context: Parameters_.I,
) => Parameters_.O

export namespace Error_ {
    
    export type I = i_in.Error
    
    export type O = i_out.Value
    
    export namespace P {
        
    }
    
}

export type Error_ = (
    context: Error_.I,
) => Error_.O

export namespace Result_ {
    
    export type I = i_in.Result
    
    export type O = i_out.Value
    
    export namespace P {
        
    }
    
}

export type Result_ = (
    context: Result_.I,
) => Result_.O

export namespace Node_Type_ {
    
    export type I = i_in.Node_Type
    
    export type O = i_out.Value
    
    export namespace P {
        
    }
    
}

export type Node_Type_ = (
    context: Node_Type_.I,
) => Node_Type_.O

export type { 
    Parameters_ as Parameters, 
    Error_ as Error, 
    Result_ as Result, 
    Node_Type_ as Node_Type, 
}
