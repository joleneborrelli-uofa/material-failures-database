import React                  from 'react';
import { caseStudy }          from '../constants/caseStudy.constants.js';
import { caseStudyHtmlClass } from '../constants/htmlClass.constants.js';

export default class PromptTextArea extends React.Component
{
    constructor( props )
    {
        super( props );
    }

    render()
    {
        const
        {
            name,
            value,
            handleTextAreaChange,
            labelVisibility
        } = this.props;

        const constants  = caseStudy.fieldPrompts;
        const htmlClass  = caseStudyHtmlClass.fieldPrompts;
        const labelClass = `${ htmlClass.title } ${ labelVisibility }`;

        return (
            <div>
                <label className={ labelClass }>
                    { caseStudy.note }
                </label>
                <textarea 
                    className={ htmlClass.textarea }
                    name={ name }
                    onChange={ handleTextAreaChange }
                    defaultValue={ value } />
            </div>
        );
    }
};