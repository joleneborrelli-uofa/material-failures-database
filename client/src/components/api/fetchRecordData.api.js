import axios from 'axios';

/**
 * Fetches the record data and sets it
 * in the state
 *
 * @param  { Integer } id
 * @return { Object Literal } 
 */
const fetchRecordData = async ( id ) =>
{
    return axios 
        .get( '/api/record',
        { 
            params: { id } 
        } ) 
        .then( res => res.data )
        .catch( error => 
        {
            throw new Error( `fetchRecordData ${ error.response.data }` );
        } )
}

export default fetchRecordData;