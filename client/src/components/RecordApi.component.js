import axios                             from 'axios';
import React, { useEffect, useState }    from 'react';
import { genericHtmlClass as htmlClass } from '../constants/htmlClass.constants.js';
import Record                            from './Record.component.js';

export default function RecordApi ( props )
{
    // Props
    const { id } = props;

    // State
    const [recordData, setRecordData] = useState( {} );

    useEffect( () =>
    {
        fetchRecordData();
    }, [] );

    // Methods
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

    // Return
    const hasRecordData = Object.keys( recordData ).length;
    const loadingStatus = hasRecordData ? 'off' : 'on';
    const loadingClass  = `${ htmlClass.visibility[loadingStatus] } ${ htmlClass.loading }`;
    const recordElement = hasRecordData ? ( <Record 
                                                recordData={ recordData } /> ) : false;

    return (
        <div>
            <p className={ loadingClass }>Loading. Please wait...</p>
                { recordElement }
        </div>
    );

}
