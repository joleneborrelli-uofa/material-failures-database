import React                from 'react';
import { domain }           from '../constants/database.constants.js';
import { genericHtmlClass } from '../constants/htmlClass.constants.js';

export default class Viewer extends React.Component
{
    constructor( props )
    {
        super( props );
    }

    render()
    {
        const 
        { 
            path,
            children 
        } = this.props;

        const uri = domain + path;

    return (
            <div 
                className="uv" 
                data-config=""
                data-uri={ uri }>
                { children }
            </div>
        )
    }
};
