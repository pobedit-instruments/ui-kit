import React from 'react';
import AntSwitch, {SwitchProps} from 'antd/lib/switch';

const displayName = 'Switch';

const Switch: React.FunctionComponent<SwitchProps> = ({...props}) => (
    <AntSwitch data-test={displayName} {...props} />
);

Switch.displayName = displayName;

export {Switch};
export type {SwitchProps};

export type {
    SwitchChangeEventHandler,
    SwitchClickEventHandler,
    SwitchSize
} from 'antd/lib/switch'
