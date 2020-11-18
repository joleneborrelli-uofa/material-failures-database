import React, { useState, useLayoutEffect } from 'react';
import { caseStudyHtmlClass as htmlClass, genericHtmlClass }  from '../constants/htmlClass.constants.js';
import { caseStudy }                        from '../constants/caseStudy.constants.js';
import { getPrompt, getAdditionalPrompt }   from '../helpers.js';
import LandingPage                          from './LandingPage.component.js'; 
import PhotographicEvidencePage             from './PhotographicEvidencePage.component.js'; 
import BackgroundEvidencePage               from './BackgroundEvidencePage.component.js';
import CaseStudyPage                        from './CaseStudyPage.component.js';

export default function CaseStudyModule ( props )
{
    // Props
    const 
    { 
        visibility,
        studyData
    } = props;

    const { manifest } = studyData;

    const { on, off } = genericHtmlClass.visibility;

    // Hook
    useLayoutEffect( () =>
    {
        window.scrollTo( 0, 0 );
    } );

    // State
    const [currentPage, setCurrentPage]       = useState( 0 );
    const [nextVisibility, setNextVisibility] = useState( on );
    const [prevVisibility, setPrevVisibility] = useState( off );

    // Methods
    const onButtonClick = ( e ) =>
    {
        let pageNumber;

        let nextVisibility = on;
        let prevVisibility = on;

        const { value }   = e.target;
        // To account for zero indexed array
        const pagesLength = caseStudy.pages.length - 1;

        if( value === 'prev' ) pageNumber = currentPage - 1;
        if( value === 'next' ) pageNumber = currentPage + 1;

        if( pageNumber <= 0 )
        {
            pageNumber     = 0;
            prevVisibility = off;
        }           

        if( pageNumber >= pagesLength ) 
        {
            pageNumber     = pagesLength;
            nextVisibility = off;
        }

        setCurrentPage( pageNumber );
        setNextVisibility( nextVisibility );
        setPrevVisibility( prevVisibility );
    }

    // Return
    const title             = studyData.object && studyData.object.name;
    const caseNumber        = studyData.object && studyData.object.object_id;
    const prompt            = getPrompt( studyData );
    const additionalPrompt  = getAdditionalPrompt( studyData );

    // For pagination
    const pageVisibility = caseStudy.pages.map( ( page, index ) =>
    {
        return currentPage === index ? on : off;
    } );

    const landingClass    = `${ pageVisibility[0] } ${ htmlClass.landing.wrapper }`;
    const photoClass      = `${ pageVisibility[1] } ${ htmlClass.photoEvidence.wrapper }`;
    const backgroundClass = `${ pageVisibility[2] } ${ htmlClass.backgroundResearch.wrapper }`;
    const promptClass     = `${ pageVisibility[3] } ${ htmlClass.prompt.wrapper }`;
    const prevButtonClass = `${ htmlClass.pagination.prev } ${ prevVisibility }`;
    const nextButtonClass = `${ htmlClass.pagination.next } ${ nextVisibility }`;

    return (
        <div className={ htmlClass.caseStudy }>

            <div className={ landingClass }>
                <LandingPage 
                    title={ title }
                    caseNumber={ caseNumber } />
            </div>

            <div className={ photoClass }>
                <PhotographicEvidencePage 
                    currentPage={ currentPage }
                    manifest={ manifest } />
            </div>

            <div className={ backgroundClass }>
                <BackgroundEvidencePage 
                    currentPage={ currentPage }
                    manifest={ manifest }
                    recordData={ studyData } />
            </div>

            <div className={ promptClass }>
                <CaseStudyPage 
                    prompt={ prompt }
                    additionalPrompt={ additionalPrompt }
                    visibility={ visibility } />
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