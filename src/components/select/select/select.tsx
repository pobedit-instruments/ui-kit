import React from 'react';
import AntSelect from 'antd/lib/select';

type SelectProps = React.ComponentProps<typeof AntSelect>;

const displayName = 'Select';

const Select: React.FunctionComponent<SelectProps> = ({children, ...props}) => (
    <AntSelect data-test={displayName} {...props}>
        {children}
    </AntSelect>
);

Select.displayName = displayName;

export {Select};
export type {SelectProps};

export type {
    SelectValue,
    InternalSelectProps,
    LabeledValue,
    RefSelectProps
} from 'antd/lib/select';
