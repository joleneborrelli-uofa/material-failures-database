import React                               from 'react';
import { convertFormToText }               from '../helpers.js';
import { caseStudy }                       from '../constants/caseStudy.constants.js';
import { caseStudyHtmlClass as htmlClass } from '../constants/htmlClass.constants.js';
import ObjectCaseStudyModule               from './objectCaseStudyModule.component.js'; 
import MaterialCaseStudyModule             from './materialCaseStudyModule.component.js'; 
import ProcessingCaseStudyModule           from './processingCaseStudyModule.component.js';
import EnvironmentCaseStudyModule          from './environmentCaseStudyModule.component.js';
import UseCaseStudyModule                  from './useCaseStudyModule.component.js';

export default function PromptCaseStudyModule ( props )
{
    // Props
    const 
    { 
        visibility,
        additionalPrompts 
    } = props;
   
    // Methods
    const downloadForm = e =>
    {
        e.preventDefault();

        const text    = convertFormToText( e.target.form );
        const file    = new Blob( [text], { type: 'text/plain' } );
        const element = document.createElement( 'a' );
        const onClick = () => 
        {
            // to remove url.createObjectURL and preserve memory
            setTimeout( () => 
            {
                URL.revokeObjectURL( file );
                element.removeEventListener( 'click', onClick );
            }, 150 );
        };

        element.href     = URL.createObjectURL( file );
        element.download = 'case-study-notes.txt';

        document.body.appendChild( element ); 

        element.addEventListener( 'click', onClick, false );

        element.click();
    };

    return (
        <form className={ htmlClass.fieldPrompts.page }>

            <ObjectCaseStudyModule 
                visibility={ visibility.object }
                additionalPrompts={ additionalPrompts.object } />

            <MaterialCaseStudyModule 
                visibility={ visibility.material }
                additionalPrompts={ additionalPrompts.material } />

            <ProcessingCaseStudyModule 
                visibility={ visibility.processing }
                additionalPrompts={ additionalPrompts.processing } />

            <EnvironmentCaseStudyModule 
                visibility={ visibility.environment }
                additionalPrompts={ additionalPrompts.environment } />

            <UseCaseStudyModule 
                visibility={ visibility.use }
                additionalPrompts={ additionalPrompts.use } />

            <div className={ htmlClass.download.wrapper }>
                <button 
                    type="button"
                    className={ htmlClass.download.button }
                    onClick={ downloadForm }>
                    { caseStudy.download }
                </button>
            </div>

        </form>
    )

};
