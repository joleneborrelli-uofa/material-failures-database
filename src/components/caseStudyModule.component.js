import { groupedComponents }     from '../constants/groupedComponents.constants.js';
import { caseStudyHtmlClass }    from '../constants/htmlClass.constants.js';
import { optionChanges }         from '../constants/optionChanges.constants.js';
import ObjectCaseStudyModule     from './objectCaseStudyModule.components.js'; 
import MaterialCaseStudyModule   from './materialCaseStudyModule.components.js'; 
import ProcessingCaseStudyModule from './processingCaseStudyModule.components.js'

class CaseStudyModule extends React.component
{
    constructor( props )
    {
        super( props );

        // State

        this.state =
        {
            rating               : '',
            inscription          : '',
            serial_number        : '',
            feature              : new Map(),
            feature_note         : '',
            name                 : '',
            'class'              : new Map( [[0,
            {
                'class'        : '',
                 class_subtype : ''
            } ]] ),,
            class_note           : '',
            crystallinity        : '',
            alloy_designation    : '',
            grade                : '',
            recyclability        : '',
            biodegradability     : '',
            toxicity             : '',
            machining            : new Map(),
            machining_note       : '',
            joining              : new Map(),
            joining_note         : '',
            manufacturer         : '',
            date                 : '',
            location             : '',
            plant                : '',
            treatment            : new Map( [[0,
            {
                treatment      : '',
                treatment_type : ''
            } ]] ),
            treatment_note : '',
            shaping        : new Map( [[0,
            {
                shaping      : '',
                shaping_type : ''
            } ]] ),
            shaping_note    : '',
            residual_stress : new Map( [[0,
            {
                residual_stress        : '',
                residual_stress_forces : ''
            } ]] ),
            residual_stress_note : '',
            light_exposure       : new Map(),
            light_exposure_note  : '',
            ambient              : new Map(),
            ambient_note         : '',
            loading              : new Map( [[0
            {
                loading          : '',
                loading_normalcy : ''
            } ]] ),
            loading_note            : '',
            weather_exposure        : new Map(),
            weather_exposure_note   : '',
            storage_location        : new Map(),
            storage_location_note   : '',
            geographic_location     : '',
            stress_orientation      : '',
            specification           : new Map(),
            specification_note      : '',
            record                  : new Map(),
            record_note             : '',
            operation               : new Map(),
            operation_note          : '',
            operational_factor      : new Map()
            operational_factor_note : '',
            functionality_loss      : '',
            problem_statement       : '',
            failure_time            : '',
            failure_operation_stage : '',
            operator                : ''
        }

        // Handlers

        this.handleGenericChange           = this.handleGenericChange.bind( this );
        this.handleCheckboxChange          = this.handleCheckboxChange.bind( this )
        this.handleObjectModuleChange      = this.handleObjectModuleChange.bind( this );
        this.handleMaterialModuleChange    = this.handleMaterialModuleChange.bind( this );
        this.handleProcessingModuleChange  = this.handleProcessingModuleChange.bind( this );
        this.handlePairedRadioGroupChange  = this.handlePairedRadioGroupChange.bind( this );
        this.handleEnvironmentModuleChange = this.handleEnvironmentModuleChange.bind( this );
        this.handleUseModuleChange         = this.handleUseModuleChange.bind( this );
    }

    /**
     * Handles the setting of key value pairs
     *
     * @param  { Object Literal } e event object
     */
    handleGenericChange( e )
    {
        const { name, value } = e.target;

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
        const { name, checked } = e.target;

        this.setState( prevState =>
        ( {
            [name] : prevState[name]set( name, checked ) 
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
        const { name, value, index } = e.target;

        const key     = e.target.getAttribute( 'key' );
        const prevKey = this.state[key].get( index ) || {};

        this.setState( prevState =>
        ( {
            [key] : prevState[key]set( index, { ...prevKey, [name] : value } )
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
        const { name } = e.target;
        const keys     = Array.from( this.state[name].keys() );
        const lastKey  = keys[keys.length - 1]

        // Limits the amount of grouped components to 20
        if( lastKey > 20 ) return;

        const nextKey      = ++lastKey;
        const groupedNames = groupedComponents[name].map( group => group.name );
        const nextListItem = groupedNames.reduce( ( obj, groupedName ) => 
        {
            obj[groupedName] = '';

            return obj
        }, {} );

        this.setState( prevState => 
        ( {
            [name] : prevState[name]set( nextKey, nextListItem );
        } ) );
    }

    /**
     * Handles the changes in the object module, 
     * which include checkbox and generic changes
     *
     * @param  { Object Literal } e event object
     */
    handleObjectModuleChange( e )
    {
        const { name } = e.target;
        const { checkbox } = optionChanges.object;

        if( checkbox.includes( name ) ) return this.handleCheckboxChange( e )

        this.handleGenericChange( e );
    }

    /**
     * Handles the changes in the material module, 
     * which include radio, button and generic 
     * changes
     *
     * @param  { Object Literal } e event object
     */
    handleMaterialModuleChange( e )
    {
        const { name } = e.target;
        const { radio, button } = optionChanges.material;

        if( radio.includes( name ) ) return this.handlePairedRadioGroupChange( e )

        if( button.includes( name ) ) return this.handleButtonClick( e )

        this.handleGenericChange( e );
    }

    /**
     * Handles the changes in the processing module, 
     * which include checkbox, radio, button and 
     * generic changes
     *
     * @param  { Object Literal } e event object
     */
    handleProcessingModuleChange( e )
    {
        const { name } = e.target;
        const { checkbox, radio, button } = optionChanges.processing;

        if( checkbox.includes( name ) ) return this.handleCheckboxChange( e )

        if( radio.includes( name ) ) return this.handlePairedRadioGroupChange( e )

        if( button.includes( name ) ) return this.handleButtonClick( e )

        this.handleGenericChange( e );
    }

    /**
     * Handles the changes in the environment module, 
     * which include checkbox, radio, button and 
     * generic changes
     *
     * @param  { Object Literal } e event object
     */
    handleEnvironmentModuleChange( e )
    {
        const { name } = e.target;
        const { checkbox, radio, button } = optionChanges.environment;

        if( checkbox.includes( name ) ) return this.handleCheckboxChange( e )

        if( radio.includes( name ) ) return this.handlePairedRadioGroupChange( e )

        if( button.includes( name ) ) return this.handleButtonClick( e )

        this.handleGenericChange( e );
    }

    render()
    {
        const { visibility } = this.props;
        const htmlClass      = caseStudyHtmlClass.fieldPrompts;

        const objectState = 
        {
            rating         : this.state.rating,
            inscription    : this.state.inscription,
            serial_number  : this.state.serial_number,
            feature        : this.state.feature,
            feature_note   : this.state.feature_note
        }

        const materialState =
        {
            name              : this.state.name,
            'class'           : this.state.['class'],
            class_note        : this.state.class_note,
            crystallinity     : this.state.crystallinity,
            alloy_designation : this.state.alloy_designation,
            grade             : this.state.grade,
            recyclability     : this.state.recyclability,
            biodegradability  : this.state.biodegradability,
            toxicity          : this.state.toxicity
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
            residual_stress_note : this.state.residual_stress_note
        };

        const environmentState =
        {
            light_exposure      : this.state.light_exposure,
            ambient             : this.state.ambient,
            loading             : this.state.loading,
            weather_exposure    : this.state.weather_exposure,
            storage_location    : this.state.storage_location,
            geographic_location : this.state.geographic_location,
            stress_orientation  : this.state.stress_orientation
        };

        const useState =
        {
            specification           : this.state.specification,
            record                  : this.state.record,
            operation               : this.state.operation,
            operational_factor      : this.state.operational_factor,
            functionality_loss      : this.state.functionality_loss,
            problem_statement       : this.state.problem_statement,
            failure_time            : this.state.failure_time,
            failure_operation_stage : this.state.failure_operation_stage,           
            operator                : this.state.operator
        };

        return (
            `<div className="${ htmlClass.caseStudy }">

                <ObjectCaseStudyModule 
                    state={ objectState }
                    visibility={ visibility.object }
                    handleObjectModuleChange={ this.handleObjectModuleChange } />

                <MaterialCaseStudyModule 
                    state={ materialState }
                    visibility={ visibility.material }
                    handleMaterialModuleChange={ this.handleMaterialModuleChange } />

                <ProcessingCaseStudyModule 
                    state={ processingState }
                    visibility={ visibility.processing }
                    handleProcessinglModuleChange={ this.handleProcessingModuleChange } />

                <EnvironmentCaseStudyModule 
                    state={ environmentState }
                    visibility={ visibility.environment }
                    handleEnvironmentModuleChange={ this.handleEnvironmentModuleChange } />

                <UseCaseStudyModule 
                    state={ useState }
                    visibility={ visibility.use }
                    handleUseModuleChange={ this.handleUseModuleChange } />

            </div>`
        )
    }

};
