const httpMocks = require( 'node-mocks-http' );
const routes    = require( '../routes' );
const db        = require( '../db.js' );
const helpers   = require( '../helpers.js' );

jest.mock( '../db' );

// Response from API 
const responseData =
[ 
    'environment_geographic_location', 
    'use_problem_statement' 
];

// Mock data from db.get
const dataFromGet =
{    
    object_rating : 'off',
    environment_geographic_location : 'on', 
    use_problem_statement : 'on'
};

// Arguments for db.all
const getArg1 = `SELECT * 
            FROM field_visibility 
            WHERE object_id = 1`;

const getArg2 = 'field visibility';

// Request
const request = httpMocks.createRequest(
{
    method: 'GET',
    url: '/visibility/field',
    query: 
    {
        id : '1'
    }
} );

it( 'sends the correct response object on GET /visibility/field', async () =>
{
    const response = httpMocks.createResponse();

    db.get.mockResolvedValue( dataFromGet );

    await routes.visibility.field( request, response );

    expect( response._getJSONData() ).toEqual( responseData );
    expect( db.get ).toHaveBeenCalledWith( getArg1, getArg2 );
    expect( db.get ).toHaveBeenCalledTimes( 1 );
} );

it( 'sends the correct response object on error at GET /record', async () =>
{
    const response = httpMocks.createResponse();
    const errorMsg = "GET /api/visibility/field error, Error: I am the error";

    db.get.mockRejectedValue( new Error( 'I am the error' ) );

    await routes.visibility.field( request, response );

    expect( response._getStatusCode() ).toEqual( 400 );
    expect( response._getData() ).toEqual( `"${ errorMsg }"` );
} );
