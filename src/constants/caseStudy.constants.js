// Case Study Constants

export const caseStudy =
{
    landing :
    {
        title      : 'You\'ve been assigned the following case',
        caseTitle  : ( title ) => `The ${ title } Files`,
        caseNumber : ( objectId ) => `Case # : ${ objectId }`,
        status     : 'Status :'
    },

    photoEvidenceTitle      : `A failure occurs! On ${ new Date() }, you arrive at the scene with your handy field investigation kit and take out your camera. This is the visual evidence you collect.`,

    backgroundResearchTitle : `You head back to the office. You access literature, go online, make phone calls and write emails in order to collect background research on the case. This is the data you find.`,

    prompts :
    {
        title : 'The photos...the background research...How does it all add up? You put on your detective\'s cap and get to work.'

        object :
        {
            inscription   : 'Are there any inscriptions on the plate? What do they tell you about the plate?',
            recyclability : 'Is the plate recyclable? Does the recyclability tell you something about the material?',
            fractography  : 'Are there fractures in the plate? Draw the plate and the fractures. Determine the fracture origin(s).',
            feature       : 'What physical features are there on the plate?'
        },

        material :
        {
            name          : 'What is the plate made of?',
            crystallinity : 'What kind of crystal structure does the material have?',
            'class'       : 'What class of material is it?',
            subclass      : 'Given the material family, what is the subclass of material?'
        },

        processing :
        {
            treatment       : 'What treatment procedures did the plate have?',
            procedure       : 'What shaping procedures did the plate have?', 
            residual_stress : 
            {
                type  : 'What kind of residual stresses could have been introduced during processing?',
                force : 'What kind of forces could have been created in the plate from the residual stresses? Did the physical features on the plate play a role?'
            }
        },

        environment :
        {
            loading : 'What type of loading did the plate experience?'
        },

        use :
        {
            functionality_loss : 'What functionality was lost when the plate failed?',
            operational_factor : 'Which factors played a part in the plate’s failure during operation or maintenance?'
        },

        fault_tree :
        {
            title       : 'With the information you gathered you make a fault tree.',
            description : 'First, decide which generic factors make up the top levels of the fault tree. Then, find specific factors based on the possible mechanisms of failure.'

        }
    }

};