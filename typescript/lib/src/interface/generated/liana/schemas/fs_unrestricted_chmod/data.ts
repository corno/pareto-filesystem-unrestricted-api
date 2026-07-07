
import * as p_i from 'pareto-core/interface/__internal/Abort'
import * as p_di from 'pareto-core/interface/data'

import * as i_imports_path from "../fs_unrestricted_path/data.js"

export namespace Parameters_ {
    
    export type path = i_imports_path.Node_Path
    
    export namespace mode {
        
        export type owner = Permissions_
        
        export type group = Permissions_
        
        export type others = Permissions_
        
        export namespace special_bits {
            
            export namespace O {
                
                export type setuid = boolean
                
                export type setgid = boolean
                
                export type sticky = boolean
                
            }
            
            export type O = {
                readonly 'setuid': O.setuid
                readonly 'setgid': O.setgid
                readonly 'sticky': O.sticky
            }
            
        }
        
        export type special_bits = p_di.Optional_Value<special_bits.O>
        
    }
    
    export type mode = {
        readonly 'owner': mode.owner
        readonly 'group': mode.group
        readonly 'others': mode.others
        readonly 'special bits': mode.special_bits
    }
    
}

export type Parameters_ = {
    readonly 'path': Parameters_.path
    readonly 'mode': Parameters_.mode
}

export namespace Permissions_ {
    
    export type read = boolean
    
    export type write = boolean
    
    export type execute = boolean
    
}

export type Permissions_ = {
    readonly 'read': Permissions_.read
    readonly 'write': Permissions_.write
    readonly 'execute': Permissions_.execute
}

export namespace Error_ {
    
    export type path = i_imports_path.Node_Path
    
    export namespace type_ {
        
        export type path_does_not_exist = null
        
        export type permission_denied = null
        
        export type invalid_mode = null
        
    }
    
    export type type_ = 
        | readonly ['path does not exist', type_.path_does_not_exist]
        | readonly ['permission denied', type_.permission_denied]
        | readonly ['invalid mode', type_.invalid_mode]
    
}

export type Error_ = {
    readonly 'path': Error_.path
    readonly 'type': Error_.type_
}

export type { 
    Parameters_ as Parameters, 
    Permissions_ as Permissions, 
    Error_ as Error, 
}
