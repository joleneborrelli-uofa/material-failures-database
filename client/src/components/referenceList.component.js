import React                             from 'react';
import { headers }                       from '../constants/webDisplay.constants.js';
import { genericHtmlClass as htmlClass } from '../constants/htmlClass.constants.js';

export default function ReferenceList ( props )
{
    const { list } = props;

    const references = list.map( ( reference, index ) =>
    {
        return (
                <p 
                key={ index }
                className={ htmlClass.referenceList.reference }>
                    { reference }
                </p>
        )
    } );

    return (
        <div className={ htmlClass.referenceList.list }>
            <div className={ htmlClass.referenceList.header }>
                { headers.reference }
            </div>
            { references }
        </div>
    );
};