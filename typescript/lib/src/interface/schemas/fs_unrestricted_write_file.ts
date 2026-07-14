
import * as p_prose from 'pareto-core/temp/fountain_pen/prose'

import * as i_imports_path from "./fs_unrestricted_path.js"

export namespace Parameters_ {
    
    export type path = i_imports_path.Node_Path
    
    export type data = p_prose.Paragraph
    
}

export type Parameters_ = {
    readonly 'path': Parameters_.path
    readonly 'paragraph': Parameters_.data
    readonly 'newline': string
    readonly 'indentation': string
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
