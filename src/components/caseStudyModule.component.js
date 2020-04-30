import { caseStudyHtmlClass }  from '../constants/htmlClass.constants.js';
import ObjectCaseStudyModule   from './promptTextArea.components.js'; 
import MaterialCaseStudyModule from './promptTitle.components.js'; 

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
            toxicity          : ''
        }

        this.handleGenericChange      = this.handleGenericChange.bind( this );
        this.handleObjectModuleChange = this.handleObjectModuleChange.bind( this );
    }

    handleGenericChange( e )
    {
        const name = e.target.name;

        this.setState(
        {
            [name]: e.target.value
        } );
    }

    handleObjectModuleChange( e )
    {
        if( e.target.name === 'feature' )
        {
            return this.setState( prevState =>
            ( {
                feature : prevState.feature.set( name, e.target.checked ) 
            } ) );
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

            </div>`
        )
    }

};
