import axios           from 'axios';
import fetchRecordData from '../fetchRecordData.api.js';

jest.mock( 'axios' );

it( 'fetches the record data for an object from the API', async () => 
{
    const recordData = 
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
            id : '2' 
        } 
    };

    axios.get.mockResolvedValue( recordData );

    await expect( fetchRecordData( '2' ) ).resolves.toEqual( recordData.data );

    expect( axios.get ).toHaveBeenCalledWith( '/api/record', params );
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
 
    await expect( fetchRecordData() ).rejects.toEqual( new Error( `fetchRecordData ${ error.response.data }` ) );
} );