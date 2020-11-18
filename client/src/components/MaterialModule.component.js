import React                  from 'react';
import { pairedComponents }   from '../constants/pairedComponent.constants.js';
import { caseStudyHtmlClass, genericHtmlClass } from '../constants/htmlClass.constants.js';
import { foreignKeys }        from '../constants/foreignKey.constants.js';
import { headers }            from '../constants/webDisplay.constants.js';
import TextArea               from './TextArea.component.js'; 
import Title                  from './Title.component.js'; 
import RadioGroup             from './RadioGroup.component.js';
import PairedRadioGroupList   from './PairedRadioGroupList.component.js';
import AdditionalPrompt       from './AdditionalPrompt.component.js';

export default function MaterialModule ( props )
{
    // Props
    const 
    {
        visibility,
        prompt,
        additionalPrompt
    } = props;

    const htmlClass      = caseStudyHtmlClass.prompt;
    const htmlVisibility = genericHtmlClass.visibility;

    return (
        <div className={ htmlClass.material }>

            <div className={ htmlClass.header }>
                { headers.material }
            </div>

            <Title 
                title={ prompt.full_name }
                visibility={ htmlVisibility[visibility.full_name] }>

                <TextArea 
                    name="full_name"
                    labelVisibility={ htmlVisibility.off } />
            </Title>

            <Title 
                title={ prompt['class'] }
                visibility={ htmlVisibility[visibility['class']] }>

                <PairedRadioGroupList
                    pairedData={ pairedComponents['class'] } />

                <TextArea 
                    name="class_note"
                    labelVisibility={ htmlVisibility.on } />
            </Title>

            <Title  
                title={ prompt.crystallinity }
                visibility={ htmlVisibility[visibility.crystallinity] }>

                <RadioGroup
                    name="crystallinity"
                    foreignKeys={ foreignKeys.material.crystallinity } />

                <TextArea 
                    name="crystallinity_note"
                    labelVisibility={ htmlVisibility.on } />
            </Title>

            <Title  
                title={ prompt.alloy_designation }
                visibility={ htmlVisibility[visibility.alloy_designation] }>

                <TextArea 
                    name="alloy_designation"
                    labelVisibility={ htmlVisibility.off } />
            </Title>

            <Title  
                title={ prompt.grade } 
                visibility={ htmlVisibility[visibility.grade] }>

                <TextArea 
                    name="grade"
                    labelVisibility={ htmlVisibility.off } />
            </Title>

            <Title  
                title={ prompt.recyclability }
                visibility={ htmlVisibility[visibility.recyclability] }>

                <TextArea 
                    name="recyclability"
                    labelVisibility={ htmlVisibility.off } />
            </Title>

            <Title  
                title={ prompt.biodegradability }
                visibility={ htmlVisibility[visibility.biodegradability] }>

                <TextArea 
                    name="biodegradability"
                    labelVisibility={ htmlVisibility.off } />
            </Title>

            <Title  
                title={ prompt.toxicity }
                visibility={ htmlVisibility[visibility.toxicity] }>

                <TextArea 
                    name="toxicity"
                    labelVisibility={ htmlVisibility.off } />
            </Title>

            <AdditionalPrompt
                name="material_additional_prompt"
                additionalPrompt={ additionalPrompt } />

        </div>
    )

};
