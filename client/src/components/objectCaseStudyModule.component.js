import React                   from 'react';
import { caseStudy }           from '../constants/caseStudy.constants.js';
import { caseStudyHtmlClass }  from '../constants/htmlClass.constants.js';
import { foreignKeys }         from '../constants/foreignKey.constants.js';
import { headers }             from '../constants/webDisplay.constants.js';
import { createUniqueId }      from '../helpers.js';
import PromptTextArea          from './promptTextArea.component.js'; 
import PromptTitle             from './promptTitle.component.js'; 
import PromptCheckboxGroup     from './promptCheckboxGroup.component.js';
import PromptAdditionalPrompts from './promptAdditionalPrompts.component.js';

export default function ObjectCaseStudyModule ( props )
{
    // Props
    const  
    {
        visibility,
        additionalPrompts
    } = props;

    const constants      = caseStudy.fieldPrompts.object;
    const htmlClass      = caseStudyHtmlClass.fieldPrompts;
    const htmlVisibility = caseStudyHtmlClass.visibility

    // Add the prompt which is constant to this module
    const prompts = [ ...additionalPrompts, caseStudy.additionalPrompts.fractography ];

    return (
        <div className={ htmlClass.object }>

            <div className={ htmlClass.header }>
                { headers.object }
            </div>

            <PromptTitle 
                title={ constants.rating }
                visibility={ htmlVisibility[visibility.rating] }>

                <PromptTextArea 
                    name="rating"
                    labelVisibility={ htmlVisibility.off } />
            </PromptTitle>

            <PromptTitle  
                title={ constants.inscription } 
                visibility={ htmlVisibility[visibility.inscription] }>

                <PromptTextArea 
                    name="inscription"
                    labelVisibility={ htmlVisibility.off } />
            </PromptTitle>

            <PromptTitle  
                title={ constants.serial_number }
                visibility={ htmlVisibility[visibility.serial_number] }>

                <PromptTextArea 
                    name="serial_number"
                    labelVisibility={ htmlVisibility.off } />
            </PromptTitle>

            <PromptTitle  
                title={ constants.feature } 
                visibility={ htmlVisibility[visibility.feature] }>

                <PromptCheckboxGroup
                    name="feature"
                    foreignKeys={ foreignKeys.object.feature } />

                <PromptTextArea 
                    name="feature_note"
                    labelVisibility={ htmlVisibility.on } />
            </PromptTitle>

            <PromptAdditionalPrompts
                key={ createUniqueId() }
                name="object_additional_prompt"
                prompts={ prompts } />

        </div>
    )

};
