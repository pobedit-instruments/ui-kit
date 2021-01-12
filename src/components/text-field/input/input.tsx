import React from 'react';
import AntTextField, {InputProps} from 'antd/lib/input';

const AntTextFieldInput = AntTextField;
const displayName = 'TextField.Input';

const TextFieldInput = React.forwardRef<AntTextField, InputProps>(({children, ...props}, ref) => (
    <AntTextFieldInput data-test={displayName}
                       ref={ref}
                       {...props}
    >
        {children}
    </AntTextFieldInput>
));

TextFieldInput.displayName = displayName;

export {TextFieldInput};
export type {InputProps as TextFieldInputProps};
