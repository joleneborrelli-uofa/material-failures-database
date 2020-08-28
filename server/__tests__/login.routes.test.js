const httpMocks = require( 'node-mocks-http' );
const routes    = require( '../routes' );
const db        = require( '../db.js' );
const helpers   = require( '../helpers.js' );

jest.mock( '../db' );

helpers.getPasswordHash = jest.fn()
                          .mockReturnValueOnce( 'boop!123' )
                          .mockReturnValueOnce( 'boop' );

//Responses from API
const responseData = 
{ 
    redirectUrl: '/settings' 
};

const responseDataBadPassword = 
{ 
    message : 'Incorrect password'
};

const responseDataBadUsernameOrPassword = 
{ 
    message : 'Incorrect username or password'
};

// Mock data from db.get
const dataFromGet = 
{ 
    username : 'betty',
    password : 'boop!123'
};

const dataFromGetBadUsernameOrPassword = {};

// Arguments for db.get
const getArg1 = ( username ) => `SELECT *
                     FROM settings
                     WHERE username = '${ username }'`;

const getArg2 = 'login';

it( 'sends the correct response object on POST /login with the correct password', async () =>
{
    const request = httpMocks.createRequest(
    {
        method: 'POST',
        url: '/login',
        body:
        {
            username : 'betty',
            password : 'boop!123'
        }
    } );

    const response = httpMocks.createResponse();

    db.get.mockResolvedValue( dataFromGet );

    await routes.login( request, response );

    expect( response._getJSONData() ).toEqual( responseData );
    expect( db.get ).toHaveBeenLastCalledWith( getArg1( 'betty' ), getArg2 );
    expect( db.get ).toHaveBeenCalledTimes( 1 );
} );

it( 'sends the correct response object on POST /login with the incorrect password', async () =>
{
    const request = httpMocks.createRequest(
    {
        method: 'POST',
        url: '/login',
        body:
        {
            username : 'betty',
            password : 'boop'
        }
    } );

    const response = httpMocks.createResponse();

    db.get.mockResolvedValue( dataFromGet );

    await routes.login( request, response );

    expect( response._getJSONData() ).toEqual( responseDataBadPassword );
    expect( db.get ).toHaveBeenLastCalledWith( getArg1( 'betty' ), getArg2 );
    expect( db.get ).toHaveBeenCalledTimes( 2 );
} );

it( 'sends the correct response object on POST /login with the incorrect username', async () =>
{
    const request = httpMocks.createRequest(
    {
        method: 'POST',
        url: '/login',
        body:
        {
            username : 'bet',
            password : 'boop!123'
        }
    } );
    const response = httpMocks.createResponse();

    db.get.mockResolvedValue( dataFromGetBadUsernameOrPassword );

    await routes.login( request, response );

    expect( response._getJSONData() ).toEqual( responseDataBadUsernameOrPassword );
    expect( db.get ).toHaveBeenLastCalledWith( getArg1( 'bet' ), getArg2 );
    expect( db.get ).toHaveBeenCalledTimes( 3 );
} );

it( 'sends the correct response object on POST /login with the incorrect username or password', async () =>
{
    const request = httpMocks.createRequest(
    {
        method: 'POST',
        url: '/login',
        body:
        {
            username : 'bet',
            password : 'boop'
        }
    } );

    const response = httpMocks.createResponse();

    db.get.mockResolvedValue( dataFromGetBadUsernameOrPassword );

    await routes.login( request, response );

    expect( response._getJSONData() ).toEqual( responseDataBadUsernameOrPassword );
    expect( db.get ).toHaveBeenLastCalledWith( getArg1( 'bet' ), getArg2 );
    expect( db.get ).toHaveBeenCalledTimes( 4 );
} );

it( 'sends the correct response object on error at POST /login', async () =>
{
    const request = httpMocks.createRequest(
    {
        method: 'POST',
        url: '/login',
        body:
        {
            username : 'betty',
            password : 'boop!123'
        }
    } );

    const response = httpMocks.createResponse();
    const errorMsg = "POST /api/login error, Error: I am the error";

    db.get.mockRejectedValue( new Error( 'I am the error' ) );

    await routes.login( request, response );

    expect( response._getStatusCode() ).toEqual( 400 );
    expect( response._getData() ).toEqual( `"${ errorMsg }"` );
} );
