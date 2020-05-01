import { caseStudy }          from '../constants/caseStudy.constants.js';
import { caseStudyHtmlClass } from '../constants/htmlClass.constants.js';

class PromptTextArea extends React.component
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
            handleChange
            labelVisibility
        } = this.props;

        const constants = caseStudy.fieldPrompts;
        const htmlClass = caseStudyHtmlClass.fieldPrompts;

        return (
            `<div>
                <label className="${ htmlClass.title } ${ labelVisibility }">
                    ${ constants.note }
                </label>
                <textarea 
                    className="${ htmlClass.textarea }"
                    name={ name }
                    onChange={ handleChange }
                    defaultValue={ value } />
            </div>`
        );
    }
};