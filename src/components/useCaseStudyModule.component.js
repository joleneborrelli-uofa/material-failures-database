import React                   from 'react';
import { groupedComponents }   from '../constants/groupedComponent.constants.js';
import { caseStudy }           from '../constants/caseStudy.constants.js';
import { caseStudyHtmlClass }  from '../constants/htmlClass.constants.js';
import { foreignKeys }         from '../constants/foreignKey.constants.js';
import PromptTextArea          from './promptTextArea.component.js'; 
import PromptTitle             from './promptTitle.component.js'; 
import PromptCheckboxGroup     from './promptCheckboxGroup.component.js';
import PromptAdditionalPrompts from './promptAdditionalPrompts.component.js';

export default class UseCaseStudyModule extends React.Component
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
            additionalPrompts,
            handleModuleChange
        } = this.props;

        const constants      = caseStudy.fieldPrompts.use;
        const htmlClass      = caseStudyHtmlClass.fieldPrompts;
        const htmlVisibility = caseStudyHtmlClass.visibility;

        return (
            <div className={ htmlClass.use }>

                <PromptTitle 
                    title={ constants.specification } 
                    visibility={ htmlVisibility[visibility.specification] }>

                    <PromptCheckboxGroup
                        name="specification"
                        value={ state.specification }
                        handleCheckboxChange={ handleModuleChange }
                        foreignKeys={ foreignKeys.use.specification } />

                    <PromptTextArea 
                        name="specification_note"
                        value={ state.light_exposure_note }
                        labelVisibility={ htmlVisibility.on }
                        handleTextAreaChange={ handleModuleChange } />
                </PromptTitle>

                <PromptTitle 
                    title={ constants.record }
                    visibility={ htmlVisibility[visibility.record] }>

                    <PromptCheckboxGroup
                        name="record"
                        value={ state.record }
                        handleCheckboxChange={ handleModuleChange }
                        foreignKeys={ foreignKeys.use.record } />

                    <PromptTextArea 
                        name="record_note"
                        value={ state.ambient_note }
                        labelVisibility={ htmlVisibility.on }
                        handleTextAreaChange={ handleModuleChange } />
                </PromptTitle>

                <PromptTitle 
                    title={ constants.operation }
                    visibility={ htmlVisibility[visibility.operation] }>

                    <PromptCheckboxGroup
                        name="operation"
                        value={ state.operation }
                        handleCheckboxChange={ handleModuleChange }
                        foreignKeys={ foreignKeys.use.operation } />

                    <PromptTextArea 
                        name="operation_note"
                        value={ state.weather_exposure_note }
                        labelVisibility={ htmlVisibility.on }
                        handleTextAreaChange={ handleModuleChange } />
                </PromptTitle>

                <PromptTitle 
                    title={ constants.operational_factor }
                    visibility={ htmlVisibility[visibility.operational_factor] }>

                    <PromptCheckboxGroup
                        name="operational_factor"
                        value={ state.operational_factor }
                        handleCheckboxChange={ handleModuleChange }
                        foreignKeys={ foreignKeys.use.operational_factor } />

                    <PromptTextArea 
                        name="operation_factor_note"
                        value={ state.storage_location_note }
                        labelVisibility={ htmlVisibility.on }
                        handleTextAreaChange={ handleModuleChange } />
                </PromptTitle>

                <PromptTitle 
                    title={ constants.functionality_loss }
                    visibility={ htmlVisibility[visibility.functionality_loss] }>

                    <PromptTextArea 
                        name="functionality_loss"
                        value={ state.functionality_loss }
                        labelVisibility={ htmlVisibility.on }
                        handleTextAreaChange={ handleModuleChange } />
                </PromptTitle>

                <PromptTitle 
                    title={ constants.problem_statement }
                    visibility={ htmlVisibility[visibility.problem_statement] }>

                    <PromptTextArea 
                        name="problem_statement"
                        value={ state.problem_statement }
                        labelVisibility={ htmlVisibility.on }
                        handleTextAreaChange={ handleModuleChange } />
                </PromptTitle>

                <PromptTitle 
                    title={ constants.failure_time } 
                    visibility={ htmlVisibility[visibility.failure_time] }>

                    <PromptTextArea 
                        name="failure_time"
                        value={ state.failure_time }
                        labelVisibility={ htmlVisibility.on }
                        handleTextAreaChange={ handleModuleChange } />
                </PromptTitle>

                <PromptTitle 
                    title={ constants.failure_operation_stage }
                    visibility={ htmlVisibility[visibility.failure_operation_stage] }>

                    <PromptTextArea 
                        name="failure_operation_stage"
                        value={ state.failure_operation_stage }
                        labelVisibility={ htmlVisibility.on }
                        handleTextAreaChange={ handleModuleChange } />
                </PromptTitle>

                <PromptTitle 
                    title={ constants.operator }
                    visibility={ htmlVisibility[visibility.operator] }>

                    <PromptTextArea 
                        name="operator"
                        value={ state.operator }
                        labelVisibility={ htmlVisibility.on }
                        handleTextAreaChange={ handleModuleChange } />
                </PromptTitle>

                <PromptAdditionalPrompts
                    name="use"
                    value={ state.additionalPromptText }
                    prompts={ additionalPrompts } 
                    handleChange={ handleModuleChange } />

            </div>
        )
    }

};
