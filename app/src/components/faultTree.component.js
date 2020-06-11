import React               from 'react';
import { headers }         from '../constants/webDisplay.constants.js';
import { recordHtmlClass } from '../constants/htmlClass.constants.js';
import { domain }          from '../constants/path.constants.js';

export default function FaultTree ( props )
{
    const { path } = props;

    return (
        <div className={ recordHtmlClass.faultTree.wrapper }>
        
            <div className={ recordHtmlClass.faultTree.header }>
                { headers.faultTree }
            </div>

            <img 
			    alt=""
			    className={ recordHtmlClass.faultTree.img }
			    src={ domain + path } /> 
        </div>
    );
};

