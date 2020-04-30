import { caseStudyHtmlClass }    from '../constants/htmlClass.constants.js';
import ObjectCaseStudyModule     from './objectCaseStudyModule.components.js'; 
import MaterialCaseStudyModule   from './materialCaseStudyModule.components.js'; 
import ProcessingCaseStudyModule from './processingCaseStudyModule.components.js'

class CaseStudyModule extends React.component
{
    constructor( props )
    {
        super( props );

        this.state =
        {
            rating            : '',
            inscription       : '',
            serial_number     : '',
            feature           : new Map(),
            feature_note      : '',
            name              : '',
            'class'           : '',
            class_subtype     : '',
            class_note        : '',
            crystallinity     : '',
            alloy_designation : '',
            grade             : '',
            recyclability     : '',
            biodegradability  : '',
            toxicity          : '',
            machining         : new Map(),
            machining_note    : '',
            joining           : new Map(),
            joining_note      : '',
            manufacturer      : '',
            date              : '',
            location          : '',
            plant             : ''
        }

        this.handleGenericChange          = this.handleGenericChange.bind( this );
        this.handleCheckboxChange         = this.handleCheckboxChange.bind( this )
        this.handleObjectModuleChange     = this.handleObjectModuleChange.bind( this );
        this.handleProcessingModuleChange = this.handleProcessingModuleChange.bind( this );
    }

    handleGenericChange( e )
    {
        const name = e.target.name;

        this.setState(
        {
            [name]: e.target.value
        } );
    }

    handleCheckboxChange( e )
    {
        this.setState( prevState =>
        ( {
            [e.target.name] : prevState.feature.set( name, e.target.checked ) 
        } ) );
    }

    handleObjectModuleChange( e )
    {
        if( e.target.name === 'feature' )
        {
            this.handleCheckboxChange( e )
        }

        this.handleGenericChange( e );
    }

    handleProcessingModuleChange( e )
    {
        const checkboxChanges = ['machining', 'joining'];

        if( checkboxChanges.includes( e.target.name )
        {
            this.handleCheckboxChange( e )
        }

        this.handleGenericChange( e );
    }

    render()
    {
        const htmlClass = caseStudyHtmlClass.fieldPrompts;

        return (
            `<div className="${ htmlClass.caseStudy }">

                <ObjectCaseStudyModule 
                    visibility={ this.props.visibility.object }
                    handleObjectModuleChange={ this.handleObjectModuleChange } />

                <MaterialCaseStudyModule 
                    visibility={ this.props.visibility.material }
                    handleMaterialModuleChange={ this.handleGenericChange } />

                <ProcessingCaseStudyModule 
                    visibility={ this.props.visibility.processing }
                    handleMaterialModuleChange={ this.props.handleProcessingModuleChange } />

            </div>`
        )
    }

};
