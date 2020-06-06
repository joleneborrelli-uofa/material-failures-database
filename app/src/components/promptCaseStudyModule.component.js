import React                               from 'react';
import { caseStudy }                       from '../constants/caseStudy.constants.js';
import { groupedComponents }               from '../constants/groupedComponent.constants.js';
import { caseStudyHtmlClass as htmlClass } from '../constants/htmlClass.constants.js';
import { optionChanges }                   from '../constants/optionChanges.constants.js';
import ObjectCaseStudyModule               from './objectCaseStudyModule.component.js'; 
import MaterialCaseStudyModule             from './materialCaseStudyModule.component.js'; 
import ProcessingCaseStudyModule           from './processingCaseStudyModule.component.js';
import EnvironmentCaseStudyModule          from './environmentCaseStudyModule.component.js';
import UseCaseStudyModule                  from './useCaseStudyModule.component.js';
import 
{ 
    extractPrefix, 
    convertStateToText 
} from '../helpers.js';


export default class PromptCaseStudyModule extends React.Component
{
    constructor( props )
    {
        super( props );

        this.state =
        {
            rating                      : '',
            inscription                 : '',
            serial_number               : '',
            feature                     : new Map(),
            feature_note                : '',
            full_name                   : '',
            'class'                     : new Map( [['0',
            {
                'class'                 : '',
                 class_subtype          : ''
            } ]] ),
            class_note                  : '',
            crystallinity               : '',
            crystallinity_note          : '',
            alloy_designation           : '',
            grade                       : '',
            recyclability               : '',
            biodegradability            : '',
            toxicity                    : '',
            machining                   : new Map(),
            machining_note              : '',
            joining                     : new Map(),
            joining_note                : '',
            manufacturer                : '',
            date                        : '',
            location                    : '',
            plant                       : '',
            treatment                   : new Map( [['0',
            {
                treatment               : '',
                treatment_subtype       : ''
            } ]] ),
            treatment_note              : '',
            shaping                     : new Map( [['0',
            {
                shaping                 : '',
                shaping_subtype         : ''
            } ]] ),
            shaping_note                : '',
            residual_stress             : new Map( [['0',
            {
                residual_stress         : '',
                residual_stress_force   : ''
            } ]] ),
            residual_stress_note        : '',
            light_exposure              : new Map(),
            light_exposure_note         : '',
            ambient                     : new Map(),
            ambient_note                : '',
            loading                     : new Map( [['0',
            {
                loading                 : '',
                loading_normalcy        : ''
            } ]] ),
            loading_note                : '',
            weather_exposure            : new Map(),
            weather_exposure_note       : '',
            storage_location            : new Map(),
            storage_location_note       : '',
            geographic_location         : '',
            interaction_stress          : new Map(),
            interaction_stress_note     : '',
            interaction_environment     : new Map(),
            interaction_environment_note     : '',
            interaction_electromagnetic      : new Map(),
            interaction_electromagnetic_note : '',
            interaction_thermal              : new Map(),
            interaction_thermal_note         : '',
            interaction_tribological         : new Map(),
            interaction_tribological_note    : '',
            specification               : new Map(),
            specification_note          : '',
            record                      : new Map(),
            record_note                 : '',
            operation                   : new Map(),
            operation_note              : '',
            operational_factor          : new Map(),
            operational_factor_note     : '',
            functionality_loss          : '',
            problem_statement           : '',
            failure_time                : '',
            failure_operation_stage     : '',
            operator                    : '',
            additionalPromptText        : new Map()
        }

        this.handleModuleChange = this.handleModuleChange.bind( this );
        this.downloadState      = this.downloadState.bind( this );
    }

    /**
     * Handles the download of the state in text form to
     * the user's computer
     */
    downloadState()
    {
        const text    = convertStateToText( this.state );
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
    }

    /**
     * Handles the setting of text from additional prompt textareas
     *
     * @param  { Object Literal } e event object
     */
    handleAdditionalPromptChange( e )
    {
        const { value, name } = e.target;

        this.setState( prevState =>
        ( {
            additionalPromptText : prevState.additionalPromptText.set( name, value )
        } ) );
    }

    /**
     * Handles the setting of key value pairs
     *
     * @param  { Object Literal } e event object
     */
    handleGenericChange( e )
    {
        const { value } = e.target;
        const name = extractPrefix( e.target.name );

        this.setState(
        {
            [name]: value
        } );
    }

    /**
     * Handles the setting of checkbox, which can have 
     * have more than one checkbox checked and therefore  
     * values stored as mapped key value pairs
     *
     * @param  { Object Literal } e event object
     */
    handleCheckboxChange( e )
    {
        const { value, checked } = e.target;
        const name = extractPrefix( e.target.name );

        this.setState( prevState =>
        ( {
            [name] : prevState[name].set( value, checked ) 
        } ) );
    }

    /**
     * Handles the setting of paired radio groups, which  
     * have values stored as mapped key value pairs where
     * the key is a number and the value is an object 
     * containing the grouped component's key value pairs
     *
     * @param  { Object Literal } e event object
     */
    handlePairedRadioGroupChange( e )
    {
        const { value } = e.target;
        const name      = extractPrefix( e.target.name );

        const mapkey   = e.target.getAttribute( 'mapkey' );
        const statekey = e.target.getAttribute( 'statekey' );
        const prevKey  = this.state[statekey].get( mapkey ) || {};

        this.setState( prevState =>
        ( {
            [statekey] : prevState[statekey].set( mapkey, { ...prevKey, [name] : value } )
        } ) );   
    }

    /**
     * Retrieves a mapped key value pair from the state 
     * and adds a new key value pair, where the key is
     * length of list items in the map plus one and the 
     * value is an object containing the grouped 
     * component's key value pairs with empty values
     *
     * @param  { Object Literal } e event object
     */
    handleButtonClick( e )
    {
        const statekey = e.target.getAttribute( 'statekey' );
        const keys     = Array.from( this.state[statekey].keys() );
        let lastKey    = parseInt( keys[keys.length - 1], 10 );

        // Limits the amount of grouped components to 20
        if( lastKey > 20 ) return;

        // Increment lastKey and convert to a string
        const nextKey      = ++lastKey + '';
        const groupedNames = groupedComponents[statekey].map( group => group.name );
        const nextListItem = groupedNames.reduce( ( obj, groupedName ) => 
        {
            obj[groupedName] = '';

            return obj
        }, {} );

        this.setState( prevState => 
        ( {
            [statekey] : prevState[statekey].set( nextKey, nextListItem )
        } ) );
    }

    /**
     * Handles the changes in the module, which 
     * includes additional prompt, checkbox, radio, 
     * button and generic changes
     *
     * @param  { Object Literal } e event object
     */
    handleModuleChange( e )
    {
        const name = extractPrefix( e.target.name );

        const { checkbox, radio, button, module } = optionChanges;

        if( module.includes( name ) ) return this.handleAdditionalPromptChange( e );

        if( checkbox.includes( name ) ) return this.handleCheckboxChange( e )

        if( radio.includes( name ) ) return this.handlePairedRadioGroupChange( e )

        if( button.includes( name ) ) return this.handleButtonClick( e )

        this.handleGenericChange( e );
    }

    render()
    {
        const 
        { 
            visibility,
            additionalPrompts 
        } = this.props;

        const objectState = 
        {
            rating               : this.state.rating,
            inscription          : this.state.inscription,
            serial_number        : this.state.serial_number,
            feature              : this.state.feature,
            feature_note         : this.state.feature_note,
            additionalPromptText : this.state.additionalPromptText.get( 'object' )
        }

        const materialState =
        {
            fulle_name           : this.state.fulle_name,
            'class'              : this.state['class'],
            class_note           : this.state.class_note,
            crystallinity        : this.state.crystallinity,
            crystallinity_note   : this.state.crystallinity_note,
            alloy_designation    : this.state.alloy_designation,
            grade                : this.state.grade,
            recyclability        : this.state.recyclability,
            biodegradability     : this.state.biodegradability,
            toxicity             : this.state.toxicity,
            additionalPromptText : this.state.additionalPromptText.get( 'material' )
        };

        const processingState =
        {
            machining            : this.state.machining,
            machining_note       : this.state.machining_note,
            joining              : this.state.joining,
            joining_note         : this.state.joining_note,
            manufacturer         : this.state.manufacturer,
            date                 : this.state.date,
            location             : this.state.location,
            plant                : this.state.plant,
            treatment            : this.state.treatment,
            treatment_note       : this.state.treatment_note,
            shaping              : this.state.shaping,
            shaping_note         : this.state.shaping_note,
            residual_stress      : this.state.residual_stress,
            residual_stress_note : this.state.residual_stress_note,
            additionalPromptText : this.state.additionalPromptText.get( 'processing' )
        };

        const environmentState =
        {
            light_exposure                   : this.state.light_exposure,
            ambient                          : this.state.ambient,
            loading                          : this.state.loading,
            weather_exposure                 : this.state.weather_exposure,
            storage_location                 : this.state.storage_location,
            geographic_location              : this.state.geographic_location,
            interaction_stress               : this.state.interaction_stress,
            interaction_stress_note          : this.state.interaction_stress_note,
            interaction_environment          : this.state.interaction_environment,
            interaction_environment_note     : this.state.interaction_environment_note,
            interaction_electromagnetic      : this.state.interaction_electromagnetic,
            interaction_electromagnetic_note : this.state.interaction_electromagnetic_note,
            interaction_thermal              : this.state.interaction_thermal,
            interaction_thermal_note         : this.state.interaction_thermal_note,
            interaction_tribological         : this.state.interaction_tribological,
            interaction_tribological_note    : this.state.interaction_tribological_note,
            additionalPromptText : this.state.additionalPromptText.get( 'environment' )
        };

        const useState =
        {
            specification           : this.state.specification,
            record                  : this.state.record,
            operation               : this.state.operation,
            operational_factor      : this.state.operational_factor,
            operational_factor_note : this.state.operational_factor_note,
            functionality_loss      : this.state.functionality_loss,
            problem_statement       : this.state.problem_statement,
            failure_time            : this.state.failure_time,
            failure_operation_stage : this.state.failure_operation_stage,           
            operator                : this.state.operator,
            additionalPromptText    : this.state.additionalPromptText.get( 'use' )
        };

        return (
            <div>
                <div className={ htmlClass.fieldPrompts.page }>

                    <ObjectCaseStudyModule 
                        state={ objectState }
                        visibility={ visibility.object }
                        additionalPrompts={ additionalPrompts.object }
                        handleModuleChange={ this.handleModuleChange } />

                    <MaterialCaseStudyModule 
                        state={ materialState }
                        visibility={ visibility.material }
                        additionalPrompts={ additionalPrompts.material }
                        handleModuleChange={ this.handleModuleChange } />

                    <ProcessingCaseStudyModule 
                        state={ processingState }
                        visibility={ visibility.processing }
                        additionalPrompts={ additionalPrompts.processing }
                        handleModuleChange={ this.handleModuleChange } />

                    <EnvironmentCaseStudyModule 
                        state={ environmentState }
                        visibility={ visibility.environment }
                        additionalPrompts={ additionalPrompts.environment }
                        handleModuleChange={ this.handleModuleChange } />

                    <UseCaseStudyModule 
                        state={ useState }
                        visibility={ visibility.use }
                        additionalPrompts={ additionalPrompts.use }
                        handleModuleChange={ this.handleModuleChange } />

                </div>

                <div className={ htmlClass.download.wrapper }>
                    <button 
                        type="button"
                        className={ htmlClass.download.button }
                        value="download"
                        onClick={ this.downloadState }>
                        { caseStudy.download }
                    </button>
                </div>

            </div>
        )
    }

};
