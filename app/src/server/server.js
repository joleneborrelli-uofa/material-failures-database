const path        = require( 'path' );
const express     = require( 'express' );
const bodyParser  = require( 'body-parser' );
const compression = require( 'compression' );
const cors        = require( 'cors' );
const helmet      = require( 'helmet' );
const router      = require( './router.js' );

const port = process.env.PORT || 4001
const app  = express()

app.use( cors() )
app.use( helmet() )
app.use( compression() )
app.use( bodyParser.urlencoded( { extended: false } ) )
app.use( bodyParser.json() )


app.use( '/api', router )

app.use( function ( err, req, res, next ) 
{
    console.error( err.stack )

    res.status( 500 ).send( 'Response 500: Server Error. Very Frustrating!' )
} )

app.use( function ( req, res, next ) 
{
    res.status( 404 ).send( 'Response 400: Page Not Found. Hmmmm...' )
} )

app.listen( port, () => 
{
    console.log( `Server listening on port: ${ port }...` )
} );
