import { foreignKeys } from '../constants/foreignKey.constants.js';

export const groupedComponents =
{
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
        secondGroup :
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
        secondRadioGroup :
        {
            name        : 'residual_stress_force',
            foreignKeys : foreignKeys.processing.residual_stress_force
        }
    ]
};
