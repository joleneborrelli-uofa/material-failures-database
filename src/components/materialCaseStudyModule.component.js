import React                      from 'react';
import { groupedComponents }      from '../constants/groupedComponent.constants.js';
import { caseStudy }              from '../constants/caseStudy.constants.js';
import { caseStudyHtmlClass }     from '../constants/htmlClass.constants.js';
import { foreignKeys }            from '../constants/foreignKey.constants.js';
import PromptTextArea             from './promptTextArea.component.js'; 
import PromptTitle                from './promptTitle.component.js'; 
import PromptRadioGroup           from './promptRadioGroup.component.js';
import PromptPairedRadioGroupList from './promptPairedRadioGroupList.component.js';
import PromptAdditionalPrompts    from './promptAdditionalPrompts.component.js';

export default class MaterialCaseStudyModule extends React.Component
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

        const constants      = caseStudy.fieldPrompts.material;
        const htmlClass      = caseStudyHtmlClass.fieldPrompts;
        const htmlVisibility = caseStudyHtmlClass.visibility;

        return (
            <div className={ htmlClass.material }>

                <PromptTitle 
                    title={ constants.name }
                    visibility={ htmlVisibility[visibility.name] }>

                    <PromptTextArea 
                        name="name"
                        value={ state.name }
                        labelVisibility={ htmlVisibility.off }
                        handleTextAreaChange={ handleModuleChange } />
                </PromptTitle>

                <PromptTitle 
                    title={ constants.class }
                    visibility={ htmlVisibility[visibility['class']] }>

                    <PromptPairedRadioGroupList
                        statekey="class"
                        buttonName="class_button"
                        pairedRadioGroup={ state['class'] }
                        pairedData={ groupedComponents['class'] }
                        handleChange={ handleModuleChange } />

                    <PromptTextArea 
                        name="class_note"
                        value={ state.class_note }
                        labelVisibility={ htmlVisibility.on }
                        handleTextAreaChange={ handleModuleChange } />
                </PromptTitle>

                <PromptTitle  
                    title={ constants.crystallinity }
                    visibility={ htmlVisibility[visibility.crystallinity] }>

                    <PromptRadioGroup
                        name="crystallinity"
                        value={ state.crystallinity }
                        foreignKeys={ foreignKeys.material.crystallinity }
                        handleRadioGroupChange={ handleModuleChange } />

                    <PromptTextArea 
                        name="crystallinity_note"
                        value={ state.crystallinity_note }
                        labelVisibility={ htmlVisibility.off }
                        handleTextAreaChange={ handleModuleChange } />
                </PromptTitle>

                <PromptTitle  
                    title={ constants.alloy_designation }
                    visibility={ htmlVisibility[visibility.alloy_designation] }>

                    <PromptTextArea 
                        name="alloy_designation"
                        value={ state.alloy_designation }
                        labelVisibility={ htmlVisibility.off }
                        handleTextAreaChange={ handleModuleChange } />
                </PromptTitle>

                <PromptTitle  
                    title={ constants.grade } 
                    visibility={ htmlVisibility[visibility.grade] }>

                    <PromptTextArea 
                        name="grade"
                        value={ state.grade }
                        labelVisibility={ htmlVisibility.off }
                        handleTextAreaChange={ handleModuleChange } />
                </PromptTitle>

                <PromptTitle  
                    title={ constants.recyclability }
                    visibility={ htmlVisibility[visibility.recyclability] }>

                    <PromptTextArea 
                        name="recyclability"
                        value={ state.recyclability }
                        labelVisibility={ htmlVisibility.off }
                        handleTextAreaChange={ handleModuleChange } />
                </PromptTitle>

                <PromptTitle  
                    title={ constants.biodegradability }
                    visibility={ htmlVisibility[visibility.biodegradability] }>

                    <PromptTextArea 
                        name="biodegradability"
                        value={ state.biodegradability }
                        labelVisibility={ htmlVisibility.off }
                        handleTextAreaChange={ handleModuleChange } />
                </PromptTitle>

                <PromptTitle  
                    title={ constants.toxicity }
                    visibility={ htmlVisibility[visibility.toxicity] }>

                    <PromptTextArea 
                        name="toxicity"
                        value={ state.toxicity }
                        labelVisibility={ htmlVisibility.off }
                        handleTextAreaChange={ handleModuleChange } />
                </PromptTitle>

                <PromptAdditionalPrompts
                    name="material"
                    value={ state.additionalPromptText }
                    prompts={ additionalPrompts } 
                    handleChange={ handleModuleChange }/>

            </div>
        )
    }

};
