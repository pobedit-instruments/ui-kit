import React from 'react';
import AntMenu from 'antd/lib/menu';

const AntSubMenu = AntMenu.SubMenu;
const displayName = 'Menu.SubMenu';

type SubMenuProps = React.ComponentProps<typeof AntSubMenu>;

const SubMenu: React.FunctionComponent<SubMenuProps> = ({...props}) => (
    <AntSubMenu data-test={displayName} {...props} />
);

SubMenu.displayName = displayName;

export {SubMenu};
export type {SubMenuProps};
