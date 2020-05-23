const express = require( 'express' );
const routes  = require( './routes.js' );

const router = express.Router();

// Homepage API call, to get the object_id, mode
// and thumbnail of all items in database
router.get( '/display', routes.display );

// Record API call, to get all tables in database except
// for foreign key tables and the display table
// router.get( '/all', routes.all );

// Case study API call, to get all tables which will
// have prompts shown
router.get( '/visibility/prompt', routes.visibility.prompt );

// Case study API call, to get all tables which will
// have fields shown in the background evidence record
// as well as the additional prompts an other necessary
// tables
// router.get( '/visibility/field', routes.visibility.field );

module.exports = router;