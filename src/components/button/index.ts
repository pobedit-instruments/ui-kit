import {
    Button as OriginalButton,
    ButtonProps,
    ButtonShape,
    ButtonSize,
    ButtonType
} from './button';

import {
    ButtonGroup,
    ButtonGroupProps
} from './group';

type CheckboxType = typeof OriginalButton & {
    Group: typeof ButtonGroup;
};

const Button = OriginalButton as CheckboxType;

Button.Group = ButtonGroup;

export {Button};

export type {
    ButtonShape,
    ButtonSize,
    ButtonType,
    ButtonProps,
    ButtonGroupProps
};
