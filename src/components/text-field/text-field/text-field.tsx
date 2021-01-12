import React from 'react';
import AntTextField, {InputProps} from 'antd/lib/input';

const displayName = 'TextField';

const TextField = React.forwardRef<AntTextField, InputProps>(({children, ...props}, ref) => (
    <AntTextField data-test={displayName}
                  ref={ref}
                  {...props}
    >
        {children}
    </AntTextField>
));

TextField.displayName = displayName;

export {TextField};
export type {InputProps as TextFieldProps};
