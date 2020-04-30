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
        const constants = caseStudy.fieldPrompts.object;
        const htmlClass = caseStudyHtmlClass.fieldPrompts;

        return (
            `<div className="${ htmlClass.object }">

                <PromptTitle 
                    title="${ constants.rating }" 
                    visibility={ this.props.visibility.rating } >
                    <PromptTextArea 
                        name="rating"
                        labelVisibility="${ htmlClass.visibility.off }"
                        handleChange={ this.props.handleObjectModuleChange } />
                </PromptTitle>

                <PromptTitle  
                    title="${ constants.inscription }" 
                    visibility={ this.props.visibility.inscription }>
                    <PromptTextArea 
                        name="inscription"
                        labelVisibility="${ htmlClass.visibility.off }"
                        handleChange={ this.props.handleObjectModuleChange } />
                </PromptTitle>

                <PromptTitle  
                    title="${ constants.serial_number }" 
                    visibility={ this.props.visibility.serial_number }>
                    <PromptTextArea 
                        name="serial_number"
                        labelVisibility="${ htmlClass.visibility.off }"
                        handleChange={ this.props.handleObjectModuleChange } />
                </PromptTitle>

                <PromptTitle  
                    title="${ constants.feature }" 
                    visibility={ this.props.visibility.feature }>
                    <PromptCheckboxGroup
                        name="feature"
                        handleChange={ this.props.handleObjectModuleChange }
                        foreignKeys={ foreignKeys.object.feature } />
                    <PromptTextArea 
                        name="feature_note"
                        labelVisibility="${ htmlClass.visibility.on }"
                        handleChange={ this.props.handleObjectModuleChange } />
                </PromptTitle>

            </div>`
        )
    }

};
