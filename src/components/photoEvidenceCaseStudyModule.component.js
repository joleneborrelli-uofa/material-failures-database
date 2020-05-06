import React                  from 'react';
import { caseStudy }          from '../constants/caseStudy.constants.js';
import { caseStudyHtmlClass } from '../constants/htmlClass.constants.js';

export default class PhotoEvidenceCaseStudyModule extends React.Component
{
    constructor( props )
    {
        super( props );
    }

    render()
    {
        const htmlClass = caseStudyHtmlClass.photoEvidence;

    return (
        <div className={ htmlClass.page }>
            <h3 className={ htmlClass.title }>
                { caseStudy.photoEvidenceTitle }
            </h3> 
        </div>
        )
    }
};