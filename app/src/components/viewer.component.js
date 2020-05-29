import React      from 'react';
import { domain } from '../constants/path.constants.js';

export default function Viewer ( props )
{
    const 
    { 
        path,
        children 
    } = props;

    const uri = domain + path;

return (
        <div 
            className="uv" 
            data-config=""
            data-uri={ uri }>
            { children }
        </div>
    )
};
