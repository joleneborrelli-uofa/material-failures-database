import { displayHeaders, unknownObject } from './constants.js';
import { generateRecordHtml }            from './templates/record.js';
import { database } 				     from './database/record.js';

/**
	@function buildHeaders
	
	@arg database : { Object } 
	@return       : { Object }     
*/
const buildHeaders = () =>
{
	let headers        = { ...displayHeaders };
	const databaseKeys = Object.keys( database.object );

	for( let key in headers )
	{
		if( !databaseKeys.includes( key ) ) delete headers[key]
	}

	return headers;
};

/**
	@function createRecord
	
	@return : { String }     
*/
const createRecordHtml = () =>
{
	const record = document.createElement( 'div' );

	if( database.hasOwnProperty( 'object' ) )
	{
		const title     = database.object.name || unknownObject;
		const headers   = buildHeaders();
		const innerHtml = generateRecordHtml( headers, title );

		record.innerHTML = innerHtml;
	}

	return record;
};


// Initiate failure record
document.body.appendChild( createRecordHtml() );