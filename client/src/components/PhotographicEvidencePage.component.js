import React                  from 'react';
import { caseStudy }          from '../constants/caseStudy.constants.js';
import { caseStudyHtmlClass } from '../constants/htmlClass.constants.js';
import Viewer                 from './Viewer.component.js';

export default function PhotographicEvidencePage ( props )
{
    const 
    { 
        currentPage,
        manifest 
    } = props;

    const isVisible = caseStudy.pages[currentPage] === 'photo';
    const htmlClass = caseStudyHtmlClass.photoEvidence;

    const viewers = isVisible && manifest ? manifest.filter( item => item.page === 'photo' )
                   .map( ( pageManifest, index ) =>
                   {
                      return <Viewer key={ index } path={ pageManifest.path } />
                   } ) : false;

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
