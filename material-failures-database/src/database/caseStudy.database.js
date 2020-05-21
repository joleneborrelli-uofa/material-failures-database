export const caseStudyDatabase =
{

    "object" :
    {
        "object_id" : "1",
        "name"      : "Bob the Builder Plate",
    },

    "material" :
    {
        "additional_prompt" : 
        [
            "Thinking about the material family, would you agree that the plate is made of both the materials stated in the response from the manufacturer? Why or why not?"
        ]
    },

    "environment" :
    {
        "geographic_location" : "Edmonton, AB, Canada",
        "location"            : [ 
                                    {
                                        "location_type"        : "Indoor",
                                        "location_description" : "Kitchen and/or dining room."
                                    } ]
    },

    "use" :
    {
        "problem_statement" : "The Bob the Builder Plate was removed from service. It experienced catastrophic structural failure with warping and fracture. The causes of warping and fracture are unknown.",
        "record"            : [
                                {
                                    "record_type"        : "Maintenance",
                                    "record_description" : "Cleaned in dishwasher."
                                } ]
    },

    "references" : [],

    "manifests":
    [
        {
            "page" : "background",
            "path" : "/IIIF-image-server/img/derivatives/iiif/compiled/bob_the_builder/background_manifest.json"
        },
        {
            "page" : "photo",
            "path" : "/IIIF-image-server/img/derivatives/iiif/compiled/bob_the_builder/photo_manifest.json"
        }
    ]

};

export const visibility =
{
    object :
    {
        rating        : 'off',
        inscription   : 'on',
        serial_number : 'off',
        feature       : 'on'
    },

    material :
    {
        full_name         : 'on',
        'class'           : 'on',
        crystallinity     : 'on',
        alloy_designation : 'off',
        grade             : 'off',
        recyclability     : 'on',
        biodegradability  : 'off',
        toxicity          : 'off'
    },

    processing :
    {
        machining       : 'off',
        joining         : 'off',
        manufacturer    : 'off',
        date            : 'off',
        location        : 'off',
        plant           : 'off',
        treatment       : 'on',
        shaping         : 'on',
        residual_stress : 'on'
    },

    environment :
    {
        light_exposure      : 'off',
        ambient             : 'off',
        loading             : 'on',
        weather_exposure    : 'off',
        storage_location    : 'off',
        geographic_location : 'off',
        stress_orientation  : 'off'
    },

    use :
    {
        specification           : 'off',
        record                  : 'off',
        operation               : 'off',
        operational_factor      : 'on',
        functionality_loss      : 'on',
        problem_statement       : 'off',
        failure_time            : 'off',
        failure_operation_stage : 'off',           
        operator                : 'off'
    }
    
};
