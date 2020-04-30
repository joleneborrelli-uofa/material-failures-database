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
        const constants = caseStudy.fieldPrompts;
        const htmlClass = caseStudyHtmlClass.fieldPrompts;

        return (
            `<div>
                <label className="${ htmlClass.title } { this.props.labelVisibility }">
                    ${ constants.note }
                </label>
                <textarea 
                    className="${ htmlClass.textarea }"
                    name={ this.props.name }
                    onChange={ this.props.handleChange }
                    defaultValue={ this.props.value } />
            </div>`
        );
    }
};