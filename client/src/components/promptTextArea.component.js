import React, { useState }    from 'react';
import { caseStudy }          from '../constants/caseStudy.constants.js';
import { caseStudyHtmlClass } from '../constants/htmlClass.constants.js';

export default function PromptTextArea ( props )
{
    // Props
    const
    {
        name,
        labelVisibility
    } = props;

    const htmlClass  = caseStudyHtmlClass.fieldPrompts;
    const labelClass = `${ htmlClass.title } ${ labelVisibility }`;

    // State
    const [value, handleTextAreaChange] = useState( '' );

    return (
        <div className={ htmlClass.textarea }>
            <label className={ labelClass }>
                { caseStudy.note }
            </label>
            <textarea 
                className={ htmlClass.textareaInput }
                name={ name }
                onChange={ e => handleTextAreaChange( e.target.value ) }
                defaultValue={ value } />
        </div>
    );

};
