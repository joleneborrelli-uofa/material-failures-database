/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: unknownObject, displayHeaders, displayLines, htmlClass, databaseKeys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unknownObject", function() { return unknownObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayHeaders", function() { return displayHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayLines", function() { return displayLines; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "htmlClass", function() { return htmlClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "databaseKeys", function() { return databaseKeys; });
const unknownObject  = 'Unknown Object';

const displayHeaders =
{
    object      : 'Object Properties',
    material    : 'Material',
    processing  : 'Processing',
    environment : 'Environmental Interactions',
    use         : 'Use Case and History'
};

const displayLines =
{
    object :
    {
        rating        : 'Rating',
        inscription   : 'Inscription',
        serial_number : 'Serial Number',
        feature       : 'Features'
    },

    material :
    {
        alloy_designation : 'Alloy Designation',
        type              : 'Type',
        grade             : 'Grade',
        name              : 'Name',
        class_type        : 'Class',
        subclass_type     : 'Subclass',
        crystallinity     : 'Crystallinity',
        biodegradibility  : 'Biodegradibility',
        recyclability     : 'Recyclability',
        toxicity          : 'Toxicity'
    },

    processing :
    {
        manufacturer    : 'Manufacturer',
        date            : 'Manufacturing Date',
        location        : 'Manufacturing Location',
        plant           : 'Manufacturing Plant',
        treatment       : 'Treatment Procedures',
        joining         : 'Joining Procedures',
        machining       : 'Machining Procedures',
        shaping         : 'Shaping Procedures',
        residual_stress : 'Residual Stresses'

    },

    environment :
    {
        ambient             : 'Ambient Factors',
        light_exposure      : 'Light Exposure',
        geographic_location : 'Geographic Location',
        weather_exposure    : 'Weather Exposure',
        location            : 'Storage Location',
        stress_orientation  : 'Orientation of Stresses',
        loading             : 'Loading',
        loading_frequency   : 'Loading Frequency'
    },

    use :
    {
        problem_statement  : 'Problem Statement',
        functionality_loss : 'Loss of Functionality',
        failure_date       : 'Date of Failure',
        failure_time       : 'Time of Failure',
        operation_stage    : 'Stage of Operation During Failure',
        specification      : 'Specifications',
        record             : 'Records',
        operation          : 'Operation Status',
        operator_name      : 'Operator',
        operational_factor : 'Operational Factors'
    }  
};

const htmlClass = 
{
    title           : 'fa-title',
    module          : 'fa-module',
    submodule       : 'fa-submodule',
    moduleHeader    : 'fa-module-header',
    submoduleHeader : 'fa-submodule-header',
    line            : 'fa-line',
    liLines         : 'fa-li-lines',
    ulLines         : 'fa-ul-lines'
};

const databaseKeys =
{
    type        : '_type',
    subtype     : '_subtype',
    description : '_description',
    normalcy    : '_normalcy',
    forces      : '_forces',
    frequency   : '_frequency'
};

/***/ }),

/***/ "./src/database.js":
/*!*************************!*\
  !*** ./src/database.js ***!
  \*************************/
/*! exports provided: database */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "database", function() { return database; });
const database =
{

    "object" :
    {
        "name" : "Bob the Builder Plate",

        "object" :
        {
            "inscription" : ["Home Presence", "homepresence.com", "2007 HIT/K Chapman", "Cup and fork symbol", "Crossed-out microwave symbol", "Recycling symbol with 7", "Do not microwave", "Hand wash only"],
            "feature"     : [
                                {
                                    "feature_type"        : "Ridge",
                                    "feature_description" : "Bottom of plate."
                                } ]
        },

        "material" :
        {
            "name"             : "Melamine formaldehyde",
            "class_type"       : "Polymer",
            "subclass_type"    : "Thermoset plastic",
            "crystallinity"    : "Amorphous",
            "biodegradibility" : "None",
            "recyclability"    : ["Category 7", "Non-recyclable or difficult to recycle"],
            "toxicity"         : "Possible carcinogen"
        },

        "processing" :
        {
            "manufacturer"    : "Trudeau/Home Presence",
            "treatment"       : [ 
                                    { 
                                        "treatment_type"        : "Bulk",
                                        "treatment_subtype"     : "Normalizing",
                                        "treatment_description" : "The plate is allowed to air cool once removed from the mold."
                                    } ],
            "shaping"         : [
                                    {
                                        "shaping_type"        : "Molding",
                                        "shaping_subtype"     : "Compression",
                                        "shaping_description" : "The plate is compressed in a mold under high pressure and high heat."
                                    } ],
            "residual_stress" : [
                                    {
                                        "residual_stress_type"        : "Temperature Variation",
                                        "residual_stress_forces"      : "Tensile forces",
                                        "residual_stress_description" : "Between the fast cooling edges and slow cooling center, causing stress in the radial direction."
                                    },
                                     {
                                        "residual_stress_type"        : "Temperature Variation",
                                        "residual_stress_forces"      : "Compressive forces",
                                        "residual_stress_description" : "Between the fast cooling edges, causing stress in the circumferential (hoop) direction."
                                }  ]
        },

        "environment" :
        {
            "geographic_location" : "Edmonton, AB, Canada",
            "location" : [ 
                            {
                                "location_type"        : "Indoor",
                                "location_description" : "Kitchen and/or dining room."
                            } ],
            "loading"  : [ 
                            {
                                "loading_type"        : "Cyclic",
                                "loading_normalcy"    : "Abnormal",
                                "loading_description" : "Alternating hot and cold temperature variation." 
                            } ]
        },

        "use" :
        {
            "problem_statement"   : "The Bob the Builder Plate was removed from service. It experienced catastrophic structural failure with warping and fracture. The causes of warping and fracture are unknown.",
            "functionality_loss"  : "Use as an eating surface.",
            "operational_factor"  : [
                                        {
                                            "operational_factor_type"        : "Moisture",
                                            "operational_factor_description" : "Exposure to moisture in dishwasher."
                                        },
                                        {
                                            "operational_factor_type"        : "Temperature",
                                            "operational_factor_description" : "Exposure to high temperatures in dishwasher."
                                        }]
        },

        "references" : []

    }

}

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! exports provided: isString, isArray, isObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/** 
    @function isString

    @arg val : { Any }
    @return  : { Boolean } 
*/ 
const isString = ( val ) => typeof val === 'string';

/** 
    @function isArray

    @arg val : { Any }
    @return  : { Boolean } 
*/ 
const isArray  = ( val ) => Array.isArray( val );

/** 
    @function isObject

    @arg val : { Any }
    @return  : { Boolean } 
*/ 
const isObject = ( val ) => val && typeof val === 'object' && val.constructor === Object;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./src/constants.js");
/* harmony import */ var _templates_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates.js */ "./src/templates.js");
/* harmony import */ var _database_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./database.js */ "./src/database.js");




/**
	@function buildHeaders
	
	@arg database : { Object } 
	@return       : { Object }     
*/
const buildHeaders = () =>
{
	let headers        = { ..._constants_js__WEBPACK_IMPORTED_MODULE_0__["displayHeaders"] };
	const databaseKeys = Object.keys( _database_js__WEBPACK_IMPORTED_MODULE_2__["database"].object );

	for( let key in headers )
	{
		if( !databaseKeys.includes( key ) ) delete headers[key]
	}

	return headers;
};

/**
	@function createRecord
	
	@return : { String }     
*/
const createRecordHtml = () =>
{
	const record = document.createElement( 'div' );

	if( _database_js__WEBPACK_IMPORTED_MODULE_2__["database"].hasOwnProperty( 'object' ) )
	{
		const title     = _database_js__WEBPACK_IMPORTED_MODULE_2__["database"].object.name || _constants_js__WEBPACK_IMPORTED_MODULE_0__["unknownObject"];
		const headers   = buildHeaders();
		const innerHtml = Object(_templates_js__WEBPACK_IMPORTED_MODULE_1__["generateRecordHtml"])( headers, title );

		record.innerHTML = innerHtml;
	}

	return record;
};


// Initiate failure record
document.body.appendChild( createRecordHtml() );

/***/ }),

/***/ "./src/templates.js":
/*!**************************!*\
  !*** ./src/templates.js ***!
  \**************************/
/*! exports provided: generateRecordHtml */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRecordHtml", function() { return generateRecordHtml; });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./src/constants.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers.js */ "./src/helpers.js");
/* harmony import */ var _database_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./database.js */ "./src/database.js");




function generateRecordHtml ( headers, title )
{ 
    let innerHtml = `<h3 class="${ _constants_js__WEBPACK_IMPORTED_MODULE_0__["htmlClass"].title }">${ title }</h3>`;

    for( let header in headers )
    {
        let module = _database_js__WEBPACK_IMPORTED_MODULE_2__["database"].object[header];

        innerHtml += generateModuleHtml( module, header );
    }

    return innerHtml;
};

/** 
    @function generateModuleHtml

    @arg module : { Object }
    @ard header : { String }
    @return     : { String } 
*/ 
const generateModuleHtml = ( module, header ) =>
{
    const innerHtml = generateInnerHtml( module, header );

    return `<div class="${ _constants_js__WEBPACK_IMPORTED_MODULE_0__["htmlClass"].module }">
                <div class="${ _constants_js__WEBPACK_IMPORTED_MODULE_0__["htmlClass"].moduleHeader }">${ header }</div>
                <div class="${ _constants_js__WEBPACK_IMPORTED_MODULE_0__["htmlClass"].submodule }">${ innerHtml }</div>
            </div>`;
};

/** 
    @function generateSubmoduleHtml

    @arg subheader : { String }
    @return        : { String } 
*/ 
const generateSubmoduleHtml = ( subHeader ) =>
    `<p class="${ _constants_js__WEBPACK_IMPORTED_MODULE_0__["htmlClass"].submoduleHeader }">${ subHeader }</p>`

/**
    @function generateTypeLineHtml

    @arg type        : { String }
    @arg subtype     : { String }
    @arg description : { String }
    @return          : { String } 

    ie. 'Molding (Compression) : The item was compressed at high heat'
*/ 
const generateTypeLineHtml = ( type, subtype, description ) =>
{
    // If there is no subtype, do not include it in the line
    subtype = subtype ? ` (${ subtype })` : '';

    return `<p class="${ _constants_js__WEBPACK_IMPORTED_MODULE_0__["htmlClass"].line }">
                ${ type }${ subtype }: ${ description }
            </p>`
};

/**
    @function generateSingleLineHtml

    @arg description : { String }
    @return          : { String } 
*/ 
const generateSingleLineHtml = ( description ) =>
    `<p class="${ _constants_js__WEBPACK_IMPORTED_MODULE_0__["htmlClass"].line }">${ description }</p>`

/**
    @function generateMultipleLineHtml

    @arg lines : { Array }
    @return    : { String } 
*/ 
const generateMultipleLineHtml = ( lines ) =>
{
    let li = ``;

    for( let i = 0; i < lines.length; i++ )
    {
        li += `<li class="${ _constants_js__WEBPACK_IMPORTED_MODULE_0__["htmlClass"].liLines }">${ lines[i] }</li>`
    }

    return `<ul class="${ _constants_js__WEBPACK_IMPORTED_MODULE_0__["htmlClass"].ulLines }">${ li }</ul>`;
};

/**
    DO THIS BETTER
    @function generateInnerTypeLineHtml

    @arg subHeader : { String }
    @arg modVal    : { Array }
    @return        : { String } 
*/ 
const generateInnerTypeLineHtml = ( subHeader, modVal ) =>
{
    let innerHtml = ``;

    for( let i = 0; i < modVal.length; i ++ )
    {
        let keys = Object.keys( modVal[i] );

        let typeKey        = subHeader + _constants_js__WEBPACK_IMPORTED_MODULE_0__["databaseKeys"].type;
        let descriptionKey = subHeader + _constants_js__WEBPACK_IMPORTED_MODULE_0__["databaseKeys"].description;
        let subtypeKeys    = 
        [
            modVal[i][subHeader + _constants_js__WEBPACK_IMPORTED_MODULE_0__["databaseKeys"].subtype],
            modVal[i][subHeader + _constants_js__WEBPACK_IMPORTED_MODULE_0__["databaseKeys"].normalcy],
            modVal[i][subHeader + _constants_js__WEBPACK_IMPORTED_MODULE_0__["databaseKeys"].forces],
            modVal[i][subHeader + _constants_js__WEBPACK_IMPORTED_MODULE_0__["databaseKeys"].frequency]
        ].filter( subtypeKey => subtypeKey !== undefined );

        let type        = keys.includes( typeKey ) ? modVal[i][typeKey] : '';
        let subtype     = subtypeKeys.length !== 0 ? subtypeKeys.join( ', ' ) : '';
        let description = keys.includes( descriptionKey ) ? modVal[i][descriptionKey] : '';
        
        innerHtml += generateTypeLineHtml( type, subtype, description );
    }

    return innerHtml;
};

/** 
    @function generateInnerHtml

    @arg module : { Object }
    @arg header : { String }
    @return     : { String } 
*/ 
const generateInnerHtml = ( module, header ) =>
{   
    let innerHtml = ``;

    for( let key in module )
    {
        let singleLine   = ``;
        let typeLine     = ``;
        let multipleLine = ``;

        const subHeader     = _constants_js__WEBPACK_IMPORTED_MODULE_0__["displayLines"][header][key];
        const modVal        = module[key];
        const submoduleHtml = generateSubmoduleHtml( subHeader );

        if ( Object(_helpers_js__WEBPACK_IMPORTED_MODULE_1__["isString"])( modVal ) ) 
        {
            singleLine = generateSingleLineHtml( modVal );
        }

        if( Object(_helpers_js__WEBPACK_IMPORTED_MODULE_1__["isArray"])( modVal ) )
        {
            if( Object(_helpers_js__WEBPACK_IMPORTED_MODULE_1__["isString"])( modVal[0] ) ) 
            {
                multipleLine = generateMultipleLineHtml( modVal );
            }

            if( Object(_helpers_js__WEBPACK_IMPORTED_MODULE_1__["isObject"])( modVal[0] ) )
            {
                typeLine = generateInnerTypeLineHtml( key, modVal );
            }
        }

        innerHtml += submoduleHtml + singleLine + multipleLine + typeLine;
    }

    return innerHtml;
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTzs7QUFFQTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDaEdBO0FBQUE7QUFBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQyxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakMsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekMsU0FBUzs7QUFFVDs7QUFFQTs7QUFFQSxDOzs7Ozs7Ozs7Ozs7QUMzRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUVBLGdCQUFnQjtBQUNoQixnQkFBZ0IsVTtBQUNoQjtBQUNPOztBQUVQO0FBQ0E7O0FBRUEsZ0JBQWdCO0FBQ2hCLGdCQUFnQixVO0FBQ2hCO0FBQ087O0FBRVA7QUFDQTs7QUFFQSxnQkFBZ0I7QUFDaEIsZ0JBQWdCLFU7QUFDaEI7QUFDTyx5Rjs7Ozs7Ozs7Ozs7O0FDdEJQO0FBQUE7QUFBQTtBQUFBO0FBQStEO0FBQ0E7QUFDYjs7QUFFbEQ7QUFDQTs7QUFFQSxrQkFBa0IsUztBQUNsQixrQkFBa0IsUztBQUNsQjtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsSUFBSSw0REFBYztBQUN6QyxtQ0FBbUMscURBQVE7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxZQUFZLFM7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLLHFEQUFRO0FBQ2I7QUFDQSxvQkFBb0IscURBQVEsZ0JBQWdCLDJEQUFhO0FBQ3pEO0FBQ0Esb0JBQW9CLHdFQUFrQjs7QUFFdEM7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBLGdEOzs7Ozs7Ozs7Ozs7QUM5Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1RTtBQUNGO0FBQ0M7O0FBRS9EO0FBQ1AsQztBQUNBLGtDQUFrQyxDQUFDLHVEQUFTLFFBQVEsSUFBSSxRQUFROztBQUVoRTtBQUNBO0FBQ0EscUJBQXFCLHFEQUFROztBQUU3QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtQkFBbUI7QUFDbkIsbUJBQW1CO0FBQ25CLG1CQUFtQixTO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBCQUEwQixDQUFDLHVEQUFTLFNBQVM7QUFDN0MsOEJBQThCLENBQUMsdURBQVMsZUFBZSxJQUFJLFNBQVM7QUFDcEUsOEJBQThCLENBQUMsdURBQVMsWUFBWSxJQUFJLFlBQVk7QUFDcEU7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHNCQUFzQjtBQUN0QixzQkFBc0IsUztBQUN0QjtBQUNBO0FBQ0EsaUJBQWlCLENBQUMsdURBQVMsa0JBQWtCLElBQUksWUFBWTs7QUFFN0Q7QUFDQTs7QUFFQSx3QkFBd0I7QUFDeEIsd0JBQXdCO0FBQ3hCLHdCQUF3QjtBQUN4Qix3QkFBd0IsUzs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixVQUFVOztBQUV2Qyx3QkFBd0IsQ0FBQyx1REFBUyxPQUFPO0FBQ3pDLGtCQUFrQixPQUFPLEVBQUUsVUFBVSxJQUFJO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx3QkFBd0I7QUFDeEIsd0JBQXdCLFM7QUFDeEI7QUFDQTtBQUNBLGlCQUFpQixDQUFDLHVEQUFTLE9BQU8sSUFBSSxjQUFjOztBQUVwRDtBQUNBOztBQUVBLGtCQUFrQjtBQUNsQixrQkFBa0IsUztBQUNsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0EsNEJBQTRCLENBQUMsdURBQVMsVUFBVSxJQUFJLFdBQVc7QUFDL0Q7O0FBRUEseUJBQXlCLENBQUMsdURBQVMsVUFBVSxJQUFJLEtBQUs7QUFDdEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHNCQUFzQjtBQUN0QixzQkFBc0I7QUFDdEIsc0JBQXNCLFM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLG1CQUFtQjtBQUN0QztBQUNBOztBQUVBLHlDQUF5QywwREFBWTtBQUNyRCx5Q0FBeUMsMERBQVk7QUFDckQ7QUFDQTtBQUNBLGtDQUFrQywwREFBWTtBQUM5QyxrQ0FBa0MsMERBQVk7QUFDOUMsa0NBQWtDLDBEQUFZO0FBQzlDLGtDQUFrQywwREFBWTtBQUM5Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUJBQW1CO0FBQ25CLG1CQUFtQjtBQUNuQixtQkFBbUIsUztBQUNuQjtBQUNBO0FBQ0EsQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOEJBQThCLDBEQUFZO0FBQzFDO0FBQ0E7O0FBRUEsYUFBYSw0REFBUTtBQUNyQjtBQUNBO0FBQ0E7O0FBRUEsWUFBWSwyREFBTztBQUNuQjtBQUNBLGdCQUFnQiw0REFBUTtBQUN4QjtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLDREQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBjb25zdCB1bmtub3duT2JqZWN0ICA9ICdVbmtub3duIE9iamVjdCc7XG5cbmV4cG9ydCBjb25zdCBkaXNwbGF5SGVhZGVycyA9XG57XG4gICAgb2JqZWN0ICAgICAgOiAnT2JqZWN0IFByb3BlcnRpZXMnLFxuICAgIG1hdGVyaWFsICAgIDogJ01hdGVyaWFsJyxcbiAgICBwcm9jZXNzaW5nICA6ICdQcm9jZXNzaW5nJyxcbiAgICBlbnZpcm9ubWVudCA6ICdFbnZpcm9ubWVudGFsIEludGVyYWN0aW9ucycsXG4gICAgdXNlICAgICAgICAgOiAnVXNlIENhc2UgYW5kIEhpc3RvcnknXG59O1xuXG5leHBvcnQgY29uc3QgZGlzcGxheUxpbmVzID1cbntcbiAgICBvYmplY3QgOlxuICAgIHtcbiAgICAgICAgcmF0aW5nICAgICAgICA6ICdSYXRpbmcnLFxuICAgICAgICBpbnNjcmlwdGlvbiAgIDogJ0luc2NyaXB0aW9uJyxcbiAgICAgICAgc2VyaWFsX251bWJlciA6ICdTZXJpYWwgTnVtYmVyJyxcbiAgICAgICAgZmVhdHVyZSAgICAgICA6ICdGZWF0dXJlcydcbiAgICB9LFxuXG4gICAgbWF0ZXJpYWwgOlxuICAgIHtcbiAgICAgICAgYWxsb3lfZGVzaWduYXRpb24gOiAnQWxsb3kgRGVzaWduYXRpb24nLFxuICAgICAgICB0eXBlICAgICAgICAgICAgICA6ICdUeXBlJyxcbiAgICAgICAgZ3JhZGUgICAgICAgICAgICAgOiAnR3JhZGUnLFxuICAgICAgICBuYW1lICAgICAgICAgICAgICA6ICdOYW1lJyxcbiAgICAgICAgY2xhc3NfdHlwZSAgICAgICAgOiAnQ2xhc3MnLFxuICAgICAgICBzdWJjbGFzc190eXBlICAgICA6ICdTdWJjbGFzcycsXG4gICAgICAgIGNyeXN0YWxsaW5pdHkgICAgIDogJ0NyeXN0YWxsaW5pdHknLFxuICAgICAgICBiaW9kZWdyYWRpYmlsaXR5ICA6ICdCaW9kZWdyYWRpYmlsaXR5JyxcbiAgICAgICAgcmVjeWNsYWJpbGl0eSAgICAgOiAnUmVjeWNsYWJpbGl0eScsXG4gICAgICAgIHRveGljaXR5ICAgICAgICAgIDogJ1RveGljaXR5J1xuICAgIH0sXG5cbiAgICBwcm9jZXNzaW5nIDpcbiAgICB7XG4gICAgICAgIG1hbnVmYWN0dXJlciAgICA6ICdNYW51ZmFjdHVyZXInLFxuICAgICAgICBkYXRlICAgICAgICAgICAgOiAnTWFudWZhY3R1cmluZyBEYXRlJyxcbiAgICAgICAgbG9jYXRpb24gICAgICAgIDogJ01hbnVmYWN0dXJpbmcgTG9jYXRpb24nLFxuICAgICAgICBwbGFudCAgICAgICAgICAgOiAnTWFudWZhY3R1cmluZyBQbGFudCcsXG4gICAgICAgIHRyZWF0bWVudCAgICAgICA6ICdUcmVhdG1lbnQgUHJvY2VkdXJlcycsXG4gICAgICAgIGpvaW5pbmcgICAgICAgICA6ICdKb2luaW5nIFByb2NlZHVyZXMnLFxuICAgICAgICBtYWNoaW5pbmcgICAgICAgOiAnTWFjaGluaW5nIFByb2NlZHVyZXMnLFxuICAgICAgICBzaGFwaW5nICAgICAgICAgOiAnU2hhcGluZyBQcm9jZWR1cmVzJyxcbiAgICAgICAgcmVzaWR1YWxfc3RyZXNzIDogJ1Jlc2lkdWFsIFN0cmVzc2VzJ1xuXG4gICAgfSxcblxuICAgIGVudmlyb25tZW50IDpcbiAgICB7XG4gICAgICAgIGFtYmllbnQgICAgICAgICAgICAgOiAnQW1iaWVudCBGYWN0b3JzJyxcbiAgICAgICAgbGlnaHRfZXhwb3N1cmUgICAgICA6ICdMaWdodCBFeHBvc3VyZScsXG4gICAgICAgIGdlb2dyYXBoaWNfbG9jYXRpb24gOiAnR2VvZ3JhcGhpYyBMb2NhdGlvbicsXG4gICAgICAgIHdlYXRoZXJfZXhwb3N1cmUgICAgOiAnV2VhdGhlciBFeHBvc3VyZScsXG4gICAgICAgIGxvY2F0aW9uICAgICAgICAgICAgOiAnU3RvcmFnZSBMb2NhdGlvbicsXG4gICAgICAgIHN0cmVzc19vcmllbnRhdGlvbiAgOiAnT3JpZW50YXRpb24gb2YgU3RyZXNzZXMnLFxuICAgICAgICBsb2FkaW5nICAgICAgICAgICAgIDogJ0xvYWRpbmcnLFxuICAgICAgICBsb2FkaW5nX2ZyZXF1ZW5jeSAgIDogJ0xvYWRpbmcgRnJlcXVlbmN5J1xuICAgIH0sXG5cbiAgICB1c2UgOlxuICAgIHtcbiAgICAgICAgcHJvYmxlbV9zdGF0ZW1lbnQgIDogJ1Byb2JsZW0gU3RhdGVtZW50JyxcbiAgICAgICAgZnVuY3Rpb25hbGl0eV9sb3NzIDogJ0xvc3Mgb2YgRnVuY3Rpb25hbGl0eScsXG4gICAgICAgIGZhaWx1cmVfZGF0ZSAgICAgICA6ICdEYXRlIG9mIEZhaWx1cmUnLFxuICAgICAgICBmYWlsdXJlX3RpbWUgICAgICAgOiAnVGltZSBvZiBGYWlsdXJlJyxcbiAgICAgICAgb3BlcmF0aW9uX3N0YWdlICAgIDogJ1N0YWdlIG9mIE9wZXJhdGlvbiBEdXJpbmcgRmFpbHVyZScsXG4gICAgICAgIHNwZWNpZmljYXRpb24gICAgICA6ICdTcGVjaWZpY2F0aW9ucycsXG4gICAgICAgIHJlY29yZCAgICAgICAgICAgICA6ICdSZWNvcmRzJyxcbiAgICAgICAgb3BlcmF0aW9uICAgICAgICAgIDogJ09wZXJhdGlvbiBTdGF0dXMnLFxuICAgICAgICBvcGVyYXRvcl9uYW1lICAgICAgOiAnT3BlcmF0b3InLFxuICAgICAgICBvcGVyYXRpb25hbF9mYWN0b3IgOiAnT3BlcmF0aW9uYWwgRmFjdG9ycydcbiAgICB9ICBcbn07XG5cbmV4cG9ydCBjb25zdCBodG1sQ2xhc3MgPSBcbntcbiAgICB0aXRsZSAgICAgICAgICAgOiAnZmEtdGl0bGUnLFxuICAgIG1vZHVsZSAgICAgICAgICA6ICdmYS1tb2R1bGUnLFxuICAgIHN1Ym1vZHVsZSAgICAgICA6ICdmYS1zdWJtb2R1bGUnLFxuICAgIG1vZHVsZUhlYWRlciAgICA6ICdmYS1tb2R1bGUtaGVhZGVyJyxcbiAgICBzdWJtb2R1bGVIZWFkZXIgOiAnZmEtc3VibW9kdWxlLWhlYWRlcicsXG4gICAgbGluZSAgICAgICAgICAgIDogJ2ZhLWxpbmUnLFxuICAgIGxpTGluZXMgICAgICAgICA6ICdmYS1saS1saW5lcycsXG4gICAgdWxMaW5lcyAgICAgICAgIDogJ2ZhLXVsLWxpbmVzJ1xufTtcblxuZXhwb3J0IGNvbnN0IGRhdGFiYXNlS2V5cyA9XG57XG4gICAgdHlwZSAgICAgICAgOiAnX3R5cGUnLFxuICAgIHN1YnR5cGUgICAgIDogJ19zdWJ0eXBlJyxcbiAgICBkZXNjcmlwdGlvbiA6ICdfZGVzY3JpcHRpb24nLFxuICAgIG5vcm1hbGN5ICAgIDogJ19ub3JtYWxjeScsXG4gICAgZm9yY2VzICAgICAgOiAnX2ZvcmNlcycsXG4gICAgZnJlcXVlbmN5ICAgOiAnX2ZyZXF1ZW5jeSdcbn07IiwiZXhwb3J0IGNvbnN0IGRhdGFiYXNlID1cbntcblxuICAgIFwib2JqZWN0XCIgOlxuICAgIHtcbiAgICAgICAgXCJuYW1lXCIgOiBcIkJvYiB0aGUgQnVpbGRlciBQbGF0ZVwiLFxuXG4gICAgICAgIFwib2JqZWN0XCIgOlxuICAgICAgICB7XG4gICAgICAgICAgICBcImluc2NyaXB0aW9uXCIgOiBbXCJIb21lIFByZXNlbmNlXCIsIFwiaG9tZXByZXNlbmNlLmNvbVwiLCBcIjIwMDcgSElUL0sgQ2hhcG1hblwiLCBcIkN1cCBhbmQgZm9yayBzeW1ib2xcIiwgXCJDcm9zc2VkLW91dCBtaWNyb3dhdmUgc3ltYm9sXCIsIFwiUmVjeWNsaW5nIHN5bWJvbCB3aXRoIDdcIiwgXCJEbyBub3QgbWljcm93YXZlXCIsIFwiSGFuZCB3YXNoIG9ubHlcIl0sXG4gICAgICAgICAgICBcImZlYXR1cmVcIiAgICAgOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmVhdHVyZV90eXBlXCIgICAgICAgIDogXCJSaWRnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmZWF0dXJlX2Rlc2NyaXB0aW9uXCIgOiBcIkJvdHRvbSBvZiBwbGF0ZS5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IF1cbiAgICAgICAgfSxcblxuICAgICAgICBcIm1hdGVyaWFsXCIgOlxuICAgICAgICB7XG4gICAgICAgICAgICBcIm5hbWVcIiAgICAgICAgICAgICA6IFwiTWVsYW1pbmUgZm9ybWFsZGVoeWRlXCIsXG4gICAgICAgICAgICBcImNsYXNzX3R5cGVcIiAgICAgICA6IFwiUG9seW1lclwiLFxuICAgICAgICAgICAgXCJzdWJjbGFzc190eXBlXCIgICAgOiBcIlRoZXJtb3NldCBwbGFzdGljXCIsXG4gICAgICAgICAgICBcImNyeXN0YWxsaW5pdHlcIiAgICA6IFwiQW1vcnBob3VzXCIsXG4gICAgICAgICAgICBcImJpb2RlZ3JhZGliaWxpdHlcIiA6IFwiTm9uZVwiLFxuICAgICAgICAgICAgXCJyZWN5Y2xhYmlsaXR5XCIgICAgOiBbXCJDYXRlZ29yeSA3XCIsIFwiTm9uLXJlY3ljbGFibGUgb3IgZGlmZmljdWx0IHRvIHJlY3ljbGVcIl0sXG4gICAgICAgICAgICBcInRveGljaXR5XCIgICAgICAgICA6IFwiUG9zc2libGUgY2FyY2lub2dlblwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgXCJwcm9jZXNzaW5nXCIgOlxuICAgICAgICB7XG4gICAgICAgICAgICBcIm1hbnVmYWN0dXJlclwiICAgIDogXCJUcnVkZWF1L0hvbWUgUHJlc2VuY2VcIixcbiAgICAgICAgICAgIFwidHJlYXRtZW50XCIgICAgICAgOiBbIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRyZWF0bWVudF90eXBlXCIgICAgICAgIDogXCJCdWxrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0cmVhdG1lbnRfc3VidHlwZVwiICAgICA6IFwiTm9ybWFsaXppbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRyZWF0bWVudF9kZXNjcmlwdGlvblwiIDogXCJUaGUgcGxhdGUgaXMgYWxsb3dlZCB0byBhaXIgY29vbCBvbmNlIHJlbW92ZWQgZnJvbSB0aGUgbW9sZC5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBdLFxuICAgICAgICAgICAgXCJzaGFwaW5nXCIgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNoYXBpbmdfdHlwZVwiICAgICAgICA6IFwiTW9sZGluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hhcGluZ19zdWJ0eXBlXCIgICAgIDogXCJDb21wcmVzc2lvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hhcGluZ19kZXNjcmlwdGlvblwiIDogXCJUaGUgcGxhdGUgaXMgY29tcHJlc3NlZCBpbiBhIG1vbGQgdW5kZXIgaGlnaCBwcmVzc3VyZSBhbmQgaGlnaCBoZWF0LlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IF0sXG4gICAgICAgICAgICBcInJlc2lkdWFsX3N0cmVzc1wiIDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVzaWR1YWxfc3RyZXNzX3R5cGVcIiAgICAgICAgOiBcIlRlbXBlcmF0dXJlIFZhcmlhdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVzaWR1YWxfc3RyZXNzX2ZvcmNlc1wiICAgICAgOiBcIlRlbnNpbGUgZm9yY2VzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXNpZHVhbF9zdHJlc3NfZGVzY3JpcHRpb25cIiA6IFwiQmV0d2VlbiB0aGUgZmFzdCBjb29saW5nIGVkZ2VzIGFuZCBzbG93IGNvb2xpbmcgY2VudGVyLCBjYXVzaW5nIHN0cmVzcyBpbiB0aGUgcmFkaWFsIGRpcmVjdGlvbi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXNpZHVhbF9zdHJlc3NfdHlwZVwiICAgICAgICA6IFwiVGVtcGVyYXR1cmUgVmFyaWF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXNpZHVhbF9zdHJlc3NfZm9yY2VzXCIgICAgICA6IFwiQ29tcHJlc3NpdmUgZm9yY2VzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXNpZHVhbF9zdHJlc3NfZGVzY3JpcHRpb25cIiA6IFwiQmV0d2VlbiB0aGUgZmFzdCBjb29saW5nIGVkZ2VzLCBjYXVzaW5nIHN0cmVzcyBpbiB0aGUgY2lyY3VtZmVyZW50aWFsIChob29wKSBkaXJlY3Rpb24uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgXVxuICAgICAgICB9LFxuXG4gICAgICAgIFwiZW52aXJvbm1lbnRcIiA6XG4gICAgICAgIHtcbiAgICAgICAgICAgIFwiZ2VvZ3JhcGhpY19sb2NhdGlvblwiIDogXCJFZG1vbnRvbiwgQUIsIENhbmFkYVwiLFxuICAgICAgICAgICAgXCJsb2NhdGlvblwiIDogWyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibG9jYXRpb25fdHlwZVwiICAgICAgICA6IFwiSW5kb29yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibG9jYXRpb25fZGVzY3JpcHRpb25cIiA6IFwiS2l0Y2hlbiBhbmQvb3IgZGluaW5nIHJvb20uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IF0sXG4gICAgICAgICAgICBcImxvYWRpbmdcIiAgOiBbIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsb2FkaW5nX3R5cGVcIiAgICAgICAgOiBcIkN5Y2xpY1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxvYWRpbmdfbm9ybWFsY3lcIiAgICA6IFwiQWJub3JtYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsb2FkaW5nX2Rlc2NyaXB0aW9uXCIgOiBcIkFsdGVybmF0aW5nIGhvdCBhbmQgY29sZCB0ZW1wZXJhdHVyZSB2YXJpYXRpb24uXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBdXG4gICAgICAgIH0sXG5cbiAgICAgICAgXCJ1c2VcIiA6XG4gICAgICAgIHtcbiAgICAgICAgICAgIFwicHJvYmxlbV9zdGF0ZW1lbnRcIiAgIDogXCJUaGUgQm9iIHRoZSBCdWlsZGVyIFBsYXRlIHdhcyByZW1vdmVkIGZyb20gc2VydmljZS4gSXQgZXhwZXJpZW5jZWQgY2F0YXN0cm9waGljIHN0cnVjdHVyYWwgZmFpbHVyZSB3aXRoIHdhcnBpbmcgYW5kIGZyYWN0dXJlLiBUaGUgY2F1c2VzIG9mIHdhcnBpbmcgYW5kIGZyYWN0dXJlIGFyZSB1bmtub3duLlwiLFxuICAgICAgICAgICAgXCJmdW5jdGlvbmFsaXR5X2xvc3NcIiAgOiBcIlVzZSBhcyBhbiBlYXRpbmcgc3VyZmFjZS5cIixcbiAgICAgICAgICAgIFwib3BlcmF0aW9uYWxfZmFjdG9yXCIgIDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcGVyYXRpb25hbF9mYWN0b3JfdHlwZVwiICAgICAgICA6IFwiTW9pc3R1cmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcGVyYXRpb25hbF9mYWN0b3JfZGVzY3JpcHRpb25cIiA6IFwiRXhwb3N1cmUgdG8gbW9pc3R1cmUgaW4gZGlzaHdhc2hlci5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wZXJhdGlvbmFsX2ZhY3Rvcl90eXBlXCIgICAgICAgIDogXCJUZW1wZXJhdHVyZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wZXJhdGlvbmFsX2ZhY3Rvcl9kZXNjcmlwdGlvblwiIDogXCJFeHBvc3VyZSB0byBoaWdoIHRlbXBlcmF0dXJlcyBpbiBkaXNod2FzaGVyLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgfSxcblxuICAgICAgICBcInJlZmVyZW5jZXNcIiA6IFtdXG5cbiAgICB9XG5cbn0iLCIvKiogXG4gICAgQGZ1bmN0aW9uIGlzU3RyaW5nXG5cbiAgICBAYXJnIHZhbCA6IHsgQW55IH1cbiAgICBAcmV0dXJuICA6IHsgQm9vbGVhbiB9IFxuKi8gXG5leHBvcnQgY29uc3QgaXNTdHJpbmcgPSAoIHZhbCApID0+IHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnO1xuXG4vKiogXG4gICAgQGZ1bmN0aW9uIGlzQXJyYXlcblxuICAgIEBhcmcgdmFsIDogeyBBbnkgfVxuICAgIEByZXR1cm4gIDogeyBCb29sZWFuIH0gXG4qLyBcbmV4cG9ydCBjb25zdCBpc0FycmF5ICA9ICggdmFsICkgPT4gQXJyYXkuaXNBcnJheSggdmFsICk7XG5cbi8qKiBcbiAgICBAZnVuY3Rpb24gaXNPYmplY3RcblxuICAgIEBhcmcgdmFsIDogeyBBbnkgfVxuICAgIEByZXR1cm4gIDogeyBCb29sZWFuIH0gXG4qLyBcbmV4cG9ydCBjb25zdCBpc09iamVjdCA9ICggdmFsICkgPT4gdmFsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnICYmIHZhbC5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0OyIsImltcG9ydCB7IGRpc3BsYXlIZWFkZXJzLCB1bmtub3duT2JqZWN0IH0gZnJvbSAnLi9jb25zdGFudHMuanMnO1xuaW1wb3J0IHsgZ2VuZXJhdGVSZWNvcmRIdG1sIH0gICAgICAgICAgICBmcm9tICcuL3RlbXBsYXRlcy5qcyc7XG5pbXBvcnQgeyBkYXRhYmFzZSB9IFx0XHRcdFx0ICAgICBmcm9tICcuL2RhdGFiYXNlLmpzJztcblxuLyoqXG5cdEBmdW5jdGlvbiBidWlsZEhlYWRlcnNcblx0XG5cdEBhcmcgZGF0YWJhc2UgOiB7IE9iamVjdCB9IFxuXHRAcmV0dXJuICAgICAgIDogeyBPYmplY3QgfSAgICAgXG4qL1xuY29uc3QgYnVpbGRIZWFkZXJzID0gKCkgPT5cbntcblx0bGV0IGhlYWRlcnMgICAgICAgID0geyAuLi5kaXNwbGF5SGVhZGVycyB9O1xuXHRjb25zdCBkYXRhYmFzZUtleXMgPSBPYmplY3Qua2V5cyggZGF0YWJhc2Uub2JqZWN0ICk7XG5cblx0Zm9yKCBsZXQga2V5IGluIGhlYWRlcnMgKVxuXHR7XG5cdFx0aWYoICFkYXRhYmFzZUtleXMuaW5jbHVkZXMoIGtleSApICkgZGVsZXRlIGhlYWRlcnNba2V5XVxuXHR9XG5cblx0cmV0dXJuIGhlYWRlcnM7XG59O1xuXG4vKipcblx0QGZ1bmN0aW9uIGNyZWF0ZVJlY29yZFxuXHRcblx0QHJldHVybiA6IHsgU3RyaW5nIH0gICAgIFxuKi9cbmNvbnN0IGNyZWF0ZVJlY29yZEh0bWwgPSAoKSA9Plxue1xuXHRjb25zdCByZWNvcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xuXG5cdGlmKCBkYXRhYmFzZS5oYXNPd25Qcm9wZXJ0eSggJ29iamVjdCcgKSApXG5cdHtcblx0XHRjb25zdCB0aXRsZSAgICAgPSBkYXRhYmFzZS5vYmplY3QubmFtZSB8fCB1bmtub3duT2JqZWN0O1xuXHRcdGNvbnN0IGhlYWRlcnMgICA9IGJ1aWxkSGVhZGVycygpO1xuXHRcdGNvbnN0IGlubmVySHRtbCA9IGdlbmVyYXRlUmVjb3JkSHRtbCggaGVhZGVycywgdGl0bGUgKTtcblxuXHRcdHJlY29yZC5pbm5lckhUTUwgPSBpbm5lckh0bWw7XG5cdH1cblxuXHRyZXR1cm4gcmVjb3JkO1xufTtcblxuXG4vLyBJbml0aWF0ZSBmYWlsdXJlIHJlY29yZFxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCggY3JlYXRlUmVjb3JkSHRtbCgpICk7IiwiaW1wb3J0IHsgaHRtbENsYXNzLCBkaXNwbGF5TGluZXMsIGRhdGFiYXNlS2V5cyB9IGZyb20gJy4vY29uc3RhbnRzLmpzJztcbmltcG9ydCB7IGlzU3RyaW5nLCBpc0FycmF5LCBpc09iamVjdCB9ICAgICAgICAgICBmcm9tICcuL2hlbHBlcnMuanMnO1xuaW1wb3J0IHsgZGF0YWJhc2UgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4vZGF0YWJhc2UuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVSZWNvcmRIdG1sICggaGVhZGVycywgdGl0bGUgKVxueyBcbiAgICBsZXQgaW5uZXJIdG1sID0gYDxoMyBjbGFzcz1cIiR7IGh0bWxDbGFzcy50aXRsZSB9XCI+JHsgdGl0bGUgfTwvaDM+YDtcblxuICAgIGZvciggbGV0IGhlYWRlciBpbiBoZWFkZXJzIClcbiAgICB7XG4gICAgICAgIGxldCBtb2R1bGUgPSBkYXRhYmFzZS5vYmplY3RbaGVhZGVyXTtcblxuICAgICAgICBpbm5lckh0bWwgKz0gZ2VuZXJhdGVNb2R1bGVIdG1sKCBtb2R1bGUsIGhlYWRlciApO1xuICAgIH1cblxuICAgIHJldHVybiBpbm5lckh0bWw7XG59O1xuXG4vKiogXG4gICAgQGZ1bmN0aW9uIGdlbmVyYXRlTW9kdWxlSHRtbFxuXG4gICAgQGFyZyBtb2R1bGUgOiB7IE9iamVjdCB9XG4gICAgQGFyZCBoZWFkZXIgOiB7IFN0cmluZyB9XG4gICAgQHJldHVybiAgICAgOiB7IFN0cmluZyB9IFxuKi8gXG5jb25zdCBnZW5lcmF0ZU1vZHVsZUh0bWwgPSAoIG1vZHVsZSwgaGVhZGVyICkgPT5cbntcbiAgICBjb25zdCBpbm5lckh0bWwgPSBnZW5lcmF0ZUlubmVySHRtbCggbW9kdWxlLCBoZWFkZXIgKTtcblxuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cIiR7IGh0bWxDbGFzcy5tb2R1bGUgfVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIkeyBodG1sQ2xhc3MubW9kdWxlSGVhZGVyIH1cIj4keyBoZWFkZXIgfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIkeyBodG1sQ2xhc3Muc3VibW9kdWxlIH1cIj4keyBpbm5lckh0bWwgfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+YDtcbn07XG5cbi8qKiBcbiAgICBAZnVuY3Rpb24gZ2VuZXJhdGVTdWJtb2R1bGVIdG1sXG5cbiAgICBAYXJnIHN1YmhlYWRlciA6IHsgU3RyaW5nIH1cbiAgICBAcmV0dXJuICAgICAgICA6IHsgU3RyaW5nIH0gXG4qLyBcbmNvbnN0IGdlbmVyYXRlU3VibW9kdWxlSHRtbCA9ICggc3ViSGVhZGVyICkgPT5cbiAgICBgPHAgY2xhc3M9XCIkeyBodG1sQ2xhc3Muc3VibW9kdWxlSGVhZGVyIH1cIj4keyBzdWJIZWFkZXIgfTwvcD5gXG5cbi8qKlxuICAgIEBmdW5jdGlvbiBnZW5lcmF0ZVR5cGVMaW5lSHRtbFxuXG4gICAgQGFyZyB0eXBlICAgICAgICA6IHsgU3RyaW5nIH1cbiAgICBAYXJnIHN1YnR5cGUgICAgIDogeyBTdHJpbmcgfVxuICAgIEBhcmcgZGVzY3JpcHRpb24gOiB7IFN0cmluZyB9XG4gICAgQHJldHVybiAgICAgICAgICA6IHsgU3RyaW5nIH0gXG5cbiAgICBpZS4gJ01vbGRpbmcgKENvbXByZXNzaW9uKSA6IFRoZSBpdGVtIHdhcyBjb21wcmVzc2VkIGF0IGhpZ2ggaGVhdCdcbiovIFxuY29uc3QgZ2VuZXJhdGVUeXBlTGluZUh0bWwgPSAoIHR5cGUsIHN1YnR5cGUsIGRlc2NyaXB0aW9uICkgPT5cbntcbiAgICAvLyBJZiB0aGVyZSBpcyBubyBzdWJ0eXBlLCBkbyBub3QgaW5jbHVkZSBpdCBpbiB0aGUgbGluZVxuICAgIHN1YnR5cGUgPSBzdWJ0eXBlID8gYCAoJHsgc3VidHlwZSB9KWAgOiAnJztcblxuICAgIHJldHVybiBgPHAgY2xhc3M9XCIkeyBodG1sQ2xhc3MubGluZSB9XCI+XG4gICAgICAgICAgICAgICAgJHsgdHlwZSB9JHsgc3VidHlwZSB9OiAkeyBkZXNjcmlwdGlvbiB9XG4gICAgICAgICAgICA8L3A+YFxufTtcblxuLyoqXG4gICAgQGZ1bmN0aW9uIGdlbmVyYXRlU2luZ2xlTGluZUh0bWxcblxuICAgIEBhcmcgZGVzY3JpcHRpb24gOiB7IFN0cmluZyB9XG4gICAgQHJldHVybiAgICAgICAgICA6IHsgU3RyaW5nIH0gXG4qLyBcbmNvbnN0IGdlbmVyYXRlU2luZ2xlTGluZUh0bWwgPSAoIGRlc2NyaXB0aW9uICkgPT5cbiAgICBgPHAgY2xhc3M9XCIkeyBodG1sQ2xhc3MubGluZSB9XCI+JHsgZGVzY3JpcHRpb24gfTwvcD5gXG5cbi8qKlxuICAgIEBmdW5jdGlvbiBnZW5lcmF0ZU11bHRpcGxlTGluZUh0bWxcblxuICAgIEBhcmcgbGluZXMgOiB7IEFycmF5IH1cbiAgICBAcmV0dXJuICAgIDogeyBTdHJpbmcgfSBcbiovIFxuY29uc3QgZ2VuZXJhdGVNdWx0aXBsZUxpbmVIdG1sID0gKCBsaW5lcyApID0+XG57XG4gICAgbGV0IGxpID0gYGA7XG5cbiAgICBmb3IoIGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrIClcbiAgICB7XG4gICAgICAgIGxpICs9IGA8bGkgY2xhc3M9XCIkeyBodG1sQ2xhc3MubGlMaW5lcyB9XCI+JHsgbGluZXNbaV0gfTwvbGk+YFxuICAgIH1cblxuICAgIHJldHVybiBgPHVsIGNsYXNzPVwiJHsgaHRtbENsYXNzLnVsTGluZXMgfVwiPiR7IGxpIH08L3VsPmA7XG59O1xuXG4vKipcbiAgICBETyBUSElTIEJFVFRFUlxuICAgIEBmdW5jdGlvbiBnZW5lcmF0ZUlubmVyVHlwZUxpbmVIdG1sXG5cbiAgICBAYXJnIHN1YkhlYWRlciA6IHsgU3RyaW5nIH1cbiAgICBAYXJnIG1vZFZhbCAgICA6IHsgQXJyYXkgfVxuICAgIEByZXR1cm4gICAgICAgIDogeyBTdHJpbmcgfSBcbiovIFxuY29uc3QgZ2VuZXJhdGVJbm5lclR5cGVMaW5lSHRtbCA9ICggc3ViSGVhZGVyLCBtb2RWYWwgKSA9Plxue1xuICAgIGxldCBpbm5lckh0bWwgPSBgYDtcblxuICAgIGZvciggbGV0IGkgPSAwOyBpIDwgbW9kVmFsLmxlbmd0aDsgaSArKyApXG4gICAge1xuICAgICAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKCBtb2RWYWxbaV0gKTtcblxuICAgICAgICBsZXQgdHlwZUtleSAgICAgICAgPSBzdWJIZWFkZXIgKyBkYXRhYmFzZUtleXMudHlwZTtcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uS2V5ID0gc3ViSGVhZGVyICsgZGF0YWJhc2VLZXlzLmRlc2NyaXB0aW9uO1xuICAgICAgICBsZXQgc3VidHlwZUtleXMgICAgPSBcbiAgICAgICAgW1xuICAgICAgICAgICAgbW9kVmFsW2ldW3N1YkhlYWRlciArIGRhdGFiYXNlS2V5cy5zdWJ0eXBlXSxcbiAgICAgICAgICAgIG1vZFZhbFtpXVtzdWJIZWFkZXIgKyBkYXRhYmFzZUtleXMubm9ybWFsY3ldLFxuICAgICAgICAgICAgbW9kVmFsW2ldW3N1YkhlYWRlciArIGRhdGFiYXNlS2V5cy5mb3JjZXNdLFxuICAgICAgICAgICAgbW9kVmFsW2ldW3N1YkhlYWRlciArIGRhdGFiYXNlS2V5cy5mcmVxdWVuY3ldXG4gICAgICAgIF0uZmlsdGVyKCBzdWJ0eXBlS2V5ID0+IHN1YnR5cGVLZXkgIT09IHVuZGVmaW5lZCApO1xuXG4gICAgICAgIGxldCB0eXBlICAgICAgICA9IGtleXMuaW5jbHVkZXMoIHR5cGVLZXkgKSA/IG1vZFZhbFtpXVt0eXBlS2V5XSA6ICcnO1xuICAgICAgICBsZXQgc3VidHlwZSAgICAgPSBzdWJ0eXBlS2V5cy5sZW5ndGggIT09IDAgPyBzdWJ0eXBlS2V5cy5qb2luKCAnLCAnICkgOiAnJztcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0ga2V5cy5pbmNsdWRlcyggZGVzY3JpcHRpb25LZXkgKSA/IG1vZFZhbFtpXVtkZXNjcmlwdGlvbktleV0gOiAnJztcbiAgICAgICAgXG4gICAgICAgIGlubmVySHRtbCArPSBnZW5lcmF0ZVR5cGVMaW5lSHRtbCggdHlwZSwgc3VidHlwZSwgZGVzY3JpcHRpb24gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5uZXJIdG1sO1xufTtcblxuLyoqIFxuICAgIEBmdW5jdGlvbiBnZW5lcmF0ZUlubmVySHRtbFxuXG4gICAgQGFyZyBtb2R1bGUgOiB7IE9iamVjdCB9XG4gICAgQGFyZyBoZWFkZXIgOiB7IFN0cmluZyB9XG4gICAgQHJldHVybiAgICAgOiB7IFN0cmluZyB9IFxuKi8gXG5jb25zdCBnZW5lcmF0ZUlubmVySHRtbCA9ICggbW9kdWxlLCBoZWFkZXIgKSA9PlxueyAgIFxuICAgIGxldCBpbm5lckh0bWwgPSBgYDtcblxuICAgIGZvciggbGV0IGtleSBpbiBtb2R1bGUgKVxuICAgIHtcbiAgICAgICAgbGV0IHNpbmdsZUxpbmUgICA9IGBgO1xuICAgICAgICBsZXQgdHlwZUxpbmUgICAgID0gYGA7XG4gICAgICAgIGxldCBtdWx0aXBsZUxpbmUgPSBgYDtcblxuICAgICAgICBjb25zdCBzdWJIZWFkZXIgICAgID0gZGlzcGxheUxpbmVzW2hlYWRlcl1ba2V5XTtcbiAgICAgICAgY29uc3QgbW9kVmFsICAgICAgICA9IG1vZHVsZVtrZXldO1xuICAgICAgICBjb25zdCBzdWJtb2R1bGVIdG1sID0gZ2VuZXJhdGVTdWJtb2R1bGVIdG1sKCBzdWJIZWFkZXIgKTtcblxuICAgICAgICBpZiAoIGlzU3RyaW5nKCBtb2RWYWwgKSApIFxuICAgICAgICB7XG4gICAgICAgICAgICBzaW5nbGVMaW5lID0gZ2VuZXJhdGVTaW5nbGVMaW5lSHRtbCggbW9kVmFsICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiggaXNBcnJheSggbW9kVmFsICkgKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiggaXNTdHJpbmcoIG1vZFZhbFswXSApICkgXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbXVsdGlwbGVMaW5lID0gZ2VuZXJhdGVNdWx0aXBsZUxpbmVIdG1sKCBtb2RWYWwgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoIGlzT2JqZWN0KCBtb2RWYWxbMF0gKSApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZUxpbmUgPSBnZW5lcmF0ZUlubmVyVHlwZUxpbmVIdG1sKCBrZXksIG1vZFZhbCApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaW5uZXJIdG1sICs9IHN1Ym1vZHVsZUh0bWwgKyBzaW5nbGVMaW5lICsgbXVsdGlwbGVMaW5lICsgdHlwZUxpbmU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGlubmVySHRtbDtcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==