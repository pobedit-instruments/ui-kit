import React from 'react';

import AntSelect, {
    OptionProps as SelectOptionProps,
    OptionType
} from 'antd/lib/select';

const AntSelectOption = AntSelect.Option;
const displayName = 'Select.Option';

const SelectOption: React.FunctionComponent<SelectOptionProps> = ({children, ...props}) => (
    <AntSelectOption data-test={displayName} {...props}>
        {children}
    </AntSelectOption>
);

SelectOption.displayName = displayName;

export {SelectOption};

export type {
    SelectOptionProps,
    OptionType
};
