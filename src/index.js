import React           from 'react';
import ReactDOM        from 'react-dom';
import CaseStudyModule from './components/caseStudyModule.component.js';
import RecordModule    from './components/recordModule.component.js';

// CSS
import '../css/main.css';

// Will eventually be a singular database response
import { recordDatabase }                from './database/record.database.js';
import { caseStudyDatabase, visibility } from './database/caseStudy.database.js';

/**
 * Renders the record or case study modules
 *
 * @param  { String } type type of module to render
 * @return { React Component || Boolean } 
 */
const renderHtml = ( type ) =>
{
    let element;

    const wrapper = document.getElementById( 'container' );

    if( type !== 'caseStudy' && type !== 'record' ) type = 'record';

    if( wrapper )
    {
        if( type === 'caseStudy' )
        {
            element = <CaseStudyModule 
                            database={ caseStudyDatabase }
                            visibility={ visibility } />;
        }

        if( type === 'record' )
        {
            element = <RecordModule 
                            database={ recordDatabase } />;
        }

        return ReactDOM.render( element, wrapper );
    }

    return false;
};

renderHtml( 'caseStudy' );