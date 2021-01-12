import {
    Checkbox as OriginalCheckbox,
    CheckboxProps,
    CheckboxChangeEvent
} from './checkbox';

import {
    CheckboxGroup,
    CheckboxGroupProps
} from './group';

type CheckboxType = typeof OriginalCheckbox & {
    Group: typeof CheckboxGroup;
};

const Checkbox = OriginalCheckbox as CheckboxType;

Checkbox.Group = CheckboxGroup;

export {Checkbox};

export type {
    CheckboxChangeEvent,
    CheckboxProps,
    CheckboxGroupProps
};
