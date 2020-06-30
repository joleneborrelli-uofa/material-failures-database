import React                  from 'react';
import { pairedComponents }   from '../constants/pairedComponent.constants.js';
import { caseStudy }          from '../constants/caseStudy.constants.js';
import { caseStudyHtmlClass } from '../constants/htmlClass.constants.js';
import { foreignKeys }        from '../constants/foreignKey.constants.js';
import { headers }            from '../constants/webDisplay.constants.js';
import TextArea               from './TextArea.component.js'; 
import Title                  from './Title.component.js'; 
import CheckboxGroup          from './CheckboxGroup.component.js';
import RadioGroup             from './RadioGroup.component.js';
import PairedRadioGroupList   from './PairedRadioGroupList.component.js';
import AdditionalPrompt       from './AdditionalPrompt.component.js';

export default function EnvironmentModule ( props )
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

            <Title 
                title={ constants.light_exposure }
                visibility={ htmlVisibility[visibility.light_exposure] }>

                <CheckboxGroup
                    name="light_exposure"
                    foreignKeys={ foreignKeys.environment.light_exposure } />

                <TextArea 
                    name="light_exposure_note"
                    labelVisibility={ htmlVisibility.on } />
            </Title>

            <Title 
                title={ constants.ambient } 
                visibility={ htmlVisibility[visibility.ambient] }>

                <CheckboxGroup
                    name="ambient"
                    foreignKeys={ foreignKeys.environment.ambient } />

                <TextArea 
                    name="ambient_note"
                    labelVisibility={ htmlVisibility.on } />
            </Title>

            <Title 
                title={ constants.weather_exposure }
                visibility={ htmlVisibility[visibility.weather_exposure] }>

                <CheckboxGroup
                    name="weather_exposure"
                    foreignKeys={ foreignKeys.environment.weather_exposure } />

                <TextArea 
                    name="weather_exposure_note"
                    labelVisibility={ htmlVisibility.on } />
            </Title>

            <Title 
                title={ constants.storage_location }
                visibility={ htmlVisibility[visibility.storage_location] }>

                <CheckboxGroup
                    name="storage_location"
                    foreignKeys={ foreignKeys.environment.storage_location } />

                <TextArea 
                    name="storage_location_note"
                    labelVisibility={ htmlVisibility.on } />
            </Title>

            <Title 
                title={ constants.geographic_location } 
                visibility={ htmlVisibility[visibility.geographic_location] }>

                <TextArea 
                    name="geographic_location"
                    labelVisibility={ htmlVisibility.on } />
            </Title>

            <Title 
                title={ constants.interaction_stress } 
                visibility={ htmlVisibility[visibility.interaction_stress] }>

                <RadioGroup
                    name="interaction_stress"
                    foreignKeys={ foreignKeys.environment.interaction_stress } />
                
                <TextArea 
                    name="interaction_stress_note"
                    labelVisibility={ htmlVisibility.on } />

            </Title>

            <Title 
                title={ constants.interaction_environment } 
                visibility={ htmlVisibility[visibility.interaction_environment] }>

                <RadioGroup
                    name="interaction_environment"
                    foreignKeys={ foreignKeys.environment.interaction_environment } />

                <TextArea 
                    name="interaction_environment_note"
                    labelVisibility={ htmlVisibility.on } />
            </Title>

            <Title 
                title={ constants.interaction_electromagnetic } 
                visibility={ htmlVisibility[visibility.interaction_electromagnetic] }>

                <RadioGroup
                    name="interaction_electromagnetic"
                    foreignKeys={ foreignKeys.environment.interaction_electromagnetic } />

                <TextArea 
                    name="interaction_electromagnetic_note"
                    labelVisibility={ htmlVisibility.on } />
            </Title>

            <Title 
                title={ constants.interaction_thermal } 
                visibility={ htmlVisibility[visibility.interaction_thermal] }>

                <RadioGroup
                    name="interaction_thermal"
                    foreignKeys={ foreignKeys.environment.interaction_thermal } />

                <TextArea 
                    name="interaction_thermal_note"
                    labelVisibility={ htmlVisibility.on } />
            </Title>

            <Title 
                title={ constants.interaction_tribological } 
                visibility={ htmlVisibility[visibility.interaction_tribological] }>

                <RadioGroup
                    name="interaction_tribological"
                    foreignKeys={ foreignKeys.environment.interaction_tribological } />

                <TextArea 
                    name="interaction_tribological_note"
                    labelVisibility={ htmlVisibility.on } />
            </Title>

            <Title 
                title={ constants.interaction_loading }
                visibility={ htmlVisibility[visibility.interaction_loading] }>

                <PairedRadioGroupList
                    pairedData={ pairedComponents.interaction_loading } />

                <TextArea 
                    name="interaction_loading_note"
                    labelVisibility={ htmlVisibility.on } />
            </Title>

            <AdditionalPrompt
                name="environment_additional_prompt"
                prompts={ additionalPrompts } />

        </div>  
    )

};
