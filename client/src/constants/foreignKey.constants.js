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
            'Hole',
            'Other'
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
            'Natural materials',
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
            'Rare earth metal',
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
            'Composite forming',
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
            'Blow', 
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
            'Heat bonding',
            'Adhesives',
            'Cements',
            'Fastening',
            'Bolting',
            'Riveting',
            'Snap fits',
            'Friction bond'
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
            'Non-uniform plastic deformation',
            'Flow induced'
        ],

        residual_stress_force :
        [
            'Tensile force',
            'Compressive force',
            'Shear force'
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

        interaction_loading_normalcy :
        [
            'Normal',
            'Abnormal'
        ],

        interaction_loading:
        [
            'Axial',
            'Bending',
            'Tortional',
            'Dynamic',
            'Tensile mean',
            'Compressive mean',
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
        ],

        interaction_stress :
        [
            'Tension',
            'Compression',
            'Shear',
            'Torsion',
            'Bending'
        ],

        interaction_electromagnetic :
        [
            'Electrons and voltage',
            'Radiation'
        ],

        interaction_environment :
        [
            'Chemical',
            'Biological'
        ],

        interaction_thermal :
        [
            'High temperature',
            'Moderate temperature',
            'Low temperature'
        ],

        interaction_tribological :
        [
            'Friction',
            'Solids',
            'Fluids and particles'
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
            'Inspection'
        ],

        operation :
        [
            'Intended',
            'Actual' 
        ],

        operational_factor :
        [
            'Temperature level',
            'Speed',
            'Pressure',
            'Moisture level'
        ]
    }

};
