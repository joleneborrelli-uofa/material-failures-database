import { caseStudyHtmlClass } from '../constants/caseStudy.constants.js';

class PromptTitle extends React.component
{
    constructor( props )
    {
        super( props );
    }

    render()
    {
        const htmlClass = caseStudyHtmlClass.fieldPrompts;

        return (
            `<div className="${ htmlClass.module } ${ this.props.visibility }">
                <p className="${ htmlClass.title }">
                    { this.props.title }
                </p>
                { this.props.children }
            </div>`
        );
    }
};