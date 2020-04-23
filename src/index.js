import { displayHeaders, unknownObject } from './constants.js';
import { generateRecordHtml }            from './templates/record.js';
import { generateCaseStudyHtml }         from './templates/caseStudy.js';
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
	@function createHtml

	@arg type : { String } 
	@return   : { String }
*/
const createHtml = ( type ) =>
{
	const child = document.createElement( 'div' );

	if( type !== 'caseStudy' || type !== 'record' ) type = 'record';

	if( database.hasOwnProperty( 'object' ) )
	{
		let innerHtml;

		const title     = database.object.name || unknownObject;
		const headers   = buildHeaders();

		if ( type === 'caseStudy' ) innerHtml = generateCaseStudyHtml( headers, title );
		if ( type === 'record' )    innerHtml = generateRecordHtml( headers, title );

		child.innerHTML = innerHtml;
	}

	return child;
};

// Initiate failure record
document.body.appendChild( createHtml() );