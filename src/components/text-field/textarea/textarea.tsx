import React from 'react';
import {TextAreaRef} from 'antd/lib/input/TextArea';
import AntTextField, {TextAreaProps} from 'antd/lib/input';

type TextareaTextFieldProps = TextAreaProps & React.RefAttributes<TextAreaRef>;

const AntTextareaTextField = AntTextField.TextArea;
const displayName = 'TextField.Textarea';

const TextareaTextField = React.forwardRef<HTMLElement, TextareaTextFieldProps>(({children, ...props}, ref) => (
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
