
import * as p_i from 'pareto-core/interface/__internal/Abort'

import * as i_imports_path from "./fs_unrestricted_path.js"

export namespace Parameters_ {
    
    export type source = i_imports_path.Node_Path
    
    export type target = i_imports_path.Node_Path
    
    export namespace options {
        
        export type recursive = boolean
        
        export type force = boolean
        
        export type errorOnExist = boolean
        
    }
    
    export type options = {
        readonly 'recursive': options.recursive
        readonly 'force': options.force
        readonly 'errorOnExist': options.errorOnExist
    }
    
}

export type Parameters_ = {
    readonly 'source': Parameters_.source
    readonly 'target': Parameters_.target
    readonly 'options': Parameters_.options
}

export namespace Error_ {
    
    export type path = i_imports_path.Node_Path
    
    export namespace type_ {
        
        export type source_does_not_exist = null
        
        export type node_is_not_a_file = null
        
        export type permission_denied = null
        
        export type file_too_large = null
        
        export type device_not_ready = null
        
    }
    
    export type type_ = 
        | readonly ['source does not exist', type_.source_does_not_exist]
        | readonly ['node is not a file', type_.node_is_not_a_file]
        | readonly ['permission denied', type_.permission_denied]
        | readonly ['file too large', type_.file_too_large]
        | readonly ['device not ready', type_.device_not_ready]
    
}

export type Error_ = {
    readonly 'path': Error_.path
    readonly 'type': Error_.type_
}

export type { 
    Parameters_ as Parameters, 
    Error_ as Error, 
}
