import React from 'react';

import AntButton, {ButtonGroupProps} from 'antd/lib/button';

const AntButtonGroup = AntButton.Group;
const displayName = 'Button.Group';

const ButtonGroup: React.FunctionComponent<ButtonGroupProps> = ({children, ...props}) => (
    <AntButtonGroup data-test={displayName} {...props}>
        {children}
    </AntButtonGroup>
);

ButtonGroup.displayName = displayName;

export {ButtonGroup};
export type {ButtonGroupProps};
