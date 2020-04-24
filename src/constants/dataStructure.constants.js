export const dataStructure =
{
	object :
	[
		'rating', 
		'inscription',
		'serial_number',
		'feature',
		'fractography'
	],

	material :
	[
		'name',
		{ 
			'class' : 
			[ 
				'class_subtype' 
			] 
		},
		'crystallinity',
		'alloy_designation',
		'grade',
		'recyclability',
		'biodegradability',
		'toxicity'
	],

	processing :
	[
		{
			'treatment' :
			[
				'treatment_subtype'
			]
		},
		{
			'shaping' :
			[
				'shaping_subtype'
			]
		},
		'machining',
		'joining',
		{
			'residual_stress' :
			[
				'residual_stress_force'
			]
		},
		'manufacturer',
		'date',
		'location',
		'plant'
	],

	environment :
	[
		{
			'loading' :
			[
				'loading_frequency',
				'loading_normalcy'
			]
		},
	    'geographic_location',
	   	'weather_exposure',
	    'light_exposure',
	    'storage_location',
	    'ambient',
	    'stress_orientation'
	],

    use :
    {
        'problem_statement',
        'functionality_loss',
        'specification',
        'record',
        'failure_time',
        'failure_operation_stage',
        'operation',
        'operator',
        'operational_factor'
    }
};
