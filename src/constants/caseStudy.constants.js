// Case Study Constants

export const caseStudy =
{  
    add      : 'Add',
    next     : 'Next',
    prev     : 'Prev',
    note     : 'Notes',
    download : 'Download',
    pages  : [ 'landing', 'photo', 'background', 'prompt' ],

    landing :
    {
        title      : 'You\'ve been assigned the following case',
        caseTitle  : ( title ) => `The ${ title } Files`,
        caseNumber : ( objectId ) => `Case #: ${ objectId }`,
        status     : 'Status:'
    },

    photoEvidenceTitle      : `A failure occurs! On ${ new Date() }, you arrive at the scene with your handy field investigation kit and take out your camera.`,
    photoEvidenceSubtitle   : `This is the visual evidence you collect.`,

    backgroundResearchTitle    : `You head back to the office. To collect background research, you access literature, go online, make phone calls and write emails.`,
    backgroundResearchSubtitle : `This is the data you find.`,

    promptsTitle            : 'The photos...the background research...How does it all add up? You put on your detective\'s cap and get to work.', 

    fieldPrompts :
    {
        object :
        {
            rating        : '',
            inscription   : 'Are there any inscriptions on the object? What do they tell you about the object?',
            feature       : 'What physical features are there on the object?',
            serial_number : ''
        },

        material :
        {
            name              : 'What is the object made of?',
            crystallinity     : 'What kind of crystal structure does the material have?',
            'class'           : 'What material familiy does it belong to?',
            recyclability     : 'Is the object recyclable? Does the recyclability tell you something about the material?',
            biodegradability  : '',
            alloy_designation : '',
            grade             : '',
            toxicity          : ''

        },

        processing :
        {
            treatment             : 'What treatment procedures did the object have?',
            shaping               : 'What shaping procedures did the object have?', 
            machining             : '',
            joining               : '',
            residual_stress       : 'What kind of residual stresses could have been introduced during processing? Did the physical features on the object play a role? What kind of forces could have been created in the object from the residual stresses?',
            manufacturer          : '',
            date                  : '',
            location              : '',
            plant                 : ''
        },

        environment :
        {
            loading             : 'What type of loading did the object experience? How frequent did it occur?',
            ambient             : '',
            light_exposure      : '',
            geographic_location : '',
            stress_orientation  : '',
            weather_exposure    : '',
            storage_location    : ''
        },

        use :
        {
            functionality_loss      : 'What functionality was lost when the object failed?',
            operational_factor      : 'Which factors played a part in the object’s failure during operation or maintenance?',
            problem_statement       : '',
            failure_time            : '',
            failure_operation_stage : '',
            specification           : '',
            record                  : '',
            operation               : '',
            operator                : ''
        }
    },

    additionalPrompts:
    {
        fractography : 'Does the object have cracks and fractures? Draw the object, the cracks and the fractures. Determine the crack and fracture origin(s).',
    },

    fault_tree :
    {
        fault_tree_title       : 'With the information you gathered you make a fault tree.',
        fault_tree_description : 'First, decide which generic factors make up the top levels of the fault tree. Then, find specific factors based on the possible mechanisms of failure.'
    }

};
