import React                  from 'react';
import { caseStudy }          from '../constants/caseStudy.constants.js';
import { caseStudyHtmlClass } from '../constants/htmlClass.constants.js';
import RecordModule           from '../components/recordModule.component.js';
import Viewer                 from './viewer.component.js';

export default function BackgroundEvidenceCaseStudyModule ( props )
{
    const showViewer = false;
    const 
    { 
        currentPage,
        manifest,
        recordData
    } = props;

    // To ensure viewer shows images at proper size at init
    const isVisible = caseStudy.pages[currentPage] === 'background';
    const htmlClass = caseStudyHtmlClass.backgroundResearch;

    const viewers = manifest && isVisible ?  manifest.filter( item => item.page === 'background' )
                    .map( ( pageManifest, index ) =>
                    {
                        return <Viewer key={ index } path={ pageManifest.path } />
                    } ) : false;

    return (
        <div className={ htmlClass.page }>
            <div className={ htmlClass.title }>
                <h3>
                    { caseStudy.backgroundResearchTitle }
                </h3>
                <h3>
                    { caseStudy.backgroundResearchSubtitle }
                </h3>
            </div>
            { viewers }
            <RecordModule 
                showViewer={ showViewer }
                recordData={ recordData } />
        </div>
    )

};