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
            <div className={ htmlClass.title }>
                <h3>
                    { caseStudy.photoEvidenceTitle }
                </h3>
                <h3>
                    { caseStudy.photoEvidenceSubtitle }
                </h3> 
            </div>
            <div 
                className="uv" 
                data-config="/config.json"
                data-no-load="true"
                data-uri="http://wellcomelibrary.org/iiif/b18035723/manifest">
            </div>
        </div>
        )
    }
};