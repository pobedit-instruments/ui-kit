import React from 'react';
import AntDivider, {DividerProps} from 'antd/lib/divider';

const displayName = 'Divider';

const Divider: React.FunctionComponent<DividerProps> = ({...props}) => (
    <AntDivider data-test={displayName} {...props} />
);

Divider.displayName = displayName;

export {Divider};
export type {DividerProps};
