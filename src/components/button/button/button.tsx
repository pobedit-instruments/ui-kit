import React from 'react';
import AntButton, {ButtonProps} from 'antd/lib/button';

const displayName = 'Button';

const Button: React.FunctionComponent<ButtonProps> = ({children, ...props}) => (
    <AntButton data-test={displayName} {...props}>
        {children}
    </AntButton>
);

Button.displayName = displayName;

export {Button};
export type {ButtonProps};

export type {
    ButtonShape,
    ButtonSize,
    ButtonType
} from 'antd/lib/button';
