import React                      from 'react';
import { groupedComponents }      from '../constants/groupedComponent.constants.js';
import { caseStudy }              from '../constants/caseStudy.constants.js';
import { caseStudyHtmlClass }     from '../constants/htmlClass.constants.js';
import { foreignKeys }            from '../constants/foreignKey.constants.js';
import { headers }                from '../constants/webDisplay.constants.js';
import PromptTextArea             from './promptTextArea.component.js'; 
import PromptTitle                from './promptTitle.component.js'; 
import PromptCheckboxGroup        from './promptCheckboxGroup.component.js';
import PromptPairedRadioGroupList from './promptPairedRadioGroupList.component.js';
import PromptAdditionalPrompts    from './promptAdditionalPrompts.component.js';

export default function ProcessingCaseStudyModule ( props )
{
    // Props
    const 
    {
        state,
        visibility,
        additionalPrompts,
        handleModuleChange
    } = props;

    const constants      = caseStudy.fieldPrompts.processing;
    const htmlClass      = caseStudyHtmlClass.fieldPrompts;
    const htmlVisibility = caseStudyHtmlClass.visibility;

    return (
        <div className={ htmlClass.processing }>

            <div className={ htmlClass.header }>
                { headers.processing }
            </div>

            <PromptTitle 
                title={ constants.treatment }
                visibility={ htmlVisibility[visibility.treatment] }>

                <PromptPairedRadioGroupList
                    pairedData={ groupedComponents.treatment } />

                <PromptTextArea 
                    name="treatment_note"
                    labelVisibility={ htmlVisibility.on } />
            </PromptTitle>

            <PromptTitle 
                title={ constants.shaping }
                visibility={ htmlVisibility[visibility.shaping] }>

                <PromptPairedRadioGroupList
                    pairedData={ groupedComponents.shaping } />

                <PromptTextArea 
                    name="shaping_note"
                    labelVisibility={ htmlVisibility.on } />
            </PromptTitle>

            <PromptTitle 
                title={ constants.residual_stress }
                visibility={ htmlVisibility[visibility.residual_stress] }>

                <PromptPairedRadioGroupList
                    pairedData={ groupedComponents.residual_stress } />

                <PromptTextArea 
                    name="residual_stress_note"
                    labelVisibility={ htmlVisibility.on } />
            </PromptTitle>

            <PromptTitle 
                title={ constants.machining }
                visibility={ htmlVisibility[visibility.machining] }>

                <PromptCheckboxGroup
                    name="machining"
                    foreignKeys={ foreignKeys.processing.machining } />

                <PromptTextArea 
                    name="machining_note"
                    labelVisibility={ htmlVisibility.on } />
            </PromptTitle>

            <PromptTitle 
                title={ constants.joining }
                visibility={ htmlVisibility[visibility.joining] }>

                <PromptCheckboxGroup
                    name="joining"
                    foreignKeys={ foreignKeys.processing.joining } />

                <PromptTextArea 
                    name="joining_note"
                    labelVisibility={ htmlVisibility.on } />
            </PromptTitle>

            <PromptTitle  
                title={ constants.manufacturer }
                visibility={ htmlVisibility[visibility.manufacturer] }>

                <PromptTextArea 
                    name="manufacturer"
                    labelVisibility={ htmlVisibility.off } />
            </PromptTitle>

            <PromptTitle  
                title={ constants.date }
                visibility={ htmlVisibility[visibility.date] }>

                <PromptTextArea 
                    name="date"
                    labelVisibility={ htmlVisibility.off } />
            </PromptTitle>

            <PromptTitle  
                title={ constants.location }
                visibility={ htmlVisibility[visibility.location] }>

                <PromptTextArea 
                    name="location"
                    labelVisibility={ htmlVisibility.off } />
            </PromptTitle>

            <PromptTitle  
                title={ constants.plant }
                visibility={ htmlVisibility[visibility.plant] }>

                <PromptTextArea 
                    name="plant"
                    labelVisibility={ htmlVisibility.off } />
            </PromptTitle>

            <PromptAdditionalPrompts
                name="processing_additional_prompt"
                prompts={ additionalPrompts } />

        </div>
    )

};
