import axios from 'axios';

/**
 * Sends the login information
 *
 * @param  { String } username
 * @param  { String } password
 * @return { String } 
 */
const sendLoginInfo = async ( username, password ) =>
{
    return axios
           .post( 'api/login', 
            { 
                username, 
                password
            } )
            .then( res => res.data )
            .catch( error => 
            {
               throw new Error( `sendLoginInfo ${ error.response.data }` ); 
            } )
}

export default sendLoginInfo;