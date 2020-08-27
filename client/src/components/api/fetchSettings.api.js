import axios from 'axios';

/**
 * Fetches objects for the settings page
 *
 * @return { Object Literal } 
 */
const fetchSettings = async () => 
{
    return axios
        .get( '/api/settings' )
        .then( res => res.data ) 
        .catch( error => 
        {
            throw new Error( `fetchSettings ${ error.response.data }` );
        } )
}

export default fetchSettings;