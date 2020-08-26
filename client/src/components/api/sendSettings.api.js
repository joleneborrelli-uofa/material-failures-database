import axios from 'axios';


/**
 * Fetches the display status (i.e. 'on' or 'off') 
 * of an object 
 *
 * @param { Integer } id
 * @param { String } fieldname
 * @param { String } toggleValue
 */
const sendSettings = async ( id, fieldname, toggleValue ) =>
{
    return axios
	       .post( 'api/settings',
	       {
	           fieldString  : `${ fieldname } = '${ toggleValue }'`,
	           objectString : `object_id = ${ id }`
	       } )
	       .catch( err => 
	       {
	           console.error( `Error posting settings: ${ err }` ) 
	       } )
}

export default sendSettings;