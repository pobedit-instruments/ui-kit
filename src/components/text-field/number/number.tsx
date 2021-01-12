import React from 'react';

import AntNumberTextField, {
    InputNumberProps,
    OmitAttrs
} from 'antd/lib/input-number';

type NumberTextFieldProps = InputNumberProps & React.RefAttributes<unknown>;

const displayName = 'TextField.Number';
const DEFAULT_WIDTH = '100%';

const NumberTextField = React.forwardRef<unknown, NumberTextFieldProps>(({children, ...props}, ref) => (
    <AntNumberTextField data-test={displayName}
                        style={{width: DEFAULT_WIDTH}}
                        ref={ref}
                        {...props}
    >
        {children}
    </AntNumberTextField>
));

NumberTextField.displayName = displayName;

export {NumberTextField};

export type {
    NumberTextFieldProps,
    OmitAttrs
};
