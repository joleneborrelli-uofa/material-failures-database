import React                  from 'react';
import { createUniqueId }     from '../helpers.js';
import { caseStudyHtmlClass } from '../constants/htmlClass.constants.js';
import Title                  from './Title.component.js'; 
import TextArea               from './TextArea.component.js'; 

export default function AdditionalPrompt ( props )
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
            <Title 
                key={ createUniqueId() } 
                title={ prompt } 
                visibility={ on }>
                <TextArea 
                    key={ createUniqueId() }
                    name={ name }
                    labelVisibility={ on } />
            </Title>
        )
    } );

    return (
        <div className={ wrapperClass }>
            { promptGroups }            
        </div>
    );

};
