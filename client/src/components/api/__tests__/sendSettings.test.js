import axios        from 'axios';
import sendSettings from '../sendSettings.api.js';

jest.mock( 'axios' );

it( 'sends the settings data for an object from the API', async () => 
{
    const params =
    {  
        fieldString  : "rating = 'off'",
        objectString : "object_id = 1"
    };

    axios.post.mockResolvedValue( '' );

    await expect( sendSettings( '1', 'rating', 'off' ) ).resolves.toEqual( '' );

    expect( axios.post ).toHaveBeenCalledWith( '/api/settings', params );
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

    axios.post.mockImplementationOnce( () => Promise.reject( error ) );
 
    await expect( sendSettings() ).rejects.toEqual( new Error( `sendSettings ${ error.response.data }` ) );
} );