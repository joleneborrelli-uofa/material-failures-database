import React                from 'react';
import { genericHtmlClass } from '../constants/htmlClass.constants.js';

export default class ViewerComponent extends React.Component
{
    constructor( props )
    {
        super( props );
    }

    render()
    {
        const 
        { 
            manifest,
            children 
        } = this.props;

    return (
            <div 
                className="uv" 
                data-config=""
                data-uri={ manifest }>
                { children }
            </div>
        )
    }
};
