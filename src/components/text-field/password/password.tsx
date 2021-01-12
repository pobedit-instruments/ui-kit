import React from 'react';
import AntTextField, {PasswordProps} from 'antd/lib/input';

type PasswordTextFieldProps = PasswordProps & React.RefAttributes<unknown>;

const AntPasswordTextField = AntTextField.Password;
const displayName = 'TextField.Password';

const PasswordTextField = React.forwardRef<AntTextField, PasswordTextFieldProps>(({children, ...props}, ref) => (
    <AntPasswordTextField data-test={displayName}
                          ref={ref}
                          {...props}
    >
        {children}
    </AntPasswordTextField>
));

PasswordTextField.displayName = displayName;

export {PasswordTextField};
export type {PasswordTextFieldProps};
