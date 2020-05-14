export const recordDatabase =
{

    "object" :
    {
        "id"          : "1",
        "name"        : "Bob the Builder Plate",
        "inscription" : ["Home Presence", "homepresence.com", "2007 HIT/K Chapman", "Cup and fork symbol", "Crossed-out microwave symbol", "Recycling symbol with 7", "Do not microwave", "Hand wash only"],
        "feature"     : [
                            {
                                "feature_type"        : "Ridge",
                                "feature_description" : "Bottom of plate."
                            } ]
    },

    "material" :
    {
        "fulle_name"       : "Melamine formaldehyde",
        "class"            : [
                                {
                                    "class_type"    : "Polymer",
                                    "class_subtype" : "Thermoset plastic"
                                } 
                            ],
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
        "record"              : [
                                    {
                                        "record_type"        : "Maintenance",
                                        "record_description" : "Cleaned in dishwasher."
                                    } ],
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

    "references" : 
    [
        {
           "page"       : "backgroundEvidence",
           "viewerId"   : "1",
           "references" : 
           [
                "Melamine Formaldehyde. CESEdupack 2019, Granata Design Limited, Cambridge, UK, 2019.",
                "Characterization and Failure Analysis of Plastics. ASM International, Materials Park, OH, 2003.",
                "Synthetic Resins Technology Handbook. NIIR Board of Consultants and Engineers, Asia Pacific Business Press Inc., 2005."
           ] 

        }
    ],

    "manifests":
    [
        {
            "page"     : "backgroundEvidence",
            "viewerId" : "1",
            "path"     : "/IIIF-image-server/img/derivatives/iiif/compiled/bob_the_builder/background_manifest.json"
        },
        {
            "page"     : "photoEvidence",
            "viewerId" : "2",
            "path"     : "/IIIF-image-server/img/derivatives/iiif/compiled/bob_the_builder/photo_manifest.json"
        }
    ]

};
