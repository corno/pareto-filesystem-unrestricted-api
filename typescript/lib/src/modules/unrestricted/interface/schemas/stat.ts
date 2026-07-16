
import * as p_i from 'pareto-core/interface/__internal/Abort'

import * as i_imports_path from "./path.js"

export type Parameters_ = i_imports_path.Node_Path

export namespace Error_ {
    
    export type path = i_imports_path.Node_Path
    
    export namespace type_ {
        
        export type node_does_not_exist = null
        
    }
    
    export type type_ = 
        | readonly ['node does not exist', type_.node_does_not_exist]
    
}

export type Error_ = {
    readonly 'path': Error_.path
    readonly 'type': Error_.type_
}

export type Result_ = Node_Type_

export namespace Node_Type_ {
    
    export type file = null
    
    export type directory = null
    
}

export type Node_Type_ = 
    | readonly ['file', Node_Type_.file]
    | readonly ['directory', Node_Type_.directory]

export type { 
    Parameters_ as Parameters, 
    Error_ as Error, 
    Result_ as Result, 
    Node_Type_ as Node_Type, 
}
