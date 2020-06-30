import React                               from 'react';
import { convertFormToText }               from '../helpers.js';
import { caseStudy }                       from '../constants/caseStudy.constants.js';
import { caseStudyHtmlClass as htmlClass } from '../constants/htmlClass.constants.js';
import ObjectModule                        from './ObjectModule.component.js'; 
import MaterialModule                      from './MaterialModule.component.js'; 
import ProcessingModule                    from './ProcessingModule.component.js';
import EnvironmentModule                   from './EnvironmentModule.component.js';
import UseModule                           from './UseModule.component.js';

export default function CaseStudyPage ( props )
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

            <ObjectModule 
                visibility={ visibility.object }
                additionalPrompts={ additionalPrompts.object } />

            <MaterialModule 
                visibility={ visibility.material }
                additionalPrompts={ additionalPrompts.material } />

            <ProcessingModule 
                visibility={ visibility.processing }
                additionalPrompts={ additionalPrompts.processing } />

            <EnvironmentModule 
                visibility={ visibility.environment }
                additionalPrompts={ additionalPrompts.environment } />

            <UseModule 
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
