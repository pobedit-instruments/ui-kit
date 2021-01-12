import React from 'react';
import AntPopover, {PopoverProps} from 'antd/lib/popover';

const displayName = 'Popover';

const Popover: React.FunctionComponent<PopoverProps> = ({children, ...props}) => (
    <AntPopover data-test={displayName} {...props}>
        {children}
    </AntPopover>
);

Popover.displayName = displayName;

export {Popover};
export type {PopoverProps};
