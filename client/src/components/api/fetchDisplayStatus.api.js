import axios from 'axios';

/**
 * Fetches the display status (i.e. 'on' or 'off') 
 * of an object 
 *
 * @param  { Integer } id
 * @return { Object Literal } 
 */
const fetchDisplayStatus = async ( id ) =>
{
    return axios
        .get( '/api/display' )
        .then( res => res.data.find( item => item.object_id === parseInt( id, 10 ) ) )
        .catch( error => 
        {
            throw new Error( `fetchDisplayStatus ${ error.response.data }` );
        } )
}

export default fetchDisplayStatus;