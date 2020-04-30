import { caseStudyHtmlClass } from '../constants/htmlClass.constants.js'; 

class PromptRadioGroup extends React.component
{
    constructor( props )
    {
        super( props );
    }

    render()
    {
        const htmlClass    = caseStudyHtmlClass.fieldPrompts;
        const radioButtons = this.props.foreignKeys.forEach( option )
        {
            const key = this.props.key ? this.props.key : index;

            return ( 
                `<input
                    type="radio"
                    className="${ htmlClass.radioButton }"
                    name={ this.props.name }
                    value={ option }
                    key={ key }
                    checked={ this.props.value === option }
                    onChange={ this.props.handleChange } />`
            ) 
        };

        return (
            `<div className="${ htmlClass.radioGroup }">
                { radioButtons }
            </div>`
        );
    }

};
