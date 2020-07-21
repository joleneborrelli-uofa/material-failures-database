import React               from 'react';
import { conclusion }      from '../constants/webDisplay.constants.js';
import { recordHtmlClass } from '../constants/htmlClass.constants.js';

export default function Conclusion ( props )
{
    const { sections } = props;

    const
    {
        history             = '',
        inspection_analysis = '',
        failure_diagnosis   = ''
    } = sections;

    return (
        <div className={ recordHtmlClass.conclusion.wrapper }>
            <div className={ recordHtmlClass.conclusion.header }>
                { conclusion.header }
            </div>

            <div className={ recordHtmlClass.conclusion.section }>
                <div className={ recordHtmlClass.conclusion.subheader }>
                    { conclusion.history }
                </div>
                <div className={ recordHtmlClass.conclusion.text }>
                    { history }
                </div>
            </div>


            <div className={ recordHtmlClass.conclusion.section }>
                <div className={ recordHtmlClass.conclusion.subheader }>
                    { conclusion.inspection_analysis }
                </div>
                <div className={ recordHtmlClass.conclusion.text }>
                    { inspection_analysis }
                </div>
            </div>

            <div className={ recordHtmlClass.conclusion.section }>
                <div className={ recordHtmlClass.conclusion.subheader }>
                    { conclusion.failure_diagnosis }
                </div>
                <div className={ recordHtmlClass.conclusion.text }>
                    { failure_diagnosis }
                </div>
            </div>

        </div>
    );
};