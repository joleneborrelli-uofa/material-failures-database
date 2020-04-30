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
            rating        : '',
            inscription   : '',
            serial_number : '',
            feature       : new Map(),
            feature_note  : ''
        }

        this.handleObjectModuleChange = this.handleObjectModuleChange.bind( this );
    }

    handleObjectModuleChange( e )
    {
        const name = e.target.name;

        if( name === 'feature' )
        {
            const isChecked = e.target.checked;

            return this.setState( prevState =>
            ( {
                feature : prevState.feature.set( name, isChecked ) 
            } ) );
        }

        this.setState(
        {
            [name]: e.target.value
        } );
    }

    render()
    {
        const htmlClass = caseStudyHtmlClass.fieldPrompts;

        return (
            `<div className="${ htmlClass.caseStudy }">

                <ObjectCaseStudyModule 
                    visibility={ this.props.visibility.object }
                    handleObjectModuleChange={ this.handleObjectModuleChange } />

            </div>`
        )
    }

};
