import React                  from 'react';
import { pairedComponents }   from '../constants/pairedComponent.constants.js';
import { caseStudyHtmlClass } from '../constants/htmlClass.constants.js';
import { foreignKeys }        from '../constants/foreignKey.constants.js';
import { headers }            from '../constants/webDisplay.constants.js';
import TextArea               from './TextArea.component.js'; 
import Title                  from './Title.component.js'; 
import CheckboxGroup          from './CheckboxGroup.component.js';
import PairedRadioGroupList   from './PairedRadioGroupList.component.js';
import AdditionalPrompt       from './AdditionalPrompt.component.js';

export default function ProcessingModule ( props )
{
    // Props
    const 
    {
        visibility,
        prompt,
        additionalPrompt
    } = props;

    const htmlClass      = caseStudyHtmlClass.prompt;
    const htmlVisibility = caseStudyHtmlClass.visibility;

    return (
        <div className={ htmlClass.processing }>

            <div className={ htmlClass.header }>
                { headers.processing }
            </div>

            <Title 
                title={ prompt.treatment }
                visibility={ htmlVisibility[visibility.treatment] }>

                <PairedRadioGroupList
                    pairedData={ pairedComponents.treatment } />

                <TextArea 
                    name="treatment_note"
                    labelVisibility={ htmlVisibility.on } />
            </Title>

            <Title 
                title={ prompt.shaping }
                visibility={ htmlVisibility[visibility.shaping] }>

                <PairedRadioGroupList
                    pairedData={ pairedComponents.shaping } />

                <TextArea 
                    name="shaping_note"
                    labelVisibility={ htmlVisibility.on } />
            </Title>

            <Title 
                title={ prompt.residual_stress }
                visibility={ htmlVisibility[visibility.residual_stress] }>

                <PairedRadioGroupList
                    pairedData={ pairedComponents.residual_stress } />

                <TextArea 
                    name="residual_stress_note"
                    labelVisibility={ htmlVisibility.on } />
            </Title>

            <Title 
                title={ prompt.machining }
                visibility={ htmlVisibility[visibility.machining] }>

                <CheckboxGroup
                    name="machining"
                    foreignKeys={ foreignKeys.processing.machining } />

                <TextArea 
                    name="machining_note"
                    labelVisibility={ htmlVisibility.on } />
            </Title>

            <Title 
                title={ prompt.joining }
                visibility={ htmlVisibility[visibility.joining] }>

                <CheckboxGroup
                    name="joining"
                    foreignKeys={ foreignKeys.processing.joining } />

                <TextArea 
                    name="joining_note"
                    labelVisibility={ htmlVisibility.on } />
            </Title>

            <Title  
                title={ prompt.manufacturer }
                visibility={ htmlVisibility[visibility.manufacturer] }>

                <TextArea 
                    name="manufacturer"
                    labelVisibility={ htmlVisibility.off } />
            </Title>

            <Title  
                title={ prompt.date }
                visibility={ htmlVisibility[visibility.date] }>

                <TextArea 
                    name="date"
                    labelVisibility={ htmlVisibility.off } />
            </Title>

            <Title  
                title={ prompt.location }
                visibility={ htmlVisibility[visibility.location] }>

                <TextArea 
                    name="location"
                    labelVisibility={ htmlVisibility.off } />
            </Title>

            <Title  
                title={ prompt.plant }
                visibility={ htmlVisibility[visibility.plant] }>

                <TextArea 
                    name="plant"
                    labelVisibility={ htmlVisibility.off } />
            </Title>

            <AdditionalPrompt
                name="processing_additional_prompt"
                additionalPrompt={ additionalPrompt } />

        </div>
    )

};
