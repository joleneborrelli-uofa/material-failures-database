import React, { useState }                 from 'react';
import { caseStudyHtmlClass as htmlClass } from '../constants/htmlClass.constants.js';
import { caseStudy }                       from '../constants/caseStudy.constants.js';
import { getAdditionalPrompts }            from '../helpers.js';
import LandingCaseStudyModule              from './landingCaseStudyModule.component.js'; 
import PhotoEvidenceCaseStudyModule        from './photoEvidenceCaseStudyModule.component.js'; 
import BackgroundEvidenceCaseStudyModule   from './backgroundEvidenceCaseStudyModule.component.js';
import PromptCaseStudyModule               from './promptCaseStudyModule.component.js';

export default function CaseStudyModule ( props )
{
    // Props
    const 
    { 
        visibility,
        studyData
    } = props;

    const { manifest } = studyData;

    // State
    const [currentPage, setCurrentPage]       = useState( 0 );
    const [nextVisibility, setNextVisibility] = useState( htmlClass.visibility.on );
    const [prevVisibility, setPrevVisibility] = useState( htmlClass.visibility.off );

    // Methods
    const onButtonClick = ( e ) =>
    {
        let pageNumber;

        let nextVisibility = htmlClass.visibility.on;
        let prevVisibility = htmlClass.visibility.on;

        const { value }   = e.target;
        // To account for zero indexed array
        const pagesLength = caseStudy.pages.length - 1;

        if( value === 'prev' ) pageNumber = currentPage - 1;
        if( value === 'next' ) pageNumber = currentPage + 1;

        if( pageNumber <= 0 )
        {
            pageNumber     = 0;
            prevVisibility = htmlClass.visibility.off;
        }           

        if( pageNumber >= pagesLength ) 
        {
            pageNumber     = pagesLength;
            nextVisibility = htmlClass.visibility.off;
        }

        setCurrentPage( pageNumber );
        setNextVisibility( nextVisibility );
        setPrevVisibility( prevVisibility );
    }

    // Return
    const title             = studyData.object && studyData.object.name;
    const caseNumber        = studyData.object && studyData.object.object_id;
    const additionalPrompts = getAdditionalPrompts( studyData );

    // For pagination
    const pageVisibility = caseStudy.pages.map( ( page, index ) =>
    {
        return currentPage === index ? htmlClass.visibility.on : htmlClass.visibility.off;
    } );

    const landingClass    = `${ pageVisibility[0] } ${ htmlClass.landing.wrapper }`;
    const photoClass      = `${ pageVisibility[1] } ${ htmlClass.photoEvidence.wrapper }`;
    const backgroundClass = `${ pageVisibility[2] } ${ htmlClass.backgroundResearch.wrapper }`;
    const promptClass     = `${ pageVisibility[3] } ${ htmlClass.fieldPrompts.wrapper }`;
    const prevButtonClass = `${ htmlClass.pagination.prev } ${ prevVisibility }`;
    const nextButtonClass = `${ htmlClass.pagination.next } ${ nextVisibility }`;

    return (
        <div>
            <div className={ htmlClass.caseStudy }>

                <div className={ landingClass }>
                    <LandingCaseStudyModule 
                        title={ title }
                        caseNumber={ caseNumber } />
                </div>

                <div className={ photoClass }>
                    <PhotoEvidenceCaseStudyModule 
                        manifest={ manifest } />
                </div>

                <div className={ backgroundClass }>
                    <BackgroundEvidenceCaseStudyModule 
                        manifest={ manifest }
                        recordData={ studyData } />
                </div>

                <div className={ promptClass }>
                    <PromptCaseStudyModule 
                        additionalPrompts={ additionalPrompts }
                        visibility={ visibility } />
                </div>

            </div>

            <div className={ htmlClass.pagination.page }>

                <button
                    type="button"
                    className={ nextButtonClass }
                    value="next"
                    onClick={ onButtonClick }>
                    { caseStudy.next }
                </button>

                <button
                    type="button"
                    className={ prevButtonClass }
                    value="prev"
                    onClick={ onButtonClick }>
                    { caseStudy.prev }
                </button>
            </div>
        </div>
    )
};
