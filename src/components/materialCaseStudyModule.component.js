import { caseStudy }          from '../constants/caseStudy.constants.js';
import { caseStudyHtmlClass } from '../constants/htmlClass.constants.js';
import { foreignKeys }        from '../constants/foreignKey.constants.js';
import PromptTextArea         from './promptTextArea.components.js'; 
import PromptTitle            from './promptTitle.components.js'; 
import PromptRadioGroup       from './PromptRadioGroup.components.js';

class MaterialCaseStudyModule extends React.component
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
            handleMaterialModuleChange
        } = this.props;

        const constants = caseStudy.fieldPrompts.material;
        const htmlClass = caseStudyHtmlClass.fieldPrompts;

        return (
            `<div className="${ htmlClass.material }">

                <PromptTitle 
                    title="${ constants.name }" 
                    visibility={ visibility.name }>

                    <PromptTextArea 
                        name="name"
                        value={ state.name }
                        labelVisibility="${ htmlClass.visibility.off }"
                        handleChange={ handleMaterialModuleChange } />
                </PromptTitle>

                <PromptTitle 
                    title="${ constants.class }" 
                    visibility={ visibility['class'] }>

                    <PromptPairedRadioGroupList
                        key="class"
                        pairedRadioGroup={ state['class'] }
                        pairedData={ groupedComponents['class'] }
                        handleChange={ handleMaterialModuleChange } />

                    <PromptTextArea 
                        name="class_note"
                        value={ state.class_note }
                        labelVisibility="${ htmlClass.visibility.on }"
                        handleChange={ handleMaterialModuleChange } />
                </PromptTitle>

                <PromptTitle  
                    title="${ constants.crystallinity }" 
                    visibility={ visibility.crystallinity }>

                    <PromptTextArea 
                        name="crystallinity"
                        value={ state.crystallinity }
                        labelVisibility="${ htmlClass.visibility.off }"
                        handleChange={ handleMaterialModuleChange } />
                </PromptTitle>

                <PromptTitle  
                    title="${ constants.alloy_designation }" 
                    visibility={ visibility.alloy_designation }>

                    <PromptTextArea 
                        name="alloy_designation"
                        value={ state.alloy_designation }
                        labelVisibility="${ htmlClass.visibility.off }"
                        handleChange={ handleMaterialModuleChange } />
                </PromptTitle>

                <PromptTitle  
                    title="${ constants.grade }" 
                    visibility={ visibility.grade }>

                    <PromptTextArea 
                        name="grade"
                        value={ state.grade }
                        labelVisibility="${ htmlClass.visibility.off }"
                        handleChange={ handleMaterialModuleChange } />
                </PromptTitle>

                <PromptTitle  
                    title="${ constants.recyclability }" 
                    visibility={ visibility.recyclability }>

                    <PromptTextArea 
                        name="recyclability"
                        value={ state.recyclability }
                        labelVisibility="${ htmlClass.visibility.off }"
                        handleChange={ handleMaterialModuleChange } />
                </PromptTitle>

                <PromptTitle  
                    title="${ constants.biodegradability }" 
                    visibility={ visibility.biodegradability }>

                    <PromptTextArea 
                        name="biodegradability"
                        value={ state.biodegradability }
                        labelVisibility="${ htmlClass.visibility.off }"
                        handleChange={ handleMaterialModuleChange } />
                </PromptTitle>

                <PromptTitle  
                    title="${ constants.toxicity }" 
                    visibility={ visibility.toxicity }>

                    <PromptTextArea 
                        name="toxicity"
                        value={ state.toxicity }
                        labelVisibility="${ htmlClass.visibility.off }"
                        handleChange={ handleMaterialModuleChange } />
                </PromptTitle>

            </div>`
        )
    }

};
