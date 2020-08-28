const httpMocks = require( 'node-mocks-http' );
const routes    = require( '../routes' );
const db        = require( '../db.js' );
const helpers   = require( '../helpers.js' );

jest.mock( '../db' );

// Mock data from db.update
const dataFromUpdate = [{ test : 'test' }];

// Arguments for db.update
const updateArg1 = `UPDATE display
                     SET rating = 'off'
                     WHERE object_id = 1`;

const updateArg2 = 'display';

// Request
const request = httpMocks.createRequest(
{
    method: 'POST',
    url: '/settings',
    body:
    {
        fieldString  : "rating = 'off'",
        objectString : "object_id = 1"
    }
} );

it( 'sends the correct response object on POST /settings', async () =>
{
    const response = httpMocks.createResponse();

    db.update.mockResolvedValue( dataFromUpdate );

    await routes.toggle( request, response );

    expect( response._getData() ).toEqual( '' );
    expect( db.update ).toHaveBeenLastCalledWith( updateArg1, updateArg2 );
    expect( db.update ).toHaveBeenCalledTimes( 1 );
} );

it( 'sends the correct response object on error at POST /settings', async () =>
{
    const response = httpMocks.createResponse();
    const errorMsg = "POST /api/settings error, Error: I am the error";

    db.update.mockRejectedValue( new Error( 'I am the error' ) );

    await routes.toggle( request, response );

    expect( response._getStatusCode() ).toEqual( 400 );
    expect( response._getData() ).toEqual( `"${ errorMsg }"` );
} );
