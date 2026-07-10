
import * as p_i from 'pareto-core/interface/__internal/Abort'

import * as i_imports_path from "./fs_unrestricted_path.js"

import * as i_imports_list_of_characters from "./list_of_characters.js"

export namespace Parameters_ {
    
    export type path = i_imports_path.Node_Path
    
    export type data = i_imports_list_of_characters.List_of_Characters
    
}

export type Parameters_ = {
    readonly 'path': Parameters_.path
    readonly 'data': Parameters_.data
}

export namespace Error_ {
    
    export type path = i_imports_path.Node_Path
    
    export namespace type_ {
        
        export type permission_denied = null
        
    }
    
    export type type_ = 
        | readonly ['permission denied', type_.permission_denied]
    
}

export type Error_ = {
    readonly 'path': Error_.path
    readonly 'type': Error_.type_
}

export type { 
    Parameters_ as Parameters, 
    Error_ as Error, 
}
