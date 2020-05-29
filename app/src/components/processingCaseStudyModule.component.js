import React                      from 'react';
import { groupedComponents }      from '../constants/groupedComponent.constants.js';
import { caseStudy }              from '../constants/caseStudy.constants.js';
import { caseStudyHtmlClass }     from '../constants/htmlClass.constants.js';
import { foreignKeys }            from '../constants/foreignKey.constants.js';
import { headers }                from '../constants/webDisplay.constants.js';
import PromptTextArea             from './promptTextArea.component.js'; 
import PromptTitle                from './promptTitle.component.js'; 
import PromptRadioGroup           from './promptRadioGroup.component.js';
import PromptCheckboxGroup        from './promptCheckboxGroup.component.js';
import PromptPairedRadioGroupList from './promptPairedRadioGroupList.component.js';
import PromptAdditionalPrompts    from './promptAdditionalPrompts.component.js';

export default function ProcessingCaseStudyModule ( props )
{
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
                    statekey="treatment"
                    buttonName="treatment_button"
                    pairedRadioGroup={ state.treatment }
                    pairedData={ groupedComponents.treatment }
                    handleChange={ handleModuleChange } />

                <PromptTextArea 
                    name="treatment_note"
                    value={ state.treatment_note }
                    labelVisibility={ htmlVisibility.on }
                    handleTextAreaChange={ handleModuleChange } />
            </PromptTitle>

            <PromptTitle 
                title={ constants.shaping }
                visibility={ htmlVisibility[visibility.shaping] }>

                <PromptPairedRadioGroupList
                    statekey="shaping"
                    buttonName="shaping_button"
                    pairedRadioGroup={ state.shaping }
                    pairedData={ groupedComponents.shaping } 
                    handleChange={ handleModuleChange } />

                <PromptTextArea 
                    name="shaping_note"
                    value={ state.shaping_note }
                    labelVisibility={ htmlVisibility.on }
                    handleTextAreaChange={ handleModuleChange } />
            </PromptTitle>

            <PromptTitle 
                title={ constants.residual_stress }
                visibility={ htmlVisibility[visibility.residualStress] }>

                <PromptPairedRadioGroupList
                    statekey="residual_stress"
                    buttonName="residual_stress_button"
                    pairedRadioGroup={ state.residual_stress }
                    pairedData={ groupedComponents.residual_stress } 
                    handleChange={ handleModuleChange } />

                <PromptTextArea 
                    name="residual_stress_note"
                    value={ state.residual_stress_note }
                    labelVisibility={ htmlVisibility.on }
                    handleTextAreaChange={ handleModuleChange } />
            </PromptTitle>

            <PromptTitle 
                title={ constants.machining }
                visibility={ htmlVisibility[visibility.machining] }>

                <PromptCheckboxGroup
                    name="machining"
                    value={ state.machining }
                    handleCheckboxChange={ handleModuleChange }
                    foreignKeys={ foreignKeys.processing.machining } />

                <PromptTextArea 
                    name="machining_note"
                    value={ state.machining_note }
                    labelVisibility={ htmlVisibility.on }
                    handleTextAreaChange={ handleModuleChange } />
            </PromptTitle>

            <PromptTitle 
                title={ constants.joining }
                visibility={ htmlVisibility[visibility.joining] }>

                <PromptCheckboxGroup
                    name="joining"
                    value={ state.joining }
                    handleCheckboxChange={ handleModuleChange }
                    foreignKeys={ foreignKeys.processing.joining } />

                <PromptTextArea 
                    name="joining_note"
                    value={ state.joining_note }
                    labelVisibility={ htmlVisibility.on }
                    handleTextAreaChange={ handleModuleChange } />
            </PromptTitle>

            <PromptTitle  
                title={ constants.manufacturer }
                visibility={ htmlVisibility[visibility.manufacturer] }>

                <PromptTextArea 
                    name="manufacturer"
                    value={ state.manufacturer }
                    labelVisibility={ htmlVisibility.off }
                    handleTextAreaChange={ handleModuleChange } />
            </PromptTitle>

            <PromptTitle  
                title={ constants.date }
                visibility={ htmlVisibility[visibility.date] }>

                <PromptTextArea 
                    name="date"
                    value={ state.date }
                    labelVisibility={ htmlVisibility.off }
                    handleTextAreaChange={ handleModuleChange } />
            </PromptTitle>

            <PromptTitle  
                title={ constants.location }
                visibility={ htmlVisibility[visibility.location] }>

                <PromptTextArea 
                    name="location"
                    value={ state.location }
                    labelVisibility={ htmlVisibility.off }
                    handleTextAreaChange={ handleModuleChange } />
            </PromptTitle>

            <PromptTitle  
                title={ constants.plant }
                visibility={ htmlVisibility[visibility.plant] }>

                <PromptTextArea 
                    name="plant"
                    value={ state.plant }
                    labelVisibility={ htmlVisibility.off }
                    handleTextAreaChange={ handleModuleChange } />
            </PromptTitle>

            <PromptAdditionalPrompts
                name="processing"
                value={ state.additionalPromptText }
                prompts={ additionalPrompts } 
                handleChange={ handleModuleChange }/>

        </div>
    )

};
