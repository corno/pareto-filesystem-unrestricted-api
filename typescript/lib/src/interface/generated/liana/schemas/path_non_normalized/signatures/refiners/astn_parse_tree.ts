
import * as p_i from 'pareto-core/interface/__internal/Abort'

import * as i_generic from "liana-core/interface/data/unmarshall"

import * as i_out from "../../data.js"

import * as i_in from "astn-core/interface/generated/liana/schemas/parse_tree/data"

export namespace Non_Normalized_Path_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Non_Normalized_Path
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Non_Normalized_Path_ = (
    context: Non_Normalized_Path_.I,
    abort: p_i.Abort<Non_Normalized_Path_.E>,
) => Non_Normalized_Path_.O

export type { 
    Non_Normalized_Path_ as Non_Normalized_Path, 
}
