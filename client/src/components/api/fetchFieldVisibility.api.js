import axios from 'axios';

/**
 * Fetches the field visibility (i.e. 'on' 
 * or 'off') of an object 
 *
 * @param  { Integer } id
 * @return { Object Literal } 
 */
const fetchFieldVisibility = async ( id ) =>
{
    return axios
           .get( '/api/visibility/field',
            { 
                params: { id } 
            } )
            .then( res => res.data )
            .catch( err => 
            {
                console.error( `Error getting field visibility: ${ err }` ) 
            } )
}

export default fetchFieldVisibility;