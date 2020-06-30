import React, { useState }    from 'react';
import { createUniqueId }     from '../helpers.js';
import { caseStudyHtmlClass } from '../constants/htmlClass.constants.js'; 

export default function CheckboxGroup ( props )
{
    // Props
    const 
    {
        name,
        foreignKeys
    } = props;

    const htmlClass = caseStudyHtmlClass.fieldPrompts;

    // State
    const [values, handleValuesChange] = useState( {} );

    // Methods
    const handleCheckboxChange = e =>
    {
        const { value, checked } = e.target;

        handleValuesChange( { ...values, [value] : checked } );
    }

    const generateCheckboxes = () => foreignKeys.map( foreignKey =>
    {
        let isChecked = !!values[foreignKey];

        return ( 
            <div 
                key={ createUniqueId() }
                className={ htmlClass.checkbox }>
                <label className={ htmlClass.foreignKeyLabel }>
                    { foreignKey }
                </label>
                <input
                    className={ htmlClass.checkboxInput }
                    type="checkbox"
                    name={ name }
                    value={ foreignKey }
                    checked={ isChecked }
                    onChange={ handleCheckboxChange } /> 
            </div>
        ) 
    } );

    const checkboxes  = generateCheckboxes();

    return (
        <div className={ htmlClass.checkboxGroup }>
            { checkboxes }
        </div>
    );

};
