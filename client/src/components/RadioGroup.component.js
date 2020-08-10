import React, { useState }    from 'react';
import { createUniqueId }     from '../helpers.js';
import { caseStudyHtmlClass } from '../constants/htmlClass.constants.js'; 

export default function RadioGroup ( props )
{
    // Props
    const
    {
        name,
        foreignKeys
    } = props;

    // Hack for ensuring each radio group on page has a
    // unique name
    const inputName = `${ name }-${ createUniqueId() }`;
    const htmlClass = caseStudyHtmlClass.prompt;

    // State
    const [value, handleRadioGroupChange] = useState( '' );

    const radioButtons = foreignKeys.map( foreignKey =>
    {
        return ( 
                <div
                    key={ createUniqueId() } 
                    className={ htmlClass.radio }>
                    <label className={ htmlClass.foreignKeyLabel }>
                        { foreignKey }
                    </label>
                    <input
                        type="radio"
                        className={ htmlClass.radioInput }
                        name={ inputName }
                        value={ foreignKey }
                        defaultChecked={ value === foreignKey }
                        onChange={ e => handleRadioGroupChange( e.target.value ) } />
                </div>
        ) 
    } );

    return (
        <div className={ htmlClass.radioGroup }>
            { radioButtons }
        </div>
    );

};
