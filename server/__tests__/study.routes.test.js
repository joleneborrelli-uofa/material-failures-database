const httpMocks = require( 'node-mocks-http' );
const routes    = require( '../routes' );
const db        = require( '../db.js' );
const helpers   = require( '../helpers.js' );
const constants = require( '../constants.js' );

jest.mock( '../db' );

// Response from API 
const responseData =
{ 
    object:
    { 
        additional_prompt: [ 'test' ],
        overwrite_prompt: [ 'test' ],
        object_id: '1',
        name: 'Bob the Builder' 
    },
    material:
    { 
        additional_prompt: [ 'test' ], 
        overwrite_prompt: [ 'test' ] 
    },
    processing:
    { 
        additional_prompt: [ 'test' ], 
        overwrite_prompt: [ 'test' ] 
    },
    environment:
    { 
        geographic_location: [ 'test' ],
        additional_prompt: [ 'test' ], 
        overwrite_prompt: [ 'test' ] 
    },
    use:
    { 
        problem_statement: [ 'test' ],
        additional_prompt: [ 'test' ], 
        overwrite_prompt: [ 'test' ] 
    },
    manifest: [ 'test' ] 
};

// Mock data from db.all
const dataFromAll = [{ test : 'test' }];

// Mock data from db.get
const dataFromGet =
{
    object_id : '1',
    name      : 'Bob the Builder'
};

// Arguments for db.all
const allArg1 = `SELECT * 
            FROM use_overwrite_prompt 
            WHERE object_id = 1`;

const allArg2 = 'use_overwrite_prompt';

// Arguments for db.get
const getArg1 = `SELECT * 
            FROM object 
            WHERE object_id = 1`;

const getArg2 = 'object';

// Request
const request = httpMocks.createRequest(
{
    method: 'GET',
    url: '/study`',
    query: 
    {
        id : '1',
        visibleTables : 
        [ 
            'environment_geographic_location', 
            'use_problem_statement' 
        ]
    }
} );

it( 'sends the correct response object on GET /study', async () =>
{
    const response = httpMocks.createResponse();

    db.all.mockResolvedValue( dataFromAll );
    db.get.mockResolvedValue( dataFromGet );

    await routes.study( request, response );

    expect( response._getJSONData() ).toEqual( responseData );
    expect( db.all ).toHaveBeenLastCalledWith( allArg1, allArg2 );
    expect( db.all ).toHaveBeenCalledTimes( 13 );
    expect( db.get ).toHaveBeenCalledWith( getArg1, getArg2 );
    expect( db.get ).toHaveBeenCalledTimes( 1 );
} );

it( 'sends the correct response object on error at GET /study', async () =>
{
    const response = httpMocks.createResponse();
    const errorMsg = "GET /api/study error, Error: I am the error";

    db.all.mockRejectedValue( new Error( 'I am the error' ) );

    await routes.study( request, response );

    expect( response._getStatusCode() ).toEqual( 400 );
    expect( response._getData() ).toEqual( `"${ errorMsg }"` );
} );
