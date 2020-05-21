import React                   from 'react';
import { caseStudy }           from '../constants/caseStudy.constants.js';
import { caseStudyHtmlClass }  from '../constants/htmlClass.constants.js';
import { foreignKeys }         from '../constants/foreignKey.constants.js';
import { headers }             from '../constants/webDisplay.constants.js';
import PromptTextArea          from './promptTextArea.component.js'; 
import PromptTitle             from './promptTitle.component.js'; 
import PromptCheckboxGroup     from './promptCheckboxGroup.component.js';
import PromptAdditionalPrompts from './promptAdditionalPrompts.component.js';

export default class ObjectCaseStudyModule extends React.Component
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
                        value={ state.rating }
                        labelVisibility={ htmlVisibility.off }
                        handleTextAreaChange={ handleModuleChange } />
                </PromptTitle>

                <PromptTitle  
                    title={ constants.inscription } 
                    visibility={ htmlVisibility[visibility.inscription] }>

                    <PromptTextArea 
                        name="inscription"
                        value={ state.inscription }
                        labelVisibility={ htmlVisibility.off }
                        handleTextAreaChange={ handleModuleChange } />
                </PromptTitle>

                <PromptTitle  
                    title={ constants.serial_number }
                    visibility={ htmlVisibility[visibility.serial_number] }>

                    <PromptTextArea 
                        name="serial_number"
                        value={ state.serial_number }
                        labelVisibility={ htmlVisibility.off }
                        handleTextAreaChange={ handleModuleChange } />
                </PromptTitle>

                <PromptTitle  
                    title={ constants.feature } 
                    visibility={ htmlVisibility[visibility.feature] }>

                    <PromptCheckboxGroup
                        name="feature"
                        value={ state.feature }
                        handleCheckboxChange={ handleModuleChange }
                        foreignKeys={ foreignKeys.object.feature } />

                    <PromptTextArea 
                        name="feature_note"
                        value={ state.feature_note }
                        labelVisibility={ htmlVisibility.on }
                        handleTextAreaChange={ handleModuleChange } />
                </PromptTitle>

                <PromptAdditionalPrompts
                    name="object"
                    value={ state.additionalPromptText }
                    prompts={ prompts } 
                    handleChange={ handleModuleChange }/>

            </div>
        )
    }

};
