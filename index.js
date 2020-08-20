const path        = require( 'path' );
const express     = require( 'express' );
const bodyParser  = require( 'body-parser' );
const compression = require( 'compression' );
const cors        = require( 'cors' );
const helmet      = require( 'helmet' );
const router      = require( './server/router.js' );

const port = process.env.PORT || 5000;
const app  = express();

app.use( cors() )
app.use( helmet() )
app.use( compression() )
app.use( bodyParser.urlencoded( { extended: true } ) )
app.use( bodyParser.json() )

// Serve the static files from the React app
app.use( express.static( path.join( __dirname, 'client/build' ) ) );

app.use( '/api', router );

app.use( ( err, req, res, next ) =>
{
    console.error( err.stack )

    res.status( 500 ).send( 'Response 500: Server Error. Very Frustrating!' )
} )

app.use( ( req, res, next ) =>
{
    res.status( 404 ).send( 'Response 400: Page Not Found. Hmmmm...' )
} )

app.get( '*', ( req, res ) =>
{
    res.sendFile( path.join( __dirname + '/client/build/index.html' ) );
} );

app.listen( port, () => 
{
	console.log( `Server listening on port: ${ port }...` );
} );
