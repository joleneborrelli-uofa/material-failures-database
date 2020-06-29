import React                   from 'react';
import { caseStudy }           from '../constants/caseStudy.constants.js';
import { caseStudyHtmlClass }  from '../constants/htmlClass.constants.js';
import { foreignKeys }         from '../constants/foreignKey.constants.js';
import { headers }             from '../constants/webDisplay.constants.js';
import PromptTextArea          from './promptTextArea.component.js'; 
import PromptTitle             from './promptTitle.component.js'; 
import PromptCheckboxGroup     from './promptCheckboxGroup.component.js';
import PromptAdditionalPrompts from './promptAdditionalPrompts.component.js';

export default function UseCaseStudyModule ( props )
{
    // Props
    const 
    {
        visibility,
        additionalPrompts
    } = props;

    const constants      = caseStudy.fieldPrompts.use;
    const htmlClass      = caseStudyHtmlClass.fieldPrompts;
    const htmlVisibility = caseStudyHtmlClass.visibility;

    return (
        <div className={ htmlClass.use }>

            <div className={ htmlClass.header }>
                { headers.use }
            </div>

            <PromptTitle 
                title={ constants.specification } 
                visibility={ htmlVisibility[visibility.specification] }>

                <PromptCheckboxGroup
                    name="specification"
                    foreignKeys={ foreignKeys.use.specification } />

                <PromptTextArea 
                    name="specification_note"
                    labelVisibility={ htmlVisibility.on } />
            </PromptTitle>

            <PromptTitle 
                title={ constants.record }
                visibility={ htmlVisibility[visibility.record] }>

                <PromptCheckboxGroup
                    name="record"
                    foreignKeys={ foreignKeys.use.record } />

                <PromptTextArea 
                    name="record_note"
                    labelVisibility={ htmlVisibility.on } />
            </PromptTitle>

            <PromptTitle 
                title={ constants.operation }
                visibility={ htmlVisibility[visibility.operation] }>

                <PromptCheckboxGroup
                    name="operation"
                    foreignKeys={ foreignKeys.use.operation } />

                <PromptTextArea 
                    name="operation_note"
                    labelVisibility={ htmlVisibility.on } />
            </PromptTitle>

            <PromptTitle 
                title={ constants.operational_factor }
                visibility={ htmlVisibility[visibility.operational_factor] }>

                <PromptCheckboxGroup
                    name="operational_factor"
                    foreignKeys={ foreignKeys.use.operational_factor } />

                <PromptTextArea 
                    name="operational_factor_note"
                    labelVisibility={ htmlVisibility.on } />
            </PromptTitle>

            <PromptTitle 
                title={ constants.functionality_loss }
                visibility={ htmlVisibility[visibility.functionality_loss] }>

                <PromptTextArea 
                    name="functionality_loss"
                    labelVisibility={ htmlVisibility.on } />
            </PromptTitle>

            <PromptTitle 
                title={ constants.problem_statement }
                visibility={ htmlVisibility[visibility.problem_statement] }>

                <PromptTextArea 
                    name="problem_statement"
                    labelVisibility={ htmlVisibility.on } />
            </PromptTitle>

            <PromptTitle 
                title={ constants.failure_time } 
                visibility={ htmlVisibility[visibility.failure_time] }>

                <PromptTextArea 
                    name="failure_time"
                    labelVisibility={ htmlVisibility.on } />
            </PromptTitle>

            <PromptTitle 
                title={ constants.failure_operation_stage }
                visibility={ htmlVisibility[visibility.failure_operation_stage] }>

                <PromptTextArea 
                    name="failure_operation_stage"
                    labelVisibility={ htmlVisibility.on } />
            </PromptTitle>

            <PromptTitle 
                title={ constants.operator }
                visibility={ htmlVisibility[visibility.operator] }>

                <PromptTextArea 
                    name="operator"
                    labelVisibility={ htmlVisibility.on } />
            </PromptTitle>

            <PromptAdditionalPrompts
                name="use_additional_prompt"
                prompts={ additionalPrompts } />

        </div>
    )

};
