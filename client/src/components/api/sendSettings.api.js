import axios from 'axios';

/**
 * Sends the settings data for updating
 *
 * @param { Integer } id
 * @param { String } fieldname
 * @param { String } toggleValue
 */
const sendSettings = async ( id, fieldname, toggleValue ) =>
{
    return axios
	       .post( '/api/settings',
	       {
	           fieldString  : `${ fieldname } = '${ toggleValue }'`,
	           objectString : `object_id = ${ id }`
	       } )
	       .catch( error => 
	       {
	           throw new Error( `sendSettings ${ error.response.data }` ); 
	       } )
}

export default sendSettings;