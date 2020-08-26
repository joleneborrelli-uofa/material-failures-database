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
            .catch( err => 
            {
                console.error( `Error getting display list: ${ err }` ) 
            } )
}

export default fetchDisplayItems;