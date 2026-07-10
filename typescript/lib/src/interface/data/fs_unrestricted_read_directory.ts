
import * as p_i from 'pareto-core/interface/__internal/Abort'
import * as p_di from 'pareto-core/interface/data'

import * as i_imports_path from "./fs_unrestricted_path.js"

export namespace Parameters_ {
    
    export type path = i_imports_path.Context_Path
    
}

export type Parameters_ = {
    readonly 'path': Parameters_.path
}

export namespace Error_ {
    
    export type path = i_imports_path.Context_Path
    
    export namespace type_ {
        
        export type directory_does_not_exist = null
        
        export type node_is_not_a_directory = null
        
    }
    
    export type type_ = 
        | readonly ['directory does not exist', type_.directory_does_not_exist]
        | readonly ['node is not a directory', type_.node_is_not_a_directory]
    
}

export type Error_ = {
    readonly 'path': Error_.path
    readonly 'type': Error_.type_
}

export namespace Result_ {
    
    export namespace D {
        
        export type node_type = Node_Type_
        
        export type context_directory = i_imports_path.Context_Path
        
        export type path = i_imports_path.Node_Path
        
    }
    
    export type D = {
        readonly 'node type': D.node_type
        readonly 'context directory': D.context_directory
        readonly 'path': D.path
    }
    
}

export type Result_ = p_di.Dictionary<Result_.D>

export namespace Node_Type_ {
    
    export type file = null
    
    export type directory = null
    
    export type other = null
    
}

export type Node_Type_ = 
    | readonly ['file', Node_Type_.file]
    | readonly ['directory', Node_Type_.directory]
    | readonly ['other', Node_Type_.other]

export type { 
    Parameters_ as Parameters, 
    Error_ as Error, 
    Result_ as Result, 
    Node_Type_ as Node_Type, 
}
