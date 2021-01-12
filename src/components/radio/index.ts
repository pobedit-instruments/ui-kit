import {
    Radio as OriginalRadio,
    RadioChangeEvent,
    RadioProps
} from './radio';

import {
    RadioGroup,
    RadioGroupProps
} from './group';

import {
    RadioButton,
    RadioButtonProps
} from './button';

type CheckboxType = typeof OriginalRadio & {
    Group: typeof RadioGroup;
    Button: typeof RadioButton;
};

const Radio = OriginalRadio as CheckboxType;

Radio.Group = RadioGroup;
Radio.Button = RadioButton;

export {Radio};

export type {
    RadioProps,
    RadioGroupProps,
    RadioButtonProps,
    RadioChangeEvent
};
