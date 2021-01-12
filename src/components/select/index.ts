import {
    Select as OriginalSelect,
    SelectProps,
} from './select';

import {
    SelectGroup,
    SelectGroupProps
} from './group';

import {
    SelectOption,
    SelectOptionProps
} from './option';

type SelectType = typeof OriginalSelect & {
    Group: typeof SelectGroup;
    Option: typeof SelectOption;
};

const Select = OriginalSelect as SelectType;

Select.Group = SelectGroup;
Select.Option = SelectOption;

export {Select};

export type {
    SelectProps,
    SelectGroupProps,
    SelectOptionProps
};

export * from 'rc-select/lib/interface';
export * from 'rc-select/lib/interface/generator';
