import React                  from 'react';
import { caseStudy }          from '../constants/caseStudy.constants.js';
import { caseStudyHtmlClass } from '../constants/htmlClass.constants.js';

export default class LandingCaseStudyModule extends React.Component
{
    constructor( props )
    {
        super( props );
    }

    render()
    {
        const 
        { 
            title,
            caseNumber
        } = this.props;


        const constants  = caseStudy.landing;
        const htmlClass  = caseStudyHtmlClass.landing;

        return (
        <div className={ htmlClass.page }>	
            <h3 className={ htmlClass.title }>
                { constants.title }
            </h3>
            <div className={ htmlClass.logo }></div>
                <h3 className={ htmlClass.caseTitle }>
                    { constants.caseTitle( title ) }
                </h3>
                <h3 className={ htmlClass.caseNumber }>
                    { constants.caseNumber( caseNumber ) }
                </h3>
                <h3 className={ htmlClass.status }>
                    { constants.status }
                </h3>
            </div>
        )
    }
};
