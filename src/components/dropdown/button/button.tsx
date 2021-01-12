import React from 'react';
import AntDropdownButton, {DropdownButtonProps} from 'antd/lib/dropdown/dropdown-button';

const displayName = 'Dropdown.Button';

const DropdownButton: React.FunctionComponent<DropdownButtonProps> = ({...props}) => (
    <AntDropdownButton data-test={displayName} {...props} />
);

DropdownButton.displayName = displayName;

export {DropdownButton};
export type {DropdownButtonProps};
