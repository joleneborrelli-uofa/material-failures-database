import axios         from 'axios';
import sendLoginInfo from '../sendLoginInfo.api.js';

jest.mock( 'axios' );

it( 'sends the settings data for an object from the API', async () => 
{
    const loginData =
    {
        message : 'Incorrect username and/or password'
    };

    const params =
    {  
        username : 'betty',
        password : 'boop!1965'
    };

    axios.post.mockResolvedValue( loginData );

    await expect( sendLoginInfo( 'betty', 'boop!1965' ) ).resolves.toEqual( loginData.data );

    expect( axios.post ).toHaveBeenCalledWith( '/api/login', params );
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
 
    await expect( sendLoginInfo() ).rejects.toEqual( new Error( `sendLoginInfo ${ error.response.data }` ) );
} );