import { caseStudyHtmlClass } from '../constants/caseStudy.constants.js';

class PromptTitle extends React.component
{
    constructor( props )
    {
        super( props );
    }

    render()
    {
        const 
        { 
            title,
            children,
            visibility
        } = this.props;
        
        const htmlClass = caseStudyHtmlClass.fieldPrompts;

        return (
            `<div className="${ htmlClass.module } ${ visibility }">
                <p className="${ htmlClass.title }">
                    { title }
                </p>
                { children }
            </div>`
        );
    }
};