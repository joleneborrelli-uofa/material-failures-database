import React, { useState, useEffect } from 'react';
import { createUniqueId }             from '../helpers.js';
import { caseStudy }                  from '../constants/caseStudy.constants.js';
import { caseStudyHtmlClass }         from '../constants/htmlClass.constants.js'; 
import PairedRadioGroup               from './PairedRadioGroup.component.js';

export default function PairedRadioGroupList ( props )
{
    // Props
    const { pairedData } = props;
    const htmlClass      = caseStudyHtmlClass.fieldPrompts;

    // State
    const [radioGroupCounter, incrementRadioGroup] = useState( 0 );
    const [pairedGroup, handlePairedGroupChange]   = useState( new Map([['0',
            {
                [pairedData[0].name] : '',
                [pairedData[1].name] : ''
            } ]]) );

    useEffect( () =>
    {
        onButtonClick();
    }, [] );

    // Methods
    const handleRadioGroupChange = e =>
    {
        const { value } = e.target;
        const namekey   = e.target.getAttribute( 'namekey' );
        const mapkey    = e.target.getAttribute( 'mapkey' );
        const prevState = pairedGroup.get( mapkey ) || {};
        const newState  = pairedGroup.set( mapkey, { ...prevState, [namekey] : value } );

       handlePairedGroupChange( newState );  
    };

    const onButtonClick = () =>
    {
        const counter = radioGroupCounter + 1;
        const group   = 
        {
            [pairedData[0].name] : '',
            [pairedData[1].name] : ''
        };

        // Limits the amount of grouped components to 20
        if( counter > 20 ) return;

        incrementRadioGroup( counter );
        handlePairedGroupChange( pairedGroup.set( counter + '', group ) );
    };

    const generateRadioGroups = () =>
    {
        const radioGroups = [];

        for ( let i = 0; i < radioGroupCounter; i++ ) 
        {
            let mapkey = i + '';
            let group  = pairedGroup.get( mapkey );

            radioGroups.push( 
                <div
                    className={ htmlClass.pairedRadioGroup } 
                    key={ createUniqueId() }>
                    <PairedRadioGroup
                        name={ pairedData[0].name }
                        mapkey={ mapkey }
                        value={ group[pairedData[0].name] }
                        foreignKeys={ pairedData[0].foreignKeys }
                        handleRadioGroupChange={ handleRadioGroupChange } />
                    <PairedRadioGroup 
                        name={ pairedData[1].name }
                        mapkey={ mapkey }
                        value={ group[pairedData[1].name] }
                        foreignKeys={ pairedData[1].foreignKeys }
                        handleRadioGroupChange={ handleRadioGroupChange } />
                </div>
            ) 
        };

        return radioGroups;
    };

    const radioGroups = generateRadioGroups();

    return (
        <div>
            { radioGroups }
            <button
                className={ htmlClass.button }
                type="button" 
                onClick={ onButtonClick }>
                { caseStudy.add }
            </button>
        </div>
    );

};
