import axios         from 'axios';
import fetchSettings from '../fetchSettings.api.js';

jest.mock( 'axios' );

it( 'fetches the settings data for every object from API', async () => 
{
    const displayItems = 
    {
        data :
        [
            {
                object_id  : 1,
                name       : 'Bob the Builder Plate',
                case_study : 'on',
                record     : 'off',
                path       : '...'
            }
        ]
    }

    axios.get.mockResolvedValue( displayItems );

    await expect( fetchSettings() ).resolves.toEqual( displayItems.data );

    expect( axios.get ).toHaveBeenCalledWith( '/api/settings' );
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
 
    await expect( fetchSettings() ).rejects.toEqual( new Error( `fetchSettings ${ error.response.data }` ) );
} );