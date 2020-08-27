import axios                from 'axios';
import fetchFieldVisibility from '../fetchFieldVisibility.api.js';

jest.mock( 'axios' );

it( 'fetches the field visibility data for an object from the API', async () => 
{
    const fieldVisibility = 
    {
        data : ['rating', 'inscription', 'feature']
    };

    const params =
    { 
        params : 
        { 
            id : '1' 
        } 
    };

    axios.get.mockResolvedValue( fieldVisibility );

    await expect( fetchFieldVisibility( '1' ) ).resolves.toEqual( fieldVisibility.data );

    expect( axios.get ).toHaveBeenCalledWith( '/api/visibility/field', params );
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
 
    await expect( fetchFieldVisibility() ).rejects.toEqual( new Error( `fetchFieldVisibility ${ error.response.data }` ) );
} );