import React                               from 'react';
import { caseStudyHtmlClass as htmlClass } from '../constants/htmlClass.constants.js';

export default class ReferenceList extends React.Component
{
    constructor( props )
    {
        super( props );
    }

    render()
    {
        const { list } = this.props;

        const references = list.map( ( reference, index ) =>
        {
            return (
                    <p 
                    key={ index }
                    className={ htmlClass.reference }>
                        { reference }
                    </p>
            )
        } );

        return (
            <div className={ htmlClass.referenceList }>
                { references }
            </div>
        );
    }
};