
import * as p_i from 'pareto-core/interface/__internal/Abort'

import * as i_generic from "liana-core/interface/data/deserialize"

import * as i_in from "pareto-fountain-pen/interface/generated/liana/schemas/list_of_characters/data"

import * as i_out from "../../data.js"

export namespace Paragraph_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Paragraph
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type tab_size = number
        
    }
    
}

export type Paragraph_ = (
    context: Paragraph_.I,
    abort: p_i.Abort<Paragraph_.E>,
    parameters: {
        readonly 'tab size': Paragraph_.P.tab_size
    },
) => Paragraph_.O

export namespace Sentence_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Sentence
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type tab_size = number
        
    }
    
}

export type Sentence_ = (
    context: Sentence_.I,
    abort: p_i.Abort<Sentence_.E>,
    parameters: {
        readonly 'tab size': Sentence_.P.tab_size
    },
) => Sentence_.O

export namespace Phrase_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Phrase
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type tab_size = number
        
    }
    
}

export type Phrase_ = (
    context: Phrase_.I,
    abort: p_i.Abort<Phrase_.E>,
    parameters: {
        readonly 'tab size': Phrase_.P.tab_size
    },
) => Phrase_.O

export type { 
    Paragraph_ as Paragraph, 
    Sentence_ as Sentence, 
    Phrase_ as Phrase, 
}
