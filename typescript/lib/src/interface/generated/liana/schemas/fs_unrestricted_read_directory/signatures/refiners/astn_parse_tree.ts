
import * as p_i from 'pareto-core/interface/__internal/Abort'

import * as i_generic from "liana-core/interface/data/unmarshall"

import * as i_out from "../../data.js"

import * as i_in from "astn-core/interface/generated/liana/schemas/parse_tree/data"

export namespace Parameters_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Parameters
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Parameters_ = (
    context: Parameters_.I,
    abort: p_i.Abort<Parameters_.E>,
) => Parameters_.O

export namespace Error_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Error
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Error_ = (
    context: Error_.I,
    abort: p_i.Abort<Error_.E>,
) => Error_.O

export namespace Result_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Result
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Result_ = (
    context: Result_.I,
    abort: p_i.Abort<Result_.E>,
) => Result_.O

export namespace Node_Type_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Node_Type
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Node_Type_ = (
    context: Node_Type_.I,
    abort: p_i.Abort<Node_Type_.E>,
) => Node_Type_.O

export type { 
    Parameters_ as Parameters, 
    Error_ as Error, 
    Result_ as Result, 
    Node_Type_ as Node_Type, 
}
