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
        rating: [ 'test' ],
        inscription: [ 'test' ],
        serial_number: [ 'test' ],
        feature: [ 'test' ],
        fracture_path: [ 'test' ],
        fracture_mode: [ 'test' ],
        fracture_surface: [ 'test' ],
        fracture_feature: [ 'test' ],
        fracture_loading: [ 'test' ],
        object_id: '1',
        name: 'Bob the Builder' 
    },
    material:
    { 
        alloy_designation: [ 'test' ],
        grade: [ 'test' ],
        full_name: [ 'test' ],
        class: [ 'test' ],
        crystallinity: [ 'test' ],
        recyclability: [ 'test' ],
        biodegradability: [ 'test' ],
        toxicity: [ 'test' ] 
    },
    processing:
    { 
        manufacturer: [ 'test' ],
        date: [ 'test' ],
        location: [ 'test' ],
        plant: [ 'test' ],
        treatment: [ 'test' ],
        joining: [ 'test' ],
        machining: [ 'test' ],
        shaping: [ 'test' ],
        residual_stress: [ 'test' ] 
    },
    environment:
    { 
        ambient: [ 'test' ],
        light_exposure: [ 'test' ],
        geographic_location: [ 'test' ],
        weather_exposure: [ 'test' ],
        storage_location: [ 'test' ],
        interaction_stress: [ 'test' ],
        interaction_environment: [ 'test' ],
        interaction_electromagnetic: [ 'test' ],
        interaction_thermal: [ 'test' ],
        interaction_tribological: [ 'test' ],
        interaction_loading: [ 'test' ] 
    },
    use:
    { 
        problem_statement: [ 'test' ],
        functionality_loss: [ 'test' ],
        failure_moment: [ 'test' ],
        failure_operation_stage: [ 'test' ],
        specification: [ 'test' ],
        record: [ 'test' ],
        operation: [ 'test' ],
        operator: [ 'test' ],
        operational_factor: [ 'test' ] 
    },
    reference: [ 'test' ],
    manifest: [ 'test' ],
    conclusion: [ 'test' ],
    fault_tree: [ 'test' ] 
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
            FROM use_operational_factor 
            WHERE object_id = 1`;

const allArg2 = 'use_operational_factor';

// Arguments for db.get
const getArg1 = `SELECT * 
            FROM object 
            WHERE object_id = 1`;

const getArg2 = 'object';

// Request
const request = httpMocks.createRequest(
{
    method: 'GET',
    url: '/record',
    query: 
    {
        id : '1'
    }
} );

it( 'sends the correct response object on GET /record', async () =>
{
    const response = httpMocks.createResponse();

    db.all.mockResolvedValue( dataFromAll );
    db.get.mockResolvedValue( dataFromGet );

    await routes.record( request, response );

    expect( response._getJSONData() ).toEqual( responseData );
    expect( db.all ).toHaveBeenLastCalledWith( allArg1, allArg2 );
    expect( db.all ).toHaveBeenCalledTimes( 50 );
    expect( db.get ).toHaveBeenCalledWith( getArg1, getArg2 );
    expect( db.get ).toHaveBeenCalledTimes( 1 );
} );

it( 'sends the correct response object on error at GET /record', async () =>
{
    const response = httpMocks.createResponse();
    const errorMsg = "GET /api/record error, Error: I am the error";

    db.all.mockRejectedValue( new Error( 'I am the error' ) );

    await routes.record( request, response );

    expect( response._getStatusCode() ).toEqual( 400 );
    expect( response._getData() ).toEqual( `"${ errorMsg }"` );
} );
