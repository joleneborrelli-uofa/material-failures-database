import { caseStudyHtmlClass as htmlClass } from '../constants/htmlClass.constants.js';
import { caseStudy } from '../constants/caseStudy.constants.js';
import { generateRecordHtml } from './record.template.js';


/** 
    @function generateCaseStudyHtml

    @return : { String } 
*/ 
export function generateCaseStudyHtml( database )
{ 
	let innerHtml;

	let title      = getObjectName( database );
    let caseNumber = getObjectCaseNumber( database );

    let landingPage = generateLandingPage( title, caseNumber );

    innerHtml += landingPage;

    return innerHtml;
};

/** 
    @function generateLandingPage

    @return : { String } 
*/ 
const generateLandingPage = ( title, caseNumber ) =>
{
	let landingTitle      = `<h3 class="${ htmlClass.landing.title }">
								${ caseStudy.landing.title }
							</h3>`;
	let landingCaseTitle  = `<h3 class="${ htmlClass.landing.caseTitle }">
								${ caseStudy.landing.caseTitle( caseTitle ) }
							</h3>`;
	let landingCaseNumber = `<h3 class="${ htmlClass.landing.caseNumber }">
								${ caseStudy.landing.caseNumber( caseNumber ) }
							</h3>`;
	let landingStatus     = <`<h3 class="${ htmlClass.landing.status }">
								${ caseStudy.landing.status }
							</h3>`;

	return `<div class="${ htmlClass.landing.page }">	
				${ landingTitle }
				<div class="${ htmlClass.landing.logo"></div>
				${ landingCaseTitle }
				${ landingCaseNumber }
				${ landingStatus }
			</div>`;				
};

/** 
    @function generatePhotographicEvidence

    @return : { String } 
*/ 
const generatePhotoEvidencePage = () =>
{
	let title = `<h3 class="${ htmlClass.photoEvidence.title }">
					${ caseStudy.photoEvidenceTitle }
				</h3>`;

	return `<div class="${ htmlClass.photoEvidence.page }">
				${ title }
				// universal viewer
			</div>`;
};

/** 
    @function generateBackgroundResearchPage

    @return : { String } 
*/
const generateBackgroundResearchPage = () =>
{
	// Visible record data
	let module = generateRecordHtml( database );

	let title  = `<h3 class="${ htmlClass.backgroundResearch.title }">
					${ caseStudy.backgroundResearchTitle }
				  </h3>`;

	return `<div class="${ htmlClass.backgroundResearch.page }">
				${ title }
				// universal viewer
				${ module }
			</div>`;
}; 


const generatePrompts = () =>
{
	// Get headers
	// Cycle through the data structure per header, check for string or object.
	// If string, get string
	// If object, get object keys
	// See if string or object key exists in same header of visible prompts, 
	// then see if the prompt exists in same header of field prompts.
	// If so, get the prompt. If not, simply provide
	// a text box. Note all prompts get main textboxes. 
	// Each value in the array of the object should be made available
	// for each selection of the object key
}