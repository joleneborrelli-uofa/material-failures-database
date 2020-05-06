import React                  from 'react';
import { caseStudy }          from '../constants/caseStudy.constants.js';
import { caseStudyHtmlClass } from '../constants/htmlClass.constants.js';
import RecordModule           from '../components/recordModule.component.js';

export default class BackgroundEvidenceCaseStudyModule extends React.Component
{
    constructor( props )
    {
        super( props );
    }

    render()
    {
    	// Record database response
    	const { database } = this.props;

        const htmlClass = caseStudyHtmlClass.backgroundResearch;

	return (
		    <div className={ htmlClass.page }>
				<h3 className={ htmlClass.title }>
					{ caseStudy.backgroundResearchTitle }
				</h3>
				<RecordModule database={ database } />
			</div>
		)
    }
};