import React from 'react';

import AntDropdown, {
    DropDownProps as DropdownProps
} from 'antd/lib/dropdown';

const displayName = 'Dropdown';

const Dropdown: React.FunctionComponent<DropdownProps> = ({children, ...props}) => (
    <AntDropdown data-test={displayName} {...props}>
        {children}
    </AntDropdown>
);

Dropdown.displayName = displayName;

export {Dropdown};
export type {DropdownProps};
