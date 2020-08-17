import axios                             from 'axios';
import React, { useEffect, useState }    from 'react';
import { genericHtmlClass as htmlClass } from '../constants/htmlClass.constants.js';
import { messages }                      from '../constants/webDisplay.constants.js';
import Record                            from './Record.component.js';

export default function RecordApi ( props )
{
    // Props
    const { id } = props;
    const 
    {
        loading,
        restricted
    } = messages;

    // State
    const [recordData, setRecordData] = useState( {} );
    const [message, setMessage]       = useState( loading );

    useEffect( () =>
    {
        prepareForDisplay();
    }, [] );

    // Methods
    const fetchDisplayStatus = async () =>
    {
        return axios
            .get( '/api/display' )
            .then( res => res.data.find( item => item.object_id === parseInt( id, 10 ) ) )
            .catch( err => 
            {
                console.error( `Error getting display list: ${ err }` ) 
            } )
    }

    const fetchRecordData = async () =>
    {
        axios 
            .get( '/api/record',
            { 
                params: { id } 
            } ) 
            .then( res => 
            {
                let recordData = res.data;

                setRecordData( recordData );
            } )
            .catch( err => 
            {
                console.error( `Error getting record fields: ${ err }` ) 
            } )
    }

    const prepareForDisplay = async () =>
    {
        let displayStatus = await fetchDisplayStatus();

        if( displayStatus && displayStatus.record === 'on' ) 
        {
            fetchRecordData();
        }
        else
        {
            setMessage( restricted );
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
