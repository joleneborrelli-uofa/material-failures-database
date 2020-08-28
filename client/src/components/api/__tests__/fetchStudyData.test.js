import axios          from 'axios';
import fetchStudyData from '../fetchStudyData.api.js';

jest.mock( 'axios' );

it( 'fetches the study data for an object from the API', async () => 
{
    const studyData = 
    {
        data : 
        {
            object :
            {
                feature : ['hole']
            }
        }
    };

    const params =
    { 
        params : 
        { 
            id : '5' ,
            visibleTables : ['object_feature']
        } 
    };

    axios.get.mockResolvedValue( studyData );

    await expect( fetchStudyData( '5', ['object_feature'] ) ).resolves.toEqual( studyData.data );

    expect( axios.get ).toHaveBeenCalledWith( '/api/study', params );
} );

it( 'catches errors while fetching data from API', async () => 
{ 
    const error =
    {
        response :
        {
            data : 'I am the error'
        }
    };

    axios.get.mockImplementationOnce( () => Promise.reject( error ) );
 
    await expect( fetchStudyData() ).rejects.toEqual( new Error( `fetchStudyData ${ error.response.data }` ) );
} );