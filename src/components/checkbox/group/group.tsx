import React from 'react';
import AntCheckbox, {CheckboxGroupProps} from 'antd/lib/checkbox';

const AntCheckboxGroup = AntCheckbox.Group;
const displayName = 'Checkbox.Group';

const CheckboxGroup: React.FunctionComponent<CheckboxGroupProps> = ({children, ...props}) => (
    <AntCheckboxGroup data-test={displayName} {...props}>
        {children}
    </AntCheckboxGroup>
);

CheckboxGroup.displayName = displayName;

export {CheckboxGroup};
export type {CheckboxGroupProps};
