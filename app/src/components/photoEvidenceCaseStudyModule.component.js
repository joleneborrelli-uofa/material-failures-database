import React                  from 'react';
import { caseStudy }          from '../constants/caseStudy.constants.js';
import { caseStudyHtmlClass } from '../constants/htmlClass.constants.js';
import Viewer                 from './viewer.component.js';

export default function PhotoEvidenceCaseStudyModule ( props )
{
    const { manifest }  = props;
    const htmlClass     = caseStudyHtmlClass.photoEvidence;
    const pageManifests = manifest.filter( item => item.page === "photo" );

    const viewers = pageManifests.map( ( pageManifest, index ) =>
    {
        return <Viewer key={ index } path={ pageManifest.path } />
    } );

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
            { viewers } 
        </div>
        )

};
