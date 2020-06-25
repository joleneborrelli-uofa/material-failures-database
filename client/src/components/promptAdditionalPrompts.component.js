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
        value,
        prompts,
        handleChange
    } = props;

    const htmlClass   = caseStudyHtmlClass.fieldPrompts;
    const { on, off } = caseStudyHtmlClass.visibility;

    let visibility     = prompts.length > 0 ? on : off; 
    const wrapperClass = `${ htmlClass.additionalPrompt } ${ visibility }`;

    const promptGroups = prompts.map( ( prompt, index ) =>
    {
        let textareakey = index + ''; 
        let groupValue  = value.get( textareakey ) || '';

        return (
            <PromptTitle 
                key={ createUniqueId() } 
                title={ prompt } 
                visibility={ on }>
                <PromptTextArea 
                    key={ createUniqueId() }
                    textareakey={ textareakey }
                    name={ name }
                    value={ groupValue }
                    labelVisibility={ on }
                    handleTextAreaChange={ handleChange } />
            </PromptTitle>
        )
    } );

    return (
        <div className={ wrapperClass }>
            { promptGroups }            
        </div>
    );

};
