import React, { useEffect }              from 'react';
import Mirador                           from 'mirador';
import { createUniqueId }                from '../helpers.js';
import { genericHtmlClass as htmlClass } from '../constants/htmlClass.constants.js';
import { domain }                        from '../constants/path.constants.js';

export default function Viewer ( props )
{
    // Props
    const { path } = props;

    // Hooks
    useEffect( () =>
    {
        Mirador.viewer( config );
    }, [] );


    const viewerId = `mirador-${ createUniqueId() }`;
    const uri      = domain + path;
    const config   =
    {
        id      : viewerId,
        windows :
        [ {
            manifestId : uri
        } ],
        selectedTheme: 'dark',
        themes : 
        {
            dark: 
            {
                palette : 
                {
                    type : 'dark',
                    primary : 
                    {
                        main: '#000000',
                    },
                    secondary: 
                    {
                        main: '#000000',
                    },
                    shades: 
                    {
                        dark  : '#000000',
                        main  : '#000000',
                        light : '#000000',
                    }
                }
            }
        },
        window : 
        {
            allowClose         : false,
            allowWindowSideBar : false,
            panels : 
            { 
                canvas      : false,
                annotations : false,
                search      : false
            }
        },
        workspace : 
        {
            showZoomControls : true
        },
        workspaceControlPanel : 
        {
            enabled : false
        }
    };

    return ( <div id={ viewerId } className={ htmlClass.viewer } /> )
};
