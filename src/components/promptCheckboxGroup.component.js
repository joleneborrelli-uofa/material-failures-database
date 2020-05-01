import { caseStudyHtmlClass } from '../constants/htmlClass.constants.js'; 

class PromptCheckboxGroup extends React.component
{
    constructor( props )
    {
        super( props );
    }

    render()
    {
        const 
        {
            key,
            value,
            name,
            foreignKeys,
            handleChange
        } = this.props;

        const htmlClass  = caseStudyHtmlClass.fieldPrompts;
        const checkboxes = foreignKeys.forEach( option )
        {
            const isChecked = value.get( option );
            const key       = key || index;

            return ( 
                `<input
                    type="checkbox"
                    className="${ htmlClass.checkbox }"
                    name={ name }
                    value={ option }
                    key={ key }
                    checked={ isChecked }
                    onChange={ handleChange } />`  
            ) 
        };

        return (
            `<div className="${ htmlClass.checkboxGroup }">
                { checkboxes }
            </div>`
        );
    }

};
