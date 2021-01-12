import React from 'react';

import AntTextField, {
    GroupProps as TextFieldGroupProps
} from 'antd/lib/input';

const AntTextFieldGroup = AntTextField.Group;
const displayName = 'TextField.Group';

const TextFieldGroup: React.FunctionComponent<TextFieldGroupProps> = ({children, ...props}) => (
    <AntTextFieldGroup data-test={displayName} {...props}>
        {children}
    </AntTextFieldGroup>
);

TextFieldGroup.displayName = displayName;

export {TextFieldGroup};
export type {TextFieldGroupProps};
