import { groupedComponents }  from '../constants/groupedComponents.constants.js';
import { caseStudy }          from '../constants/caseStudy.constants.js';
import { caseStudyHtmlClass } from '../constants/htmlClass.constants.js';
import { foreignKeys }        from '../constants/foreignKey.constants.js';
import PromptTextArea         from './promptTextArea.components.js'; 
import PromptTitle            from './promptTitle.components.js'; 
import PromptRadioGroup       from './promptRadioGroup.components.js';

class ProcessingCaseStudyModule extends React.component
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
            handleProcessingModuleChange
        } = this.props;

        const constants = caseStudy.fieldPrompts.processing;
        const htmlClass = caseStudyHtmlClass.fieldPrompts;

        return (
            `<div className="${ htmlClass.processing }">

                <PromptTitle 
                    title="${ constants.treatment }" 
                    visibility={ visibility.treatment }>

                    <PromptPairedRadioGroupList
                        key="treatment"
                        pairedRadioGroup={ state.treatment }
                        pairedData={ groupedComponents.treatment }
                        handleChange={ handleProcessingModuleChange } />

                    <PromptTextArea 
                        name="treatment_note"
                        value={ state.treatment_note }
                        labelVisibility="${ htmlClass.visibility.on }"
                        handleChange={ handleProcessingModuleChange } />
                </PromptTitle>

                <PromptTitle 
                    title="${ constants.shaping }" 
                    visibility={ visibility.shaping }>

                    <PromptPairedRadioGroupList
                        key="shaping"
                        pairedRadioGroup={ state.shaping }
                        pairedData={ groupedComponents.shaping } 
                        handleChange={ handleProcessingModuleChange } />

                    <PromptTextArea 
                        name="shaping_note"
                        value={ state.shaping_note }
                        labelVisibility="${ htmlClass.visibility.on }"
                        handleChange={ handleProcessingModuleChange } />
                </PromptTitle>

                <PromptTitle 
                    title="${ constants.residual_stress }" 
                    visibility={ visibility.residualStress }>

                    <PromptPairedRadioGroupList
                        key="residual_stress"
                        pairedRadioGroup={ state.residual_stress }
                        pairedData={ groupedComponents.treatment } 
                        handleChange={ handleProcessingModuleChange } />

                    <PromptTextArea 
                        name="residual_stress_note"
                        value={ state.residual_stress_note }
                        labelVisibility="${ htmlClass.visibility.on }"
                        handleChange={ handleProcessingModuleChange } />
                </PromptTitle>

                <PromptTitle 
                    title="${ constants.machining }" 
                    visibility={ visibility.machining }>

                    <PromptCheckboxGroup
                        name="machining"
                        value={ state.machining }
                        handleChange={ handleProcessingModuleChange }
                        foreignKeys={ foreignKeys.processing.machining } />

                    <PromptTextArea 
                        name="machining_note"
                        value={ state.machining_note }
                        labelVisibility="${ htmlClass.visibility.on }"
                        handleChange={ handleProcessingModuleChange } />
                </PromptTitle>

                <PromptTitle 
                    title="${ constants.joining }" 
                    visibility={ visibility.joining }>

                    <PromptCheckboxGroup
                        name="joining"
                        value={ state.joining }
                        handleChange={ handleProcessingModuleChange }
                        foreignKeys={ foreignKeys.processing.joining } />

                    <PromptTextArea 
                        name="joining_note"
                        value={ state.joining_note }
                        labelVisibility="${ htmlClass.visibility.on }"
                        handleChange={ handleProcessingModuleChange } />
                </PromptTitle>

                <PromptTitle  
                    title="${ constants.manufacturer }" 
                    visibility={ visibility.manufacturer }>

                    <PromptTextArea 
                        name="manufacturer"
                        value={ state.manufacturer }
                        labelVisibility="${ htmlClass.visibility.off }"
                        handleChange={ handleProcessingModuleChange } />
                </PromptTitle>

                <PromptTitle  
                    title="${ constants.date }" 
                    visibility={ visibility.date }>

                    <PromptTextArea 
                        name="date"
                        value={ state.date }
                        labelVisibility="${ htmlClass.visibility.off }"
                        handleChange={ handleProcessingModuleChange } />
                </PromptTitle>

                <PromptTitle  
                    title="${ constants.location }" 
                    visibility={ visibility.location }>

                    <PromptTextArea 
                        name="location"
                        value={ state.location }
                        labelVisibility="${ htmlClass.visibility.off }"
                        handleChange={ handleProcessingModuleChange } />
                </PromptTitle>

                <PromptTitle  
                    title="${ constants.plant }" 
                    visibility={ visibility.plant }>

                    <PromptTextArea 
                        name="plant"
                        value={ state.plant }
                        labelVisibility="${ htmlClass.visibility.off }"
                        handleChange={ handleProcessingModuleChange } />
                </PromptTitle>

            </div>`
        )
    }

};
