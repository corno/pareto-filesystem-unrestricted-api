
import * as p_i from 'pareto-core/interface/__internal/Abort'

import * as i_generic from "liana-core/interface/data/unmarshall"

import * as i_out from "../../data.js"

import * as i_in from "astn-core/interface/generated/liana/schemas/parse_tree/data"

export namespace Paragraph_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Paragraph
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Paragraph_ = (
    context: Paragraph_.I,
    abort: p_i.Abort<Paragraph_.E>,
) => Paragraph_.O

export namespace Sentence_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Sentence
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Sentence_ = (
    context: Sentence_.I,
    abort: p_i.Abort<Sentence_.E>,
) => Sentence_.O

export namespace Phrase_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Phrase
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Phrase_ = (
    context: Phrase_.I,
    abort: p_i.Abort<Phrase_.E>,
) => Phrase_.O

export type { 
    Paragraph_ as Paragraph, 
    Sentence_ as Sentence, 
    Phrase_ as Phrase, 
}
