import React                  from 'react';
import { createUniqueId }     from '../helpers.js';
import { caseStudyHtmlClass } from '../constants/htmlClass.constants.js'; 

export default class PromptRadioGroup extends React.Component
{
    constructor( props )
    {
        super( props );
    }

    render()
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
        } = this.props;

        // hack for ensuring each radio group on page has a
        // unique name
        name = createUniqueId( name );

        const htmlClass = caseStudyHtmlClass.fieldPrompts;

        // foreignKeys is an array. Option is the value in the
        // array, index is the index number of that value.
        const radioButtons = foreignKeys.map( ( option, index ) =>
        {
            let isChecked = value === option;

            return ( 
                    <div
                        key={ createUniqueId( index ) } 
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
    }

};
