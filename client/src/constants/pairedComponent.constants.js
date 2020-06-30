import { foreignKeys } from '../constants/foreignKey.constants.js';

export const pairedComponents =
{
    'class' :
    [
        {
            name        : 'class',
            foreignKeys : foreignKeys.material['class']
        },
        {
            name        : 'class_subtype',
            foreignKeys : foreignKeys.material.class_subtype
        }
    ],

    treatment :
    [
        {
            name        : 'treatment',
            foreignKeys : foreignKeys.processing.treatment
        },
        {
            name        : 'treatment_subtype',
            foreignKeys : foreignKeys.processing.treatment_subtype
        }
    ],

    shaping :
    [
        {
            name        : 'shaping',
            foreignKeys : foreignKeys.processing.shaping
        },
        {
            name        : 'shaping_subtype',
            foreignKeys : foreignKeys.processing.shaping_subtype
        }
    ],

    residual_stress :
    [
        {
            name        : 'residual_stress',
            foreignKeys : foreignKeys.processing.residual_stress
        },
        {
            name        : 'residual_stress_force',
            foreignKeys : foreignKeys.processing.residual_stress_force
        }
    ],

    interaction_loading :
    [
        {
            name        : 'interaction_loading',
            foreignKeys : foreignKeys.environment.interaction_loading
        },
        {
            name        : 'interaction_loading_normalcy',
            foreignKeys : foreignKeys.environment.interaction_loading_normalcy
        }
    ]
};
