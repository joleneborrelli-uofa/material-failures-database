const express = require( 'express' );
const routes  = require( './routes.js' );

const router = express.Router();

// Homepage API call, to get the object_id, mode
// and thumbnail of all items in database
router.get( '/display', routes.display );

// Record API call, to get all tables which are
// necessary to display a record
router.get( '/record', routes.record );

// Case study API call, to get all tables which will
// have prompts shown
router.get( '/visibility/prompt', routes.visibility.prompt );

// Case study API call, to get all tables which will
// have fields shown
router.get( '/visibility/field', routes.visibility.field );

// Case study API call, to get all tables which are
// necessary to display a case study
router.get( '/study', routes.study );

module.exports = router;