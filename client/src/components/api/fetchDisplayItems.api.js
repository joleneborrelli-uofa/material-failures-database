import axios from 'axios';

/**
 * Fetches all objects for display
 *
 * @return { Object Literal } 
 */
const fetchDisplayItems = async () => 
{
    return axios
            .get( '/api/display' )
            .then( res => res.data )
            .catch( error => 
            {
                throw new Error( `fetchDisplayItems ${ error.response.data }` );
            } )
}

export default fetchDisplayItems;