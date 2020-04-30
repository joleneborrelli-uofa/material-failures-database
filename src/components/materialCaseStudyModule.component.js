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
        const constants = caseStudy.fieldPrompts.material;
        const htmlClass = caseStudyHtmlClass.fieldPrompts;

        return (
            `<div className="${ htmlClass.material }">

                <PromptTitle 
                    title="${ constants.name }" 
                    visibility={ this.props.visibility.name }>
                    <PromptTextArea 
                        name="name"
                        labelVisibility="${ htmlClass.visibility.off }"
                        handleChange={ this.handleGenericChange } />
                </PromptTitle>

                <PromptTitle  
                    title="${ constants.class }" 
                    visibility={ this.props.visibility['class'] }>
                    <PromptRadioGroup
                        name="class"
                        handleChange={ this.handleGenericChange } />
                    <PromptRadioGroup
                        name="class_subtype"
                        handleChange={ this.handleGenericChange } />
                    <PromptTextArea 
                        name="class_note"
                        labelVisibility="${ htmlClass.visibility.on }"
                        handleChange={ this.handleGenericChange } />
                </PromptTitle>

                <PromptTitle  
                    title="${ constants.crystallinity }" 
                    visibility={ this.props.visibility.crystallinity }>
                    <PromptTextArea 
                        name="crystallinity"
                        labelVisibility="${ htmlClass.visibility.off }"
                        handleChange={ this.handleGenericChange } />
                </PromptTitle>

                <PromptTitle  
                    title="${ constants.alloy_designation }" 
                    visibility={ this.props.visibility.alloy_designation }>
                    <PromptTextArea 
                        name="alloy_designation"
                        labelVisibility="${ htmlClass.visibility.off }"
                        handleChange={ this.handleGenericChange } />
                </PromptTitle>

                <PromptTitle  
                    title="${ constants.grade }" 
                    visibility={ this.props.visibility.grade }>
                    <PromptTextArea 
                        name="grade"
                        labelVisibility="${ htmlClass.visibility.off }"
                        handleChange={ this.handleGenericChange } />
                </PromptTitle>

                <PromptTitle  
                    title="${ constants.recyclability }" 
                    visibility={ this.props.visibility.recyclability }>
                    <PromptTextArea 
                        name="recyclability"
                        labelVisibility="${ htmlClass.visibility.off }"
                        handleChange={ this.handleGenericChange } />
                </PromptTitle>

                <PromptTitle  
                    title="${ constants.biodegradability }" 
                    visibility={ this.props.visibility.biodegradability }>
                    <PromptTextArea 
                        name="biodegradability"
                        labelVisibility="${ htmlClass.visibility.off }"
                        handleChange={ this.handleGenericChange } />
                </PromptTitle>

                <PromptTitle  
                    title="${ constants.toxicity }" 
                    visibility={ this.props.visibility.toxicity }>
                    <PromptTextArea 
                        name="toxicity"
                        labelVisibility="${ htmlClass.visibility.off }"
                        handleChange={ this.handleGenericChange } />
                </PromptTitle>

            </div>`
        )
    }

};
