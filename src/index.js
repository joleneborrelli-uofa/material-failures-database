import { displayHeaders, unknownObject } from './constants.js';
import { generateRecordHtml }            from './templates/record.js';
import { generateCaseStudyHtml }         from './templates/caseStudy.js';

// Will eventually be a singular database response
import { recordDatabase }    from '../database/record.js';
import { caseStudyDatabase } from '../database/caseStudy.js';

/**
	@function createHtml

	@arg type : { String } 
	@return   : { String }
*/
const createHtml = ( type ) =>
{
	const child = document.createElement( 'div' );

	if( type !== 'caseStudy' || type !== 'record' ) type = 'record';

	if ( type === 'caseStudy' ) innerHtml = generateCaseStudyHtml( caseStudyDatabase );
	if ( type === 'record' )    innerHtml = generateRecordHtml( recordDatabase );

	child.innerHTML = innerHtml;

	return child;
};

// Initiate failure record
document.body.appendChild( createHtml() );