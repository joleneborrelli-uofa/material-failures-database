import React                  from 'react';
import { caseStudyHtmlClass } from '../constants/htmlClass.constants.js';

export default function Title ( props )
{
    const 
    { 
        title,
        children,
        visibility
    } = props;
    
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

};
