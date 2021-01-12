import React from 'react';
import AntMenu, {MenuItemGroupProps} from 'antd/lib/menu';

const displayName = 'Menu.ItemGroup';

const ItemGroup: React.FunctionComponent<MenuItemGroupProps> = ({...props}) => (
    <AntMenu.ItemGroup data-test={displayName} {...props} />
);

ItemGroup.displayName = displayName;

export {ItemGroup};
export type {MenuItemGroupProps};
