import React                  from 'react';
import { hasRecordData }      from '../helpers.js';
import { caseStudy }          from '../constants/caseStudy.constants.js';
import { caseStudyHtmlClass } from '../constants/htmlClass.constants.js';
import Record                 from '../components/Record.component.js';
import Viewer                 from './Viewer.component.js';

export default function BackgroundEvidencePage ( props )
{
    // Props
    const 
    { 
        currentPage,
        manifest,
        recordData
    } = props;

    const showViewer = false;

    // To ensure viewer shows images at proper size at init
    const isVisible = caseStudy.pages[currentPage] === 'background';
    const htmlClass = caseStudyHtmlClass.backgroundResearch;

    const viewers = manifest && isVisible ?  manifest.filter( item => item.page === 'background' )
                    .map( ( pageManifest, index ) =>
                    {
                        return <Viewer key={ index } path={ pageManifest.path } />
                    } ) : false;

    const record = hasRecordData( recordData ) ? ( <Record 
                                                        showViewer={ showViewer }
                                                        recordData={ recordData } /> ) : false;

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
            { record }
        </div>
    )

};
