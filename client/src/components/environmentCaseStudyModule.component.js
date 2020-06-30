import React                      from 'react';
import { groupedComponents }      from '../constants/groupedComponent.constants.js';
import { caseStudy }              from '../constants/caseStudy.constants.js';
import { caseStudyHtmlClass }     from '../constants/htmlClass.constants.js';
import { foreignKeys }            from '../constants/foreignKey.constants.js';
import { headers }                from '../constants/webDisplay.constants.js';
import PromptTextArea             from './promptTextArea.component.js'; 
import PromptTitle                from './promptTitle.component.js'; 
import PromptCheckboxGroup        from './promptCheckboxGroup.component.js';
import PromptRadioGroup           from './promptRadioGroup.component.js';
import PromptPairedRadioGroupList from './promptPairedRadioGroupList.component.js';
import PromptAdditionalPrompts    from './promptAdditionalPrompts.component.js';

export default function EnvironmentCaseStudyModule ( props )
{
    // Props
    const 
    {
        visibility,
        additionalPrompts
    } = props;

    const constants      = caseStudy.fieldPrompts.environment;
    const htmlClass      = caseStudyHtmlClass.fieldPrompts;
    const htmlVisibility = caseStudyHtmlClass.visibility;

    return (
        <div className={ htmlClass.environment }>

            <div className={ htmlClass.header }>
                { headers.environment }
            </div>

            <PromptTitle 
                title={ constants.light_exposure }
                visibility={ htmlVisibility[visibility.light_exposure] }>

                <PromptCheckboxGroup
                    name="light_exposure"
                    foreignKeys={ foreignKeys.environment.light_exposure } />

                <PromptTextArea 
                    name="light_exposure_note"
                    labelVisibility={ htmlVisibility.on } />
            </PromptTitle>

            <PromptTitle 
                title={ constants.ambient } 
                visibility={ htmlVisibility[visibility.ambient] }>

                <PromptCheckboxGroup
                    name="ambient"
                    foreignKeys={ foreignKeys.environment.ambient } />

                <PromptTextArea 
                    name="ambient_note"
                    labelVisibility={ htmlVisibility.on } />
            </PromptTitle>

            <PromptTitle 
                title={ constants.weather_exposure }
                visibility={ htmlVisibility[visibility.weather_exposure] }>

                <PromptCheckboxGroup
                    name="weather_exposure"
                    foreignKeys={ foreignKeys.environment.weather_exposure } />

                <PromptTextArea 
                    name="weather_exposure_note"
                    labelVisibility={ htmlVisibility.on } />
            </PromptTitle>

            <PromptTitle 
                title={ constants.storage_location }
                visibility={ htmlVisibility[visibility.storage_location] }>

                <PromptCheckboxGroup
                    name="storage_location"
                    foreignKeys={ foreignKeys.environment.storage_location } />

                <PromptTextArea 
                    name="storage_location_note"
                    labelVisibility={ htmlVisibility.on } />
            </PromptTitle>

            <PromptTitle 
                title={ constants.geographic_location } 
                visibility={ htmlVisibility[visibility.geographic_location] }>

                <PromptTextArea 
                    name="geographic_location"
                    labelVisibility={ htmlVisibility.on } />
            </PromptTitle>

            <PromptTitle 
                title={ constants.interaction_stress } 
                visibility={ htmlVisibility[visibility.interaction_stress] }>

                <PromptRadioGroup
                    name="interaction_stress"
                    foreignKeys={ foreignKeys.environment.interaction_stress } />
                
                <PromptTextArea 
                    name="interaction_stress_note"
                    labelVisibility={ htmlVisibility.on } />

            </PromptTitle>

            <PromptTitle 
                title={ constants.interaction_environment } 
                visibility={ htmlVisibility[visibility.interaction_environment] }>

                <PromptRadioGroup
                    name="interaction_environment"
                    foreignKeys={ foreignKeys.environment.interaction_environment } />

                <PromptTextArea 
                    name="interaction_environment_note"
                    labelVisibility={ htmlVisibility.on } />
            </PromptTitle>

            <PromptTitle 
                title={ constants.interaction_electromagnetic } 
                visibility={ htmlVisibility[visibility.interaction_electromagnetic] }>

                <PromptRadioGroup
                    name="interaction_electromagnetic"
                    foreignKeys={ foreignKeys.environment.interaction_electromagnetic } />

                <PromptTextArea 
                    name="interaction_electromagnetic_note"
                    labelVisibility={ htmlVisibility.on } />
            </PromptTitle>

            <PromptTitle 
                title={ constants.interaction_thermal } 
                visibility={ htmlVisibility[visibility.interaction_thermal] }>

                <PromptRadioGroup
                    name="interaction_thermal"
                    foreignKeys={ foreignKeys.environment.interaction_thermal } />

                <PromptTextArea 
                    name="interaction_thermal_note"
                    labelVisibility={ htmlVisibility.on } />
            </PromptTitle>

            <PromptTitle 
                title={ constants.interaction_tribological } 
                visibility={ htmlVisibility[visibility.interaction_tribological] }>

                <PromptRadioGroup
                    name="interaction_tribological"
                    foreignKeys={ foreignKeys.environment.interaction_tribological } />

                <PromptTextArea 
                    name="interaction_tribological_note"
                    labelVisibility={ htmlVisibility.on } />
            </PromptTitle>

            <PromptTitle 
                title={ constants.interaction_loading }
                visibility={ htmlVisibility[visibility.interaction_loading] }>

                <PromptPairedRadioGroupList
                    pairedData={ groupedComponents.interaction_loading } />

                <PromptTextArea 
                    name="interaction_loading_note"
                    labelVisibility={ htmlVisibility.on } />
            </PromptTitle>

            <PromptAdditionalPrompts
                name="environment_additional_prompt"
                prompts={ additionalPrompts } />

        </div>  
    )

};
