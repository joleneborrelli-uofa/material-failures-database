import { caseStudyHtmlClass } from '../constants/htmlClass.constants.js'; 

class PromptCheckboxGroup extends React.component
{
    constructor( props )
    {
        super( props );
    }

    render()
    {
        const htmlClass  = caseStudyHtmlClass.fieldPrompts;
        const checkboxes = this.props.foreignKeys.forEach( option )
        {
            const isChecked = this.props.values.includes( option );

            return ( 
                `<input
                type="checkbox"
                className="${ htmlClass.checkbox }"
                name={ this.props.name }
                value="${ option }"
                checked={ isChecked }
                onChange={ this.props.handleChange } />`  
            ) 
        };

        return (
            `<div className="${ htmlClass.checkboxGroup }">
                { checkboxes }
            </div>`
        );
    }

};
