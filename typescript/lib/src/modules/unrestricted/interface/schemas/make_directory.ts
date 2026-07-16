
import * as p_i from 'pareto-core/interface/__internal/Abort'

import * as i_imports_path from "./path.js"

export namespace Parameters_ {
    
    export type delete_existing = boolean
    
    export type path = i_imports_path.Node_Path
    
}

export type Parameters_ = {
    readonly 'delete existing': Parameters_.delete_existing
    readonly 'path': Parameters_.path
}

export namespace Error_ {
    
    export type path = i_imports_path.Node_Path
    
    export namespace type_ {
        
        export type directory_already_exists = null
        
        export type permission_denied = null
        
    }
    
    export type type_ = 
        | readonly ['directory already exists', type_.directory_already_exists]
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
