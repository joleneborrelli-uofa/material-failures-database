import React                  from 'react';
import { createUniqueId }     from '../helpers.js';
import { caseStudyHtmlClass } from '../constants/htmlClass.constants.js'; 

export default function PromptRadioGroup ( props )
{
    // statekey is a key in the state
    // mapkey is a key in a Map
    let
    {
        statekey = '',
        mapkey = '',
        name,
        value,
        foreignKeys,
        handleRadioGroupChange
    } = props;

    // hack for ensuring each radio group on page has a
    // unique name
    name = `${ name }-${ createUniqueId()}`;

    const htmlClass = caseStudyHtmlClass.fieldPrompts;

    // foreignKeys is an array. Option is the value in the array.
    const radioButtons = foreignKeys.map( option =>
    {
        let isChecked = value === option;

        return ( 
                <div
                    key={ createUniqueId() } 
                    className={ htmlClass.radio }>
                    <label className={ htmlClass.optionLabel }>
                        { option }
                    </label>
                    <input
                        type="radio"
                        className={ htmlClass.radioInput }
                        name={ name }
                        value={ option }
                        statekey={ statekey }
                        mapkey={ mapkey }
                        defaultChecked={ isChecked }
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
