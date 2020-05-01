import { groupedComponents }  from '../constants/groupedComponents.constants.js';
import { caseStudy }          from '../constants/caseStudy.constants.js';
import { caseStudyHtmlClass } from '../constants/htmlClass.constants.js';
import { foreignKeys }        from '../constants/foreignKey.constants.js';
import PromptTextArea         from './promptTextArea.components.js'; 
import PromptTitle            from './promptTitle.components.js'; 
import PromptCheckboxGroup    from './promptCheckboxGroup.components.js';

class EnvironmentCaseStudyModule extends React.component
{
    constructor( props )
    {
        super( props );
    }

    render()
    {
        const 
        {
            state,
            visibility,
            handleEnvironmentModuleChange
        } = this.props;

        const constants = caseStudy.fieldPrompts.environment;
        const htmlClass = caseStudyHtmlClass.fieldPrompts;

        return (
            `<div className="${ htmlClass.environment }">

                <PromptTitle 
                    title="${ constants.light_exposure }" 
                    visibility={ visibility.light_exposure }>

                    <PromptCheckboxGroup
                        name="light_exposure"
                        value={ state.light_exposure }
                        handleChange={ handleEnvironmentModuleChange }
                        foreignKeys={ foreignKeys.environment.light_exposure } />

                    <PromptTextArea 
                        name="light_exposure_note"
                        value={ state.light_exposure_note }
                        labelVisibility="${ htmlClass.visibility.on }"
                        handleChange={ handleEnvironmentModuleChange } />
                </PromptTitle>

                <PromptTitle 
                    title="${ constants.ambient }" 
                    visibility={ visibility.ambient }>

                    <PromptCheckboxGroup
                        name="ambient"
                        value={ state.ambient }
                        handleChange={ handleEnvironmentModuleChange }
                        foreignKeys={ foreignKeys.environment.ambient } />

                    <PromptTextArea 
                        name="ambient_note"
                        value={ state.ambient_note }
                        labelVisibility="${ htmlClass.visibility.on }"
                        handleChange={ handleEnvironmentModuleChange } />
                </PromptTitle>

                <PromptTitle 
                    title="${ constants.weather_exposure }" 
                    visibility={ visibility.weather_exposure }>

                    <PromptCheckboxGroup
                        name="weather_exposure"
                        value={ state.weather_exposure }
                        handleChange={ handleEnvironmentModuleChange }
                        foreignKeys={ foreignKeys.environment.weather_exposure } />

                    <PromptTextArea 
                        name="weather_exposure_note"
                        value={ state.weather_exposure_note }
                        labelVisibility="${ htmlClass.visibility.on }"
                        handleChange={ handleEnvironmentModuleChange } />
                </PromptTitle>

                <PromptTitle 
                    title="${ constants.storage_location }" 
                    visibility={ visibility.storage_location }>

                    <PromptCheckboxGroup
                        name="storage_location"
                        value={ state.storage_location }
                        handleChange={ handleEnvironmentModuleChange }
                        foreignKeys={ foreignKeys.environment.storage_location } />

                    <PromptTextArea 
                        name="storage_location_note"
                        value={ state.storage_location_note }
                        labelVisibility="${ htmlClass.visibility.on }"
                        handleChange={ handleEnvironmentModuleChange } />
                </PromptTitle>

                <PromptTitle 
                    title="${ constants.geographic_location }" 
                    visibility={ visibility.geographic_location }>

                    <PromptTextArea 
                        name="geographic_location"
                        value={ state.geographic_location }
                        labelVisibility="${ htmlClass.visibility.on }"
                        handleChange={ handleEnvironmentModuleChange } />
                </PromptTitle>

                <PromptTitle 
                    title="${ constants.stress_orientation }" 
                    visibility={ visibility.stress_orientation }>

                    <PromptTextArea 
                        name="stress_orientation"
                        value={ state.stress_orientation }
                        labelVisibility="${ htmlClass.visibility.on }"
                        handleChange={ handleEnvironmentModuleChange } />
                </PromptTitle>


                <PromptTitle 
                    title="${ constants.loading }" 
                    visibility={ visibility.loading }>

                    <PromptPairedRadioGroupList
                        key="loading"
                        pairedRadioGroup={ state.loading }
                        pairedData={ groupedComponents.loading }
                        handleChange={ handleEnvironmentModuleChange } />

                    <PromptTextArea 
                        name="loading_note"
                        value={ state.loading_note }
                        labelVisibility="${ htmlClass.visibility.on }"
                        handleChange={ handleEnvironmentModuleChange } />
                </PromptTitle>

            </div>`
        )
    }

};
