import React from 'react';
import AntRadio from 'antd/lib/radio';
import {RadioGroupProps as Props} from 'antd/lib/radio/interface';

type RadioGroupProps = Props & React.RefAttributes<HTMLDivElement>;

const AntRadioGroup = AntRadio.Group;
const displayName = 'Radio.Group';

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(({children, ...props}, ref) => (
    <AntRadioGroup data-test={displayName}
                   ref={ref}
                   {...props}
    >
        {children}
    </AntRadioGroup>
));

RadioGroup.displayName = displayName;

export {RadioGroup};
export type {RadioGroupProps};

export type {
    RadioGroupButtonStyle,
    RadioGroupContextProps,
    RadioGroupOptionType
} from 'antd/lib/radio/interface';
