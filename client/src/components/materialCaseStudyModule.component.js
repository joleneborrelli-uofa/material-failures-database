import React                      from 'react';
import { groupedComponents }      from '../constants/groupedComponent.constants.js';
import { caseStudy }              from '../constants/caseStudy.constants.js';
import { caseStudyHtmlClass }     from '../constants/htmlClass.constants.js';
import { foreignKeys }            from '../constants/foreignKey.constants.js';
import { headers }                from '../constants/webDisplay.constants.js';
import PromptTextArea             from './promptTextArea.component.js'; 
import PromptTitle                from './promptTitle.component.js'; 
import PromptRadioGroup           from './promptRadioGroup.component.js';
import PromptPairedRadioGroupList from './promptPairedRadioGroupList.component.js';
import PromptAdditionalPrompts    from './promptAdditionalPrompts.component.js';

export default function MaterialCaseStudyModule ( props )
{
    // Props
    const 
    {
        visibility,
        additionalPrompts
    } = props;

    const constants      = caseStudy.fieldPrompts.material;
    const htmlClass      = caseStudyHtmlClass.fieldPrompts;
    const htmlVisibility = caseStudyHtmlClass.visibility;

    return (
        <div className={ htmlClass.material }>

            <div className={ htmlClass.header }>
                { headers.material }
            </div>

            <PromptTitle 
                title={ constants.full_name }
                visibility={ htmlVisibility[visibility.full_name] }>

                <PromptTextArea 
                    name="full_name"
                    labelVisibility={ htmlVisibility.off } />
            </PromptTitle>

            <PromptTitle 
                title={ constants.class }
                visibility={ htmlVisibility[visibility['class']] }>

                <PromptPairedRadioGroupList
                    pairedData={ groupedComponents['class'] } />

                <PromptTextArea 
                    name="class_note"
                    labelVisibility={ htmlVisibility.on } />
            </PromptTitle>

            <PromptTitle  
                title={ constants.crystallinity }
                visibility={ htmlVisibility[visibility.crystallinity] }>

                <PromptRadioGroup
                    name="crystallinity"
                    foreignKeys={ foreignKeys.material.crystallinity } />

                <PromptTextArea 
                    name="crystallinity_note"
                    labelVisibility={ htmlVisibility.on } />
            </PromptTitle>

            <PromptTitle  
                title={ constants.alloy_designation }
                visibility={ htmlVisibility[visibility.alloy_designation] }>

                <PromptTextArea 
                    name="alloy_designation"
                    labelVisibility={ htmlVisibility.off } />
            </PromptTitle>

            <PromptTitle  
                title={ constants.grade } 
                visibility={ htmlVisibility[visibility.grade] }>

                <PromptTextArea 
                    name="grade"
                    labelVisibility={ htmlVisibility.off } />
            </PromptTitle>

            <PromptTitle  
                title={ constants.recyclability }
                visibility={ htmlVisibility[visibility.recyclability] }>

                <PromptTextArea 
                    name="recyclability"
                    labelVisibility={ htmlVisibility.off } />
            </PromptTitle>

            <PromptTitle  
                title={ constants.biodegradability }
                visibility={ htmlVisibility[visibility.biodegradability] }>

                <PromptTextArea 
                    name="biodegradability"
                    labelVisibility={ htmlVisibility.off } />
            </PromptTitle>

            <PromptTitle  
                title={ constants.toxicity }
                visibility={ htmlVisibility[visibility.toxicity] }>

                <PromptTextArea 
                    name="toxicity"
                    labelVisibility={ htmlVisibility.off } />
            </PromptTitle>

            <PromptAdditionalPrompts
                name="material_additional_prompt"
                prompts={ additionalPrompts } />

        </div>
    )

};
