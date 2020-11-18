import React                  from 'react';
import { caseStudyHtmlClass, genericHtmlClass } from '../constants/htmlClass.constants.js';
import { foreignKeys }        from '../constants/foreignKey.constants.js';
import { headers }            from '../constants/webDisplay.constants.js';
import TextArea               from './TextArea.component.js'; 
import Title                  from './Title.component.js'; 
import CheckboxGroup          from './CheckboxGroup.component.js';
import AdditionalPrompt       from './AdditionalPrompt.component.js';

export default function UseCaseStudyModule ( props )
{
    // Props
    const 
    {
        visibility,
        prompt,
        additionalPrompt
    } = props;

    const htmlClass      = caseStudyHtmlClass.prompt;
    const htmlVisibility = genericHtmlClass.visibility;

    return (
        <div className={ htmlClass.use }>

            <div className={ htmlClass.header }>
                { headers.use }
            </div>

            <Title 
                title={ prompt.specification } 
                visibility={ htmlVisibility[visibility.specification] }>

                <CheckboxGroup
                    name="specification"
                    foreignKeys={ foreignKeys.use.specification } />

                <TextArea 
                    name="specification_note"
                    labelVisibility={ htmlVisibility.on } />
            </Title>

            <Title 
                title={ prompt.record }
                visibility={ htmlVisibility[visibility.record] }>

                <CheckboxGroup
                    name="record"
                    foreignKeys={ foreignKeys.use.record } />

                <TextArea 
                    name="record_note"
                    labelVisibility={ htmlVisibility.on } />
            </Title>

            <Title 
                title={ prompt.operation }
                visibility={ htmlVisibility[visibility.operation] }>

                <CheckboxGroup
                    name="operation"
                    foreignKeys={ foreignKeys.use.operation } />

                <TextArea 
                    name="operation_note"
                    labelVisibility={ htmlVisibility.on } />
            </Title>

            <Title 
                title={ prompt.operational_factor }
                visibility={ htmlVisibility[visibility.operational_factor] }>

                <CheckboxGroup
                    name="operational_factor"
                    foreignKeys={ foreignKeys.use.operational_factor } />

                <TextArea 
                    name="operational_factor_note"
                    labelVisibility={ htmlVisibility.on } />
            </Title>

            <Title 
                title={ prompt.functionality_loss }
                visibility={ htmlVisibility[visibility.functionality_loss] }>

                <TextArea 
                    name="functionality_loss"
                    labelVisibility={ htmlVisibility.on } />
            </Title>

            <Title 
                title={ prompt.problem_statement }
                visibility={ htmlVisibility[visibility.problem_statement] }>

                <TextArea 
                    name="problem_statement"
                    labelVisibility={ htmlVisibility.on } />
            </Title>

            <Title 
                title={ prompt.failure_time } 
                visibility={ htmlVisibility[visibility.failure_time] }>

                <TextArea 
                    name="failure_time"
                    labelVisibility={ htmlVisibility.on } />
            </Title>

            <Title 
                title={ prompt.failure_operation_stage }
                visibility={ htmlVisibility[visibility.failure_operation_stage] }>

                <TextArea 
                    name="failure_operation_stage"
                    labelVisibility={ htmlVisibility.on } />
            </Title>

            <Title 
                title={ prompt.operator }
                visibility={ htmlVisibility[visibility.operator] }>

                <TextArea 
                    name="operator"
                    labelVisibility={ htmlVisibility.on } />
            </Title>

            <AdditionalPrompt
                name="use_additional_prompt"
                additionalPrompt={ additionalPrompt } />

        </div>
    )

};
