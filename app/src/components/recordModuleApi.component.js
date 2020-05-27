import axios                             from 'axios';
import React, { useEffect, useState }    from 'react';
import { genericHtmlClass as htmlClass } from '../constants/htmlClass.constants.js';
import RecordModule                      from './recordModule.component.js';

export default function RecordModuleApi ( props )
{
    // Props
    const { id } = props;

    // State
    const [loading, setLoading]           = useState( 'on' );
    const [recordModule, setRecordModule] = useState( [] ) ;

    useEffect( () =>
    {
        fetchRecordModuleData();
    }, [] );

    // Methods
    const fetchRecordData = async () =>
    {
        return axios 
                .get( 'http://localhost:4001/api/record',
                { 
                    params: { id } 
                } ) 
                .then( res => res.data )
                .catch( err => 
                {
                    console.error( `Error getting record fields: ${ err }` ) 
                } )
    }

    const fetchRecordModuleData = async () => 
    {
        let recordData = await fetchRecordData();

        let recordModule = <RecordModule
                                recordData={ recordData } />

        setRecordModule( recordModule );
        setLoading( false );
    }

    // Return
    const loadingClass = `${ htmlClass.visibility[loading] } ${ htmlClass.loading }`;

    return (
        <div>
            <p className={ loadingClass }>Loading. Please wait...</p>
                { recordModule }
        </div>
    );

}
