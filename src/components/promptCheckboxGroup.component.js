import React                  from 'react';
import { createUniqueId }     from '../helpers.js';
import { caseStudyHtmlClass } from '../constants/htmlClass.constants.js'; 

export default class PromptCheckboxGroup extends React.Component
{
    constructor( props )
    {
        super( props );
    }

    render()
    {
        const 
        {
            value,
            name,
            foreignKeys,
            handleCheckboxChange
        } = this.props;

        const htmlClass = caseStudyHtmlClass.fieldPrompts;

        // foreignKeys is an array. Option is the value in the
        // array, index is the index number of that value.
        const checkboxes = foreignKeys.map( ( option, index ) =>
        {
            let isChecked = value.get( option );

            return ( 
                <div 
                    key={ createUniqueId( index ) }
                    className={ htmlClass.checkbox }>
                    <label className={ htmlClass.optionLabel }>
                        { option }
                    </label>
                    <input
                        className={ htmlClass.checkboxInput }
                        type="checkbox"
                        name={ name }
                        value={ option }
                        checked={ isChecked }
                        onChange={ handleCheckboxChange } /> 
                </div>
            ) 
        } );

        return (
            <div className={ htmlClass.checkboxGroup }>
                { checkboxes }
            </div>
        );
    }

};
