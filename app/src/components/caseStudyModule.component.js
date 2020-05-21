import React                               from 'react';
import { caseStudyHtmlClass as htmlClass } from '../constants/htmlClass.constants.js';
import { caseStudy }                       from '../constants/caseStudy.constants.js';
import LandingCaseStudyModule              from './landingCaseStudyModule.component.js'; 
import PhotoEvidenceCaseStudyModule        from './photoEvidenceCaseStudyModule.component.js'; 
import BackgroundEvidenceCaseStudyModule   from './backgroundEvidenceCaseStudyModule.component.js';
import PromptCaseStudyModule               from './promptCaseStudyModule.component.js';
import
{
    getObjectName,
    getObjectCaseNumber,
    getAdditionalPrompts
} from '../helpers.js';

export default class CaseStudyModule extends React.Component
{
    constructor( props )
    {
        super( props );

        this.state =
        {
            currentPage    : 0,
            nextVisibility : htmlClass.visibility.on,
            prevVisibility : htmlClass.visibility.off
        }

        this.setCurrentPage = this.setCurrentPage.bind( this );
    }

    setCurrentPage( e )
    {
        let pageNumber;

        let nextVisibility = htmlClass.visibility.on;
        let prevVisibility = htmlClass.visibility.on;

        const { value }   = e.target;
        // To account for zero indexed array
        const pagesLength = caseStudy.pages.length - 1;

        if( value === 'prev' ) pageNumber = this.state.currentPage - 1;
        if( value === 'next' ) pageNumber = this.state.currentPage + 1;

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

        this.setState(
        {
            currentPage    : pageNumber,
            nextVisibility : nextVisibility,
            prevVisibility : prevVisibility
        } );

    }

    render()
    {
        const
        {
            database,
            visibility
        } = this.props;
 
        const { currentPage }   = this.state;
        const title             = getObjectName( database );
        const caseNumber        = getObjectCaseNumber( database );
        const additionalPrompts = getAdditionalPrompts( database );

        // for pagination
        const pageVisibility = caseStudy.pages.map( ( page, index ) =>
        {
            return currentPage === index ? htmlClass.visibility.on : htmlClass.visibility.off;
        } );

        const landingClass    = `${ pageVisibility[0] } ${ htmlClass.landing.wrapper }`;
        const photoClass      = `${ pageVisibility[1] } ${ htmlClass.photoEvidence.wrapper }`;
        const backgroundClass = `${ pageVisibility[2] } ${ htmlClass.backgroundResearch.wrapper }`;
        const promptClass     = `${ pageVisibility[3] } ${ htmlClass.fieldPrompts.wrapper }`;
        const prevButtonClass = `${ htmlClass.pagination.prev } ${ this.state.prevVisibility }`;
        const nextButtonClass = `${ htmlClass.pagination.next } ${ this.state.nextVisibility }`;


        return (
            <div>
                <div className={ htmlClass.caseStudy }>

                    <div className={ landingClass }>
                        <LandingCaseStudyModule 
                            title={ title }
                            caseNumber={ caseNumber } />
                    </div>

                    <div className={ photoClass }>
                        <PhotoEvidenceCaseStudyModule database={ database } />
                    </div>

                    <div className={ backgroundClass }>
                        <BackgroundEvidenceCaseStudyModule database={ database } />
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
                        onClick={ this.setCurrentPage }>
                        { caseStudy.next }
                    </button>

                    <button
                        type="button"
                        className={ prevButtonClass }
                        value="prev"
                        onClick={ this.setCurrentPage }>
                        { caseStudy.prev }
                    </button>
                </div>
            </div>
        )
    }
};
