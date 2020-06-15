import React                  from 'react';
import { createUniqueId }     from '../helpers.js';
import { caseStudyHtmlClass } from '../constants/htmlClass.constants.js';
import PromptTitle            from './promptTitle.component.js'; 
import PromptTextArea         from './promptTextArea.component.js'; 

export default function AdditionalPrompts ( props )
{ 
    const 
    { 
        name,
        value = '',
        prompts,
        handleChange
    } = props;

    const htmlClass   = caseStudyHtmlClass.fieldPrompts;
    const { on, off } = caseStudyHtmlClass.visibility;

    let visibility     = prompts.length > 0 ? on : off; 
    const wrapperClass = `${ htmlClass.additionalPrompt } ${ visibility }`;

    const title = prompts.map( prompt =>
    {
        return (
            <PromptTitle 
                key={ createUniqueId() } 
                title={ prompt } 
                visibility={ on } />
        )
    } );

    return (
        <div className={ wrapperClass }>
            { title }            
            <PromptTextArea 
                name={ name }
                value={ value }
                labelVisibility={ on }
                handleTextAreaChange={ handleChange } />
        </div>
    );

};
