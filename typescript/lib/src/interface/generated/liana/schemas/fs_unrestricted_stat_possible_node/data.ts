
import * as p_i from 'pareto-core/interface/__internal/Abort'

import * as i_imports_path from "../fs_unrestricted_path/data.js"

export type Parameters_ = i_imports_path.Node_Path

export namespace Error_ {
    
    export type path = i_imports_path.Node_Path
    
    export namespace type_ {
        
        export type unknown_ = null
        
    }
    
    export type type_ = 
        | readonly ['unknown', type_.unknown_]
    
}

export type Error_ = {
    readonly 'path': Error_.path
    readonly 'type': Error_.type_
}

export type Result_ = Node_Type_

export namespace Node_Type_ {
    
    export type does_not_exist = null
    
    export type file = null
    
    export type directory = null
    
}

export type Node_Type_ = 
    | readonly ['does not exist', Node_Type_.does_not_exist]
    | readonly ['file', Node_Type_.file]
    | readonly ['directory', Node_Type_.directory]

export type { 
    Parameters_ as Parameters, 
    Error_ as Error, 
    Result_ as Result, 
    Node_Type_ as Node_Type, 
}
