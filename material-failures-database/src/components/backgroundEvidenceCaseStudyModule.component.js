import React                  from 'react';
import { caseStudy }          from '../constants/caseStudy.constants.js';
import { caseStudyHtmlClass } from '../constants/htmlClass.constants.js';
import RecordModule           from '../components/recordModule.component.js';
import Viewer                 from './viewer.component.js';

export default class BackgroundEvidenceCaseStudyModule extends React.Component
{
    constructor( props )
    {
        super( props );
    }

    render()
    {
        const showViewer   = false;
    	const { database } = this.props;
        const 
        { 
            references,
            manifests
        } = database;

        const htmlClass     = caseStudyHtmlClass.backgroundResearch;
        const pageManifests = manifests.filter( manifest => manifest.page === "background" );

        const viewers = pageManifests.map( ( pageManifest, index ) =>
        {
            return <Viewer key={ index } path={ pageManifest.path } />
        } );

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
				<RecordModule 
                    showViewer={ showViewer }
                    database={ database } />
                { viewers }
			</div>
		)
    }
};