import React from 'react';
import AntCheckbox, {CheckboxProps} from 'antd/lib/checkbox';

const displayName = 'Checkbox';

const Checkbox: React.FunctionComponent<CheckboxProps> = ({children, ...props}) => (
    <AntCheckbox data-test={displayName} {...props}>
        {children}
    </AntCheckbox>
);

Checkbox.displayName = displayName;

export {Checkbox};
export type {CheckboxProps};

export type {
    CheckboxChangeEvent,
    CheckboxOptionType
} from 'antd/lib/checkbox';
