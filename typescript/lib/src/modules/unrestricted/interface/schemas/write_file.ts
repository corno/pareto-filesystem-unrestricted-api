

import * as i_imports_path from "./path.js"
import type * as s_file_content from "../../../helpers/schemas/to_be_written_file_content.js"

export namespace Parameters_ {
    
    export type path = i_imports_path.Node_Path
    
    
}

export type Parameters_ = {
    readonly 'path': Parameters_.path
    readonly 'content': s_file_content.File_Content
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
