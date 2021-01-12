import React from 'react';
import AntMenu from 'antd/lib/menu';

const displayName = 'Menu.Divider';

type DividerProps = React.ComponentProps<typeof AntMenu.Divider>;

const Divider: React.FunctionComponent<DividerProps> = ({...props}) => (
    <AntMenu.Divider data-test={displayName} {...props} />
);

export {Divider};
export type {DividerProps};
