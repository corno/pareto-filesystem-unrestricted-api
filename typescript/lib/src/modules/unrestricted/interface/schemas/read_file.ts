
import * as p_i from 'pareto-core/interface/__internal/Abort'

import * as i_imports_path from "./path.js"

import * as i_imports_list_of_characters from "./list_of_characters.js"

export type Parameters_ = i_imports_path.Node_Path

export namespace Error_ {
    
    export type path = i_imports_path.Node_Path
    
    export namespace type_ {
        
        export type file_does_not_exist = null
        
        export type node_is_not_a_file = null
        
        export type permission_denied = null
        
        export type file_too_large = null
        
        export type device_not_ready = null
        
    }
    
    export type type_ = 
        | readonly ['file does not exist', type_.file_does_not_exist]
        | readonly ['node is not a file', type_.node_is_not_a_file]
        | readonly ['permission denied', type_.permission_denied]
        | readonly ['file too large', type_.file_too_large]
        | readonly ['device not ready', type_.device_not_ready]
    
}

export type Error_ = {
    readonly 'path': Error_.path
    readonly 'type': Error_.type_
}

export type Result_ = {
    'data': i_imports_list_of_characters.List_Of_Characters
}

export type { 
    Parameters_ as Parameters, 
    Error_ as Error, 
    Result_ as Result, 
}
