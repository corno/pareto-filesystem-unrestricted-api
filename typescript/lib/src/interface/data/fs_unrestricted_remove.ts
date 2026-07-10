
import * as p_i from 'pareto-core/interface/__internal/Abort'

import * as i_imports_path from "./fs_unrestricted_path.js"

export namespace Parameters_ {
    
    export type path = i_imports_path.Context_Path
    
    export type error_if_not_exists = boolean
    
}

export type Parameters_ = {
    readonly 'path': Parameters_.path
    readonly 'error if not exists': Parameters_.error_if_not_exists
}

export namespace Error_ {
    
    export type path = i_imports_path.Context_Path
    
    export namespace type_ {
        
        export type node_does_not_exist = null
        
        export type permission_denied = null
        
    }
    
    export type type_ = 
        | readonly ['node does not exist', type_.node_does_not_exist]
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
