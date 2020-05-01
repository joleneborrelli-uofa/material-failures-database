import { caseStudy }          from '../constants/caseStudy.constants.js';
import { caseStudyHtmlClass } from '../constants/htmlClass.constants.js';
import { foreignKeys }        from '../constants/foreignKey.constants.js';
import PromptTextArea         from './promptTextArea.components.js'; 
import PromptTitle            from './promptTitle.components.js'; 

class ObjectCaseStudyModule extends React.component
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
            handleObjectModuleChange
        } = this.props;

        const constants = caseStudy.fieldPrompts.object;
        const htmlClass = caseStudyHtmlClass.fieldPrompts;

        return (
            `<div className="${ htmlClass.object }">

                <PromptTitle 
                    title="${ constants.rating }" 
                    visibility={ visibility.rating }>

                    <PromptTextArea 
                        name="rating"
                        value={ state.rating }
                        labelVisibility="${ htmlClass.visibility.off }"
                        handleChange={ handleObjectModuleChange } />
                </PromptTitle>

                <PromptTitle  
                    title="${ constants.inscription }" 
                    visibility={ visibility.inscription }>

                    <PromptTextArea 
                        name="inscription"
                        value={ state.inscription }
                        labelVisibility="${ htmlClass.visibility.off }"
                        handleChange={ handleObjectModuleChange } />
                </PromptTitle>

                <PromptTitle  
                    title="${ constants.serial_number }" 
                    visibility={ visibility.serial_number }>

                    <PromptTextArea 
                        name="serial_number"
                        value={ state.serial_number }
                        labelVisibility="${ htmlClass.visibility.off }"
                        handleChange={ handleObjectModuleChange } />
                </PromptTitle>

                <PromptTitle  
                    title="${ constants.feature }" 
                    visibility={ visibility.feature }>

                    <PromptCheckboxGroup
                        name="feature"
                        value={ state.feature }
                        handleChange={ handleObjectModuleChange }
                        foreignKeys={ foreignKeys.object.feature } />

                    <PromptTextArea 
                        name="feature_note"
                        value={ state.feature_note }
                        labelVisibility="${ htmlClass.visibility.on }"
                        handleChange={ handleObjectModuleChange } />
                </PromptTitle>

            </div>`
        )
    }

};
