import { caseStudy }          from '../constants/caseStudy.constants.js';
import { caseStudyHtmlClass } from '../constants/htmlClass.constants.js'; 
import PromptRadioGroup       from './promptRadioGroup.component.js';

class PromptPairedRadioGroupList extends React.component
{
    constructor( props )
    {
        super( props );
    }

    render()
    {
        const 
        {
            key,
            pairedData,
            pairedRadioGroup,
            handleChange
        } = this.props;

        const htmlClass   = caseStudyHtmlClass.fieldPrompts;
        const radioGroups = pairedRadioGroup.forEach( group, index )
        {
            return ( 
                <div>
                    <PromptRadioGroup
                        index={ index }
                        key={ key }
                        name={ pairedData[0].name }
                        value={ group[pairedData[0].name] }
                        foreignKeys={ pairedData[0].foreignKeys }
                        handleChange={ handleChange } />
                    <PromptRadioGroup
                        index={ index }
                        key={ key }
                        name={ pairedData[1].name }
                        value={ group[pairedData[1].name] }
                        foreignKeys={ pairedData[1].foreignKeys }
                        handleChange={ handleChange } />
                </div>
            ) 
        };

        return (
            `<div className="${ htmlClass.pairedRadioGroup }">
                { radioGroups }
                <button 
                    name={ key }
                    handleChange={ handleChange }>
                ${ caseStudy.button }
                </button>
            </div>`
        );
    }

};
