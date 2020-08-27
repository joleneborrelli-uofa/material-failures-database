import axios             from 'axios';
import fetchDisplayItems from '../fetchDisplayItems.api.js';

jest.mock( 'axios' );

it( 'fetches the display data for every object from API', async () => 
{
    const displayItems = 
    {
        data :
        [
            {
                object_id  : 1,
                case_study : 'on',
                record     : 'off',
                path       : '...'
            }
        ]
    }

    axios.get.mockResolvedValue( displayItems );

    await expect( fetchDisplayItems() ).resolves.toEqual( displayItems.data );

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
 
    await expect( fetchDisplayItems() ).rejects.toEqual( new Error( `fetchDisplayItems ${ error.response.data }` ) );
} );