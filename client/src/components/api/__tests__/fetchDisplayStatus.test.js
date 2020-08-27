import axios              from 'axios';
import fetchDisplayStatus from '../fetchDisplayStatus.api.js';

jest.mock( 'axios' );

it( 'fetches the display data for an object from the API', async () => 
{
    const displayStatus = 
    {
        data :
        [
            {
                object_id  : 1,
                case_study : 'on',
                record     : 'off',
                path       : '...'
            },
            {
                object_id  : 2,
                case_study : 'off',
                record     : 'off',
                path       : '...'
            }
        ]
    }

    axios.get.mockResolvedValue( displayStatus );

    await expect( fetchDisplayStatus( '1' ) ).resolves.toEqual( displayStatus.data[0] );

    expect( axios.get ).toHaveBeenCalledWith( '/api/display' );
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
 
    await expect( fetchDisplayStatus() ).rejects.toEqual( new Error( `fetchDisplayStatus ${ error.response.data }` ) );
} );