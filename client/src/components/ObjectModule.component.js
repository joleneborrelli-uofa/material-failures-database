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

            <Title  
                title={ constants.fracture_draw } 
                visibility={ htmlVisibility[visibility.fracture_draw] }>

                <TextArea 
                    name="fracture_draw_note"
                    labelVisibility={ htmlVisibility.on } />
            </Title>

            <Title  
                title={ constants.fracture_path } 
                visibility={ htmlVisibility[visibility.fracture_path] }>

                <CheckboxGroup
                    name="fracture_path"
                    foreignKeys={ foreignKeys.object.fracture_path } />

                <TextArea 
                    name="fracture_path_note"
                    labelVisibility={ htmlVisibility.on } />
            </Title>

            <Title  
                title={ constants.fracture_surface } 
                visibility={ htmlVisibility[visibility.fracture_surface] }>

                <CheckboxGroup
                    name="fracture_surface"
                    foreignKeys={ foreignKeys.object.fracture_surface } />

                <TextArea 
                    name="fracture_surface_note"
                    labelVisibility={ htmlVisibility.on } />
            </Title>

            <Title  
                title={ constants.fracture_mode } 
                visibility={ htmlVisibility[visibility.fracture_mode] }>

                <CheckboxGroup
                    name="fracture_mode"
                    foreignKeys={ foreignKeys.object.fracture_mode } />

                <TextArea 
                    name="fracture_mode_note"
                    labelVisibility={ htmlVisibility.on } />
            </Title>


            <Title  
                title={ constants.fracture_feature } 
                visibility={ htmlVisibility[visibility.fracture_feature] }>

                <CheckboxGroup
                    name="fracture_feature"
                    foreignKeys={ foreignKeys.object.fracture_feature } />

                <TextArea 
                    name="fracture_feature_note"
                    labelVisibility={ htmlVisibility.on } />
            </Title>

            <Title  
                title={ constants.fracture_loading } 
                visibility={ htmlVisibility[visibility.fracture_loading] }>

                <CheckboxGroup
                    name="fracture_loading"
                    foreignKeys={ foreignKeys.object.fracture_loading } />

                <TextArea 
                    name="fracture_loading_note"
                    labelVisibility={ htmlVisibility.on } />
            </Title>

            <AdditionalPrompt
                key={ createUniqueId() }
                name="object_additional_prompt"
                prompts={ additionalPrompts } />

        </div>
    )

};
