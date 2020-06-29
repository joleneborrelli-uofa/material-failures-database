import React                  from 'react';
import { createUniqueId }     from '../helpers.js';
import { caseStudyHtmlClass } from '../constants/htmlClass.constants.js';
import PromptTitle            from './promptTitle.component.js'; 
import PromptTextArea         from './promptTextArea.component.js'; 

export default function AdditionalPrompts ( props )
{ 
    // Props
    const 
    { 
        name,
        prompts
    } = props;

    const htmlClass   = caseStudyHtmlClass.fieldPrompts;
    const { on, off } = caseStudyHtmlClass.visibility;

    let visibility     = prompts.length > 0 ? on : off; 
    const wrapperClass = `${ htmlClass.additionalPrompt } ${ visibility }`;

    const promptGroups = prompts.map( ( prompt, index ) =>
    {
        return (
            <PromptTitle 
                key={ createUniqueId() } 
                title={ prompt } 
                visibility={ on }>
                <PromptTextArea 
                    key={ createUniqueId() }
                    name={ name }
                    labelVisibility={ on } />
            </PromptTitle>
        )
    } );

    return (
        <div className={ wrapperClass }>
            { promptGroups }            
        </div>
    );

};
