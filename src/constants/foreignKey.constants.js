export const foreignKeys =
{

    object : 
    {
        feature : 
        [ 
            'Lip', 
            'Groove', 
            'Fillet', 
            'Ridge', 
            'Notch', 
            'Hole' 
        ]
    },

    material :
    {
        'class' : 
        [ 
            'Metals and alloys', 
            'Glasses and ceramics', 
            'Polymers',
            'Composites',
            'Natural materials'
            'Other' 
        ],

        class_subtype :
        [
            'Glass',
            'Non-technical ceramic',
            'Technical ceramic',
            'Ferrous metal',
            'Non-ferrous metal',
            'Precious metal',
            'Rare Earth metal',
            'Refractory metal',
            'Elastomer',
            'Thermoplastic',
            'Thermoset plastic',
            'Other'
        ],

        crystallinity :
        [
            'Crystalline',
            'Semi-crystalline',
            'Amorphous'
        ]
    },

    processing :
    {
        treatment :
        [
            'Surface',
            'Bulk'
        ],

        treatment_subtype :
        [
            'Boronizing',
            'Bluing',
            'Anodizing',
            'Carburizing',
            'Decarburizing',
            'Stress',
            'Heat',
            'Polishing',
            'Texturing',
            'Plating',
            'Metallizing',
            'Chromizing',
            'Painting',
            'Printing',
            'Quench',
            'Age hardening',
            'Temper',
            'Normalizing'
        ],

        shaping :
        [
            'Casting',
            'Molding',
            'Deformation',
            'Composite forming'
            'Powder',
            'Special methods'
        ],

        shaping_subtype :
        [
            'Sand', 
            'Die',
            'Investment',
            'Injection', 
            'Compression',
            'Blow molding', 
            'Rolling',
            'Forging',
            'Drawing',
            'Sintering',
            'HIPing',
            'Slip casting',
            'Hand layup',
            'Filament winding',
            'Resin transfer',
            'Rapid prototype',
            'Layup',
            'Electroform' 
        ],

        joining :
        [
            'Welding',
            'Heat Bonding',
            'Adhesives',
            'Cements',
            'Fastening',
            'Bolting',
            'Riveting',
            'Snap Fits',
            'Friction Bond'
        ],

        machining :
        [
            'Cut',
            'Turn',
            'Plane',
            'Drill',
            'Grind'
        ],

        residual_stress :
        [
            'Structural flaw',
            'Temperature variation',
            'Phase transformation',
            'Non-uniform plastic deformation'
        ],

        residual_stress_force :
        [
            'Tensile forces',
            'Compressive forces'
        ]
    },

    environment :
    {
        light_exposure :
        [
            'Natural',
            'Artificial'
        ],

        ambient :
        [
            'Central heating',
            'Ventilation',
            'Air conditioning',
            'Moisture',
            'Temperature variations'
        ],

        loading_normalcy :
        [
            'Normal',
            'Abnormal'
        ],

        // Add loading_frequency?

        loading:
        [
            'Axial',
            'Bending',
            'Tortional',
            'Dynamic',
            'Tensile Mean',
            'Compressive Mean',
            'Cyclic',
            'Suddenly applied',
            'Impact',
            'Fatigue'
        ],

        weather_exposure :
        [
            'Sun',
            'Wind',
            'Rain',
            'Ice',
            'Snow'
        ],

        storage_location :
        [
            'Indoor',
            'Outdoor'
        ]
    },

    use :
    {
        specification :
        [
            'Service',
            'Maintenance'
        ],

        record :
        [
            'Maintenance', 
            'Inspections'
        ],

        operation :
        [
            'Intended',
            'Actual' 
        ],

        operational_factor :
        [
            'Temperature levels',
            'Speed',
            'Pressure',
            'Moisture levels'
        ]
    }

};
