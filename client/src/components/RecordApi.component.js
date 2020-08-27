import React, { useEffect, useState }    from 'react';
import { genericHtmlClass as htmlClass } from '../constants/htmlClass.constants.js';
import { messages }                      from '../constants/webDisplay.constants.js';
import Record                            from './Record.component.js';
import fetchDisplayStatus                from './api/fetchDisplayStatus.api.js';
import fetchRecordData                   from './api/fetchRecordData.api.js';

export default function RecordApi ( props )
{
    // Props
    const { id } = props;

    // State
    const [recordData, setRecordData] = useState( {} );
    const [message, setMessage]       = useState( messages.loading );

    useEffect( () =>
    {
        prepareForDisplay();
    }, [] );

    // Methods
    const prepareForDisplay = async () =>
    {
        try
        {
            const displayStatus = await fetchDisplayStatus( id );

            if( displayStatus && displayStatus.record === 'on' ) 
            {
                const data = await fetchRecordData( id );

                setRecordData( data );
            }
            else
            {
                setMessage( messages.restricted );
            }
        }
        catch( error )
        {
            console.error( error );

            setMessage( messages.error.api );
        }
    }

    // Return
    const hasRecordData = Object.keys( recordData ).length;
    const messageStatus = hasRecordData ? 'off' : 'on';
    const messageClass  = `${ htmlClass.visibility[messageStatus] } ${ htmlClass.message }`;
    const recordElement = hasRecordData ? ( <Record 
                                                recordData={ recordData } /> ) : false;

    return (
        <div>
            <p className={ messageClass }>{ message }</p>
                { recordElement }
        </div>
    );

}
