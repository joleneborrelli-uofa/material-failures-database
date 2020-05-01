import { treatment, shaping, residualStress } from '../constants/groupedComponents.constants.js';
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
        const constants = caseStudy.fieldPrompts.processing;
        const htmlClass = caseStudyHtmlClass.fieldPrompts;

        return (
            `<div className="${ htmlClass.processing }">

                <PromptTitle 
                    title="${ constants.treatment }" 
                    visibility={ this.props.visibility.treatment }>

                    <PromptPairedRadioGroupList
                        key="treatment"
                        button="treatment_button"
                        pairedRadioGroup={ this.props.treatment }
                        handleChange={ this.props.handleProcessingModuleChange }
                        firstRadioGroup={ treatment.firstRadioGroup }
                        secondRadioGroup={ treatment.secondRadioGroup } />

                    <PromptTextArea 
                        name="treatment_note"
                        value={ this.props.state.treatment_note }
                        labelVisibility="${ htmlClass.visibility.on }"
                        handleChange={ this.props.handleProcessingModuleChange } />
                </PromptTitle>

                <PromptTitle 
                    title="${ constants.shaping }" 
                    visibility={ this.props.visibility.shaping }>

                    <PromptPairedRadioGroupList
                        key="shaping"
                        button="shaping_button"
                        pairedRadioGroup={ this.props.shaping }
                        handleChange={ this.props.handleProcessingModuleChange }
                        firstRadioGroup={ shaping.firstRadioGroup }
                        secondRadioGroup={ shaping.secondRadioGroup } />

                    <PromptTextArea 
                        name="shaping_note"
                        value={ this.props.state.shaping_note }
                        labelVisibility="${ htmlClass.visibility.on }"
                        handleChange={ this.props.handleProcessingModuleChange } />
                </PromptTitle>

                <PromptTitle 
                    title="${ constants.residual_stress }" 
                    visibility={ this.props.visibility.residualStress }>

                    <PromptPairedRadioGroupList
                        key="residual_stress"
                        button="residual_stress_button"
                        pairedRadioGroup={ this.props.residual_stress }
                        handleChange={ this.props.handleProcessingModuleChange }
                        firstRadioGroup={ residual_stress.firstRadioGroup }
                        secondRadioGroup={ residual_stress.secondRadioGroup } />

                    <PromptTextArea 
                        name="residual_stress_note"
                        value={ this.props.state.residual_stress_note }
                        labelVisibility="${ htmlClass.visibility.on }"
                        handleChange={ this.props.handleProcessingModuleChange } />
                </PromptTitle>

                <PromptTitle 
                    title="${ constants.machining }" 
                    visibility={ this.props.visibility.machining }>

                    <PromptCheckboxGroup
                        name="machining"
                        value={ this.props.state.machining }
                        handleChange={ this.props.handleProcessingModuleChange }
                        foreignKeys={ foreignKeys.processing.machining } />

                    <PromptTextArea 
                        name="machining_note"
                        value={ this.props.state.machining_note }
                        labelVisibility="${ htmlClass.visibility.on }"
                        handleChange={ this.props.handleProcessingModuleChange } />
                </PromptTitle>

                <PromptTitle 
                    title="${ constants.joining }" 
                    visibility={ this.props.visibility.joining }>

                    <PromptCheckboxGroup
                        name="joining"
                        value={ this.props.state.joining }
                        handleChange={ this.props.handleProcessingModuleChange }
                        foreignKeys={ foreignKeys.processing.joining } />

                    <PromptTextArea 
                        name="joining_note"
                        value={ this.props.state.joining_note }
                        labelVisibility="${ htmlClass.visibility.on }"
                        handleChange={ this.props.handleProcessingModuleChange } />
                </PromptTitle>

                <PromptTitle  
                    title="${ constants.manufacturer }" 
                    visibility={ this.props.visibility.manufacturer }>

                    <PromptTextArea 
                        name="manufacturer"
                        value={ this.props.state.manufacturer }
                        labelVisibility="${ htmlClass.visibility.off }"
                        handleChange={ this.props.handleProcessingModuleChange } />
                </PromptTitle>

                <PromptTitle  
                    title="${ constants.date }" 
                    visibility={ this.props.visibility.date }>

                    <PromptTextArea 
                        name="date"
                        value={ this.props.state.date }
                        labelVisibility="${ htmlClass.visibility.off }"
                        handleChange={ this.props.handleProcessingModuleChange } />
                </PromptTitle>

                <PromptTitle  
                    title="${ constants.location }" 
                    visibility={ this.props.visibility.location }>

                    <PromptTextArea 
                        name="location"
                        value={ this.props.state.location }
                        labelVisibility="${ htmlClass.visibility.off }"
                        handleChange={ this.props.handleProcessingModuleChange } />
                </PromptTitle>

                <PromptTitle  
                    title="${ constants.plant }" 
                    visibility={ this.props.visibility.plant }>

                    <PromptTextArea 
                        name="plant"
                        value={ this.props.state.plant }
                        labelVisibility="${ htmlClass.visibility.off }"
                        handleChange={ this.props.handleProcessingModuleChange } />
                </PromptTitle>

            </div>`
        )
    }

};
