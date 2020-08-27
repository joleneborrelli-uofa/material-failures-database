import axios from 'axios';

/**
 * Fetches the prompt visibility (i.e. 'on' 
 * or 'off') of an object 
 *
 * @param  { Integer } id
 * @return { Object Literal } 
 */
const fetchPromptVisibility = async ( id ) =>
{
    return axios
            .get( '/api/visibility/prompt', 
            { 
                params: { id } 
            } )
            .then( res => res.data )
            .catch( error => 
            {
                throw new Error( `fetchPromptVisibility ${ error.response.data }` ); 
            } ) 
}

export default fetchPromptVisibility;