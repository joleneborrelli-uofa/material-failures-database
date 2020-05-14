import React                  from 'react';
import { caseStudy }          from '../constants/caseStudy.constants.js';
import { caseStudyHtmlClass } from '../constants/htmlClass.constants.js';
import ReferenceList          from './referenceList.component.js';
import Viewer                 from './viewer.component.js';

export default class PhotoEvidenceCaseStudyModule extends React.Component
{
    constructor( props )
    {
        super( props );
    }

    render()
    {
        let viewer;

        const { database } = this.props;
        const 
        { 
            references, 
            manifests 
        } = database;

        const htmlClass     = caseStudyHtmlClass.photoEvidence;
        const pageManifests = manifests.filter( manifest => manifest.page === "photoEvidence" );

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
    }
};