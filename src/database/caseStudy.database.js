export const database =
{

    "object" :
    {
        "id"   : "1",
        "name" : "Bob the Builder Plate",
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

    "references" : []

};

export const visible_prompts =
{
    object :
    [
        'inscription',
        'feature'
    ],

    material :
    [
        'name',
        'crystallinity',
        'class',
        'subclass',
        'recyclability'
    ],

    processing :
    [
        'treatment',             
        'procedure',             
        'residual_stress',       
        'residual_stress_force' 
    ],

    environment :
    [
        'loading'
    ],

    use :
    [
        'functionality_loss',
        'operational_factor'
    ]
};