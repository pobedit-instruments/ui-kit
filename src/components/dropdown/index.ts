import {
    Dropdown as OriginalDropdown,
    DropdownProps
} from './dropdown';

import {
    DropdownButton,
    DropdownButtonProps
} from './button';

type DropdownType = typeof OriginalDropdown & {
    Button: typeof DropdownButton;
};

const Dropdown = OriginalDropdown as DropdownType;

Dropdown.Button = DropdownButton;

export {Dropdown};

export type {
    DropdownProps,
    DropdownButtonProps
};
