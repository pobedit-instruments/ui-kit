import React from 'react';
import AntRadioButton, {RadioButtonProps} from 'antd/lib/radio/radioButton';

const displayName = 'Radio.Button';

const RadioButton = React.forwardRef<HTMLElement, RadioButtonProps & React.RefAttributes<any>>(({children, ...props}, ref) => (
    <AntRadioButton data-test={displayName}
                  ref={ref}
                  {...props}
    >
        {children}
    </AntRadioButton>
));

RadioButton.displayName = displayName;

export {RadioButton};
export type {RadioButtonProps};
