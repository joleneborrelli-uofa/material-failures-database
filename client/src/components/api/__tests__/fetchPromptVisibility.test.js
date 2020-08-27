import axios                 from 'axios';
import fetchPromptVisibility from '../fetchPromptVisibility.api.js';

jest.mock( 'axios' );

it( 'fetches the prompt visibility data for an object from the API', async () => 
{
    const promptVisibility = 
    {
        data : 
        {
            object :
            {
                feature : 'off'
            }
        }
    };

    const params =
    { 
        params : 
        { 
            id : '1' 
        } 
    };

    axios.get.mockResolvedValue( promptVisibility );

    await expect( fetchPromptVisibility( '1' ) ).resolves.toEqual( promptVisibility.data );

    expect( axios.get ).toHaveBeenCalledWith( '/api/visibility/prompt', params );
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
 
    await expect( fetchPromptVisibility() ).rejects.toEqual( new Error( `fetchPromptVisibility ${ error.response.data }` ) );
} );