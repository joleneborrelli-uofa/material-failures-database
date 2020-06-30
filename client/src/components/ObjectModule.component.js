import React                  from 'react';
import { caseStudy }          from '../constants/caseStudy.constants.js';
import { caseStudyHtmlClass } from '../constants/htmlClass.constants.js';
import { foreignKeys }        from '../constants/foreignKey.constants.js';
import { headers }            from '../constants/webDisplay.constants.js';
import { createUniqueId }     from '../helpers.js';
import TextArea               from './TextArea.component.js'; 
import Title                  from './Title.component.js'; 
import CheckboxGroup          from './CheckboxGroup.component.js';
import AdditionalPrompt       from './AdditionalPrompt.component.js';

export default function ObjectModule ( props )
{
    // Props
    const  
    {
        visibility,
        additionalPrompts
    } = props;

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

            <Title 
                title={ constants.rating }
                visibility={ htmlVisibility[visibility.rating] }>

                <TextArea 
                    name="rating"
                    labelVisibility={ htmlVisibility.off } />
            </Title>

            <Title  
                title={ constants.inscription } 
                visibility={ htmlVisibility[visibility.inscription] }>

                <TextArea 
                    name="inscription"
                    labelVisibility={ htmlVisibility.off } />
            </Title>

            <Title  
                title={ constants.serial_number }
                visibility={ htmlVisibility[visibility.serial_number] }>

                <TextArea 
                    name="serial_number"
                    labelVisibility={ htmlVisibility.off } />
            </Title>

            <Title  
                title={ constants.feature } 
                visibility={ htmlVisibility[visibility.feature] }>

                <CheckboxGroup
                    name="feature"
                    foreignKeys={ foreignKeys.object.feature } />

                <TextArea 
                    name="feature_note"
                    labelVisibility={ htmlVisibility.on } />
            </Title>

            <AdditionalPrompt
                key={ createUniqueId() }
                name="object_additional_prompt"
                prompts={ prompts } />

        </div>
    )

};
