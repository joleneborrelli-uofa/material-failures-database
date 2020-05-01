import { groupedComponents }  from '../constants/groupedComponents.constants.js';
import { caseStudy }          from '../constants/caseStudy.constants.js';
import { caseStudyHtmlClass } from '../constants/htmlClass.constants.js';
import { foreignKeys }        from '../constants/foreignKey.constants.js';
import PromptTextArea         from './promptTextArea.components.js'; 
import PromptTitle            from './promptTitle.components.js'; 
import PromptCheckboxGroup    from './promptCheckboxGroup.components.js';

class UseCaseStudyModule extends React.component
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
            handleUseModuleChange
        } = this.props;

        const constants = caseStudy.fieldPrompts.use;
        const htmlClass = caseStudyHtmlClass.fieldPrompts;

        return (
            `<div className="${ htmlClass.use }">

                <PromptTitle 
                    title="${ constants.specification }" 
                    visibility={ visibility.specification }>

                    <PromptCheckboxGroup
                        name="specification"
                        value={ state.specification }
                        handleChange={ handleUseModuleChange }
                        foreignKeys={ foreignKeys.use.specification } />

                    <PromptTextArea 
                        name="specification_note"
                        value={ state.light_exposure_note }
                        labelVisibility="${ htmlClass.visibility.on }"
                        handleChange={ handleUseModuleChange } />
                </PromptTitle>

                <PromptTitle 
                    title="${ constants.record }" 
                    visibility={ visibility.record }>

                    <PromptCheckboxGroup
                        name="record"
                        value={ state.record }
                        handleChange={ handleUseModuleChange }
                        foreignKeys={ foreignKeys.use.record } />

                    <PromptTextArea 
                        name="record_note"
                        value={ state.ambient_note }
                        labelVisibility="${ htmlClass.visibility.on }"
                        handleChange={ handleUseModuleChange } />
                </PromptTitle>

                <PromptTitle 
                    title="${ constants.operation }" 
                    visibility={ visibility.operation }>

                    <PromptCheckboxGroup
                        name="operation"
                        value={ state.operation }
                        handleChange={ handleUseModuleChange }
                        foreignKeys={ foreignKeys.use.operation } />

                    <PromptTextArea 
                        name="operation_note"
                        value={ state.weather_exposure_note }
                        labelVisibility="${ htmlClass.visibility.on }"
                        handleChange={ handleUseModuleChange } />
                </PromptTitle>

                <PromptTitle 
                    title="${ constants.operational_factor }" 
                    visibility={ visibility.operational_factor }>

                    <PromptCheckboxGroup
                        name="operational_factor"
                        value={ state.operational_factor }
                        handleChange={ handleUseModuleChange }
                        foreignKeys={ foreignKeys.use.operational_factor } />

                    <PromptTextArea 
                        name="operation_factor_note"
                        value={ state.storage_location_note }
                        labelVisibility="${ htmlClass.visibility.on }"
                        handleChange={ handleUseModuleChange } />
                </PromptTitle>

                <PromptTitle 
                    title="${ constants.functionality_loss }" 
                    visibility={ visibility.functionality_loss }>

                    <PromptTextArea 
                        name="functionality_loss"
                        value={ state.functionality_loss }
                        labelVisibility="${ htmlClass.visibility.on }"
                        handleChange={ handleUseModuleChange } />
                </PromptTitle>

                <PromptTitle 
                    title="${ constants.problem_statement }" 
                    visibility={ visibility.problem_statement }>

                    <PromptTextArea 
                        name="problem_statement"
                        value={ state.problem_statement }
                        labelVisibility="${ htmlClass.visibility.on }"
                        handleChange={ handleUseModuleChange } />
                </PromptTitle>

                <PromptTitle 
                    title="${ constants.failure_time }" 
                    visibility={ visibility.failure_time }>

                    <PromptTextArea 
                        name="failure_time"
                        value={ state.failure_time }
                        labelVisibility="${ htmlClass.visibility.on }"
                        handleChange={ handleUseModuleChange } />
                </PromptTitle>

                <PromptTitle 
                    title="${ constants.failure_operation_stage }" 
                    visibility={ visibility.failure_operation_stage }>

                    <PromptTextArea 
                        name="failure_operation_stage"
                        value={ state.failure_operation_stage }
                        labelVisibility="${ htmlClass.visibility.on }"
                        handleChange={ handleUseModuleChange } />
                </PromptTitle>

                <PromptTitle 
                    title="${ constants.operator }" 
                    visibility={ visibility.operator }>

                    <PromptTextArea 
                        name="operator"
                        value={ state.operator }
                        labelVisibility="${ htmlClass.visibility.on }"
                        handleChange={ handleUseModuleChange } />
                </PromptTitle>

            </div>`
        )
    }

};
