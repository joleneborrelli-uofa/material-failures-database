import React, { useState }    from 'react';
import { createUniqueId }     from '../helpers.js';
import { caseStudyHtmlClass } from '../constants/htmlClass.constants.js'; 

export default function PromptPairedRadioGroup ( props )
{
    // Props
    const
    {
        name,
        value,
        mapkey,
        foreignKeys,
        handleRadioGroupChange
    } = props;

    // Hack for ensuring each radio group on page has a
    // unique name
    const inputName = `${ name }-${ createUniqueId() }`;
    const htmlClass = caseStudyHtmlClass.fieldPrompts;

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
                        mapkey={ mapkey }
                        namekey={ name }
                        defaultChecked={ value === foreignKey }
                        onChange={ handleRadioGroupChange } />
                </div>
        ) 
    } );

    return (
        <div className={ htmlClass.radioGroup }>
            { radioButtons }
        </div>
    );

};
