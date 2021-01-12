import {
    Menu as OriginalMenu,
    MenuProps
} from './menu';

import {
    Divider,
    DividerProps as MenuDividerProps
} from './divider';

import {
    ItemGroup,
    MenuItemGroupProps
} from './item-group';

import {
    Item,
    ItemProps as MenuItemProps
} from './item';

import {
    SubMenu,
    SubMenuProps as MenuSubMenuProps
} from './sub-menu';

type MenuType = typeof OriginalMenu & {
    Divider: typeof Divider;
    Item: typeof Item;
    ItemGroup: typeof ItemGroup;
    SubMenu: typeof SubMenu;
};

const Menu = OriginalMenu as MenuType;

Menu.Divider = Divider;
Menu.Item = Item;
Menu.ItemGroup = ItemGroup;
Menu.SubMenu = SubMenu;

export {Menu};

export type {
    MenuProps,
    MenuDividerProps,
    MenuItemProps,
    MenuItemGroupProps,
    MenuSubMenuProps
};

export * from 'rc-menu/lib/interface';
