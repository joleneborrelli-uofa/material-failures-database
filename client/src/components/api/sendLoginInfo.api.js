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
            .catch( err => 
            {
                console.error( `Error posting login: ${ err }` ) 
            } )
}

export default sendLoginInfo;