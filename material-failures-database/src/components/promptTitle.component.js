import React                  from 'react';
import { caseStudyHtmlClass } from '../constants/htmlClass.constants.js';

export default class PromptTitle extends React.Component
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
        
        const htmlClass  = caseStudyHtmlClass.fieldPrompts;
        const labelClass = `${ htmlClass.module } ${ visibility }`;

        return (
            <div className={ labelClass }>
                <p className={ htmlClass.title }>
                    { title }
                </p>
                { children }
            </div>
        );
    }
};