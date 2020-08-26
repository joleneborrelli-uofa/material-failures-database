import axios from 'axios';

/**
 * Fetches the tables used as data for the
 * record in the background evidence page
 * of the case study mode
 *
 * @param  { Integer } id
 * @param  { Array } visibleTables
 * @return { Object Literal } 
 */
const fetchStudyData = async ( id, visibleTables ) =>
{
    return axios 
            .get( '/api/study',
            { 
                params: { id, visibleTables } 
            } ) 
            .then( res => res.data )
            .catch( err => 
            {
                console.error( `Error getting case study fields: ${ err }` ) 
            } )
}

export default fetchStudyData;