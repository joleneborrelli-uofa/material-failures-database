import axios                             from 'axios';
import React, { useEffect, useState }    from 'react';
import { genericHtmlClass as htmlClass } from '../constants/htmlClass.constants.js';
import RecordModule                      from './recordModule.component.js';

export default function RecordModuleApi ( props )
{
    // Props
    const { id } = props;

    // State
    const [loading, setLoading]       = useState( 'on' );
    const [recordData, setRecordData] = useState( {} ) ;

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
                setLoading( 'off' );
            } )
            .catch( err => 
            {
                console.error( `Error getting record fields: ${ err }` ) 
            } )
    }

    // Return
    const loadingClass = `${ htmlClass.visibility[loading] } ${ htmlClass.loading }`;
    const recordModule = Object.keys( recordData ).length ? 
                            ( <RecordModule 
                                recordData={ recordData } /> ) : false;

    return (
        <div>
            <p className={ loadingClass }>Loading. Please wait...</p>
                { recordModule }
        </div>
    );

}
