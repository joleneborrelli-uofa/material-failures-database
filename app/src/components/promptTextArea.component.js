import React                  from 'react';
import { caseStudy }          from '../constants/caseStudy.constants.js';
import { caseStudyHtmlClass } from '../constants/htmlClass.constants.js';

export default function PromptTextArea ( props )
{
    const
    {
        name,
        value,
        handleTextAreaChange,
        labelVisibility
    } = props;

    const constants  = caseStudy.fieldPrompts;
    const htmlClass  = caseStudyHtmlClass.fieldPrompts;
    const labelClass = `${ htmlClass.title } ${ labelVisibility }`;

    return (
        <div className={ htmlClass.textarea }>
            <label className={ labelClass }>
                { caseStudy.note }
            </label>
            <textarea 
                className={ htmlClass.textareaInput }
                name={ name }
                onChange={ handleTextAreaChange }
                defaultValue={ value } />
        </div>
    );

};