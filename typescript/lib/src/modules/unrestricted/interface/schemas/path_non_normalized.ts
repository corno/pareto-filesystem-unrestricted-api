
import * as p_i from 'pareto-core/interface/__internal/Abort'
import * as p_di from 'pareto-core/interface/schema'

export namespace Non_Normalized_Path_ {
    
    export type leading_slash = boolean
    
    export namespace segments {
        
        export namespace L {
            
            export type parent = null
            
            export type child = string
            
            export type current = null
            
            export type nothing = null
            
        }
        
        export type L = 
            | readonly ['parent', L.parent]
            | readonly ['child', L.child]
            | readonly ['current', L.current]
            | readonly ['nothing', L.nothing]
        
    }
    
    export type segments = p_di.List<segments.L>
    
    export type trailing_slash = boolean
    
}

export type Non_Normalized_Path_ = {
    readonly 'leading slash': Non_Normalized_Path_.leading_slash
    readonly 'segments': Non_Normalized_Path_.segments
    readonly 'trailing slash': Non_Normalized_Path_.trailing_slash
}

export type { 
    Non_Normalized_Path_ as Non_Normalized_Path, 
}
