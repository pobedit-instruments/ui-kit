import React from 'react';
import AntTextField, {TextAreaProps as TextareaTextFieldProps} from 'antd/lib/input';

const AntTextareaTextField = AntTextField.TextArea;
const displayName = 'TextField.Textarea';

const TextareaTextField = React.forwardRef<AntTextField, TextareaTextFieldProps>(({children, ...props}, ref) => (
    <AntTextareaTextField data-test={displayName}
                          ref={ref}
                          {...props}
    >
        {children}
    </AntTextareaTextField>
));

TextareaTextField.displayName = displayName;

export {TextareaTextField};
export type {TextareaTextFieldProps};
