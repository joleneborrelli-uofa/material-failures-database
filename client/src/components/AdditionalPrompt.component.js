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
        additionalPrompt
    } = props;

    const htmlClass   = caseStudyHtmlClass.prompt;
    const { on, off } = caseStudyHtmlClass.visibility;

    let visibility     = additionalPrompt.length > 0 ? on : off; 
    const wrapperClass = `${ htmlClass.additionalPrompt } ${ visibility }`;

    const promptGroups = additionalPrompt.map( ( title, index ) =>
    {
        return (
            <Title 
                key={ createUniqueId() } 
                title={ title } 
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
