import React, { useEffect, useState }    from 'react';
import { genericHtmlClass as htmlClass } from '../constants/htmlClass.constants.js';
import CaseStudyModule                   from './caseStudyModule.component.js';

export default function CaseStudyModuleAPI ( props )
{
    // Props
    const { id } = this.props;

    // State
    const [caseStudyModule, setCaseStudyModule] = useState( [] );
    const [loading, setLoading]                 = useState( 'on' );
    const [visibility, setVisibility]           = useState( {} );
    const [fields, setFields]					= useState( {} );

    useEffect( () =>
    {
        fetchCaseStudyModuleData();
    }, [] );

    // Methods
    const fetchPromptVisibility = async () =>
    {
        axios
            .get( 'http://localhost:4001/api/visibility/prompt' )
            .then( res => 
            {
                setVisibility( res.data );
            } )
            .catch( err => 
            {
                console.error( `Error getting prompt visibility: ${ err }` ) 
            } )    	
    }

    const fetchFields = async () =>
    {
        axios
            .get( 'http://localhost:4001/api/visibility/field' )
            .then( res => 
            {
            	// make a call to get visible fields, plus additional
            	// prompts, references and manifests
            	setFields( res.data );
            } )
            .catch( err => 
            {
                console.error( `Error getting fields: ${ err }` ) 
            } )    	    	
    }

    const fetchCaseStudyModuleData = async () => 
    {
    	fetchPromptVisibility()
    	.then( () => 
    	{
    		fetchFields();
    	} )
    	.then( () =>
    	{
    		let caseStudyModule = <CaseStudyModule
    								visibility={ visibility }
    								fields={ fields } />

    		setCaseStudyModule( caseStudyModule );
    		setLoading( false );
    	} )
    }

    // Return
    const loadingClass = `${ htmlClass.visibility[loading] } ${ htmlClass.loading }`;

    return (
        <div>
            <p className={ loadingClass }>Loading. Please wait...</p>
                { caseStudyModule }
        </div>
    );

}