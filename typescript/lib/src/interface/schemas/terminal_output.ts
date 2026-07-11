
import * as p_i from 'pareto-core/interface/__internal/Abort'
import * as p_di from 'pareto-core/interface/data'

export namespace Message_ {
    
    export namespace lines {
        
        export type L = string
        
    }
    
    export type lines = p_di.List<lines.L>
    
    export type raw = string
    
}

export type Message_ = {
    readonly 'lines': Message_.lines
    readonly 'raw': Message_.raw
}

export type { 
    Message_ as Message, 
}
