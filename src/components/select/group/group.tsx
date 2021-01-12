import React from 'react';
import AntSelect from 'antd/lib/select';

import {
    OptGroupProps as SelectGroupProps,
    OptionGroupFC
} from 'rc-select/lib/OptGroup';

const AntSelectGroup = AntSelect.OptGroup;
const displayName = 'Select.Group';

const SelectGroup: React.FunctionComponent<SelectGroupProps> = ({children, ...props}) => (
    <AntSelectGroup data-test={displayName} {...props}>
        {children}
    </AntSelectGroup>
);

SelectGroup.displayName = displayName;

export {SelectGroup};
export type {SelectGroupProps, OptionGroupFC};
