import axios from 'axios';

/**
 * Fetches objects for the settings 
 * page
 *
 * @return { Object Literal } 
 */
const fetchSettings = async () => 
{
    return axios
        .get( '/api/settings' )
        .then( res => res.data ) 
        .catch( err => 
        {
            console.error( `Error getting settings list: ${ err }` ) 
        } )
}

export default fetchSettings;