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
            let key   = this.props.key || '';
            let index = this.props.index || '';

            return ( 
                `<input
                    type="radio"
                    className="${ htmlClass.radioButton }"
                    name={ this.props.name }
                    value={ option }
                    key={ key }
                    index={ index }
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
