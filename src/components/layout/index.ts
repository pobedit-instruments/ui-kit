import {FunctionComponent} from 'react';

import {
    LayoutHeader,
    LayoutHeaderProps
} from './header';

import {
    LayoutContent,
    LayoutContentProps
} from './content';

import {
    LayoutFooter,
    LayoutFooterProps
} from './footer';

import {
    LayoutSider,
    LayoutSiderProps
} from './sider';

import {
    Layout as OriginLayout,
    LayoutProps
} from './layout';

type LayoutType = FunctionComponent<LayoutProps> & {
    Header: typeof LayoutHeader;
    Footer: typeof LayoutFooter;
    Content: typeof LayoutContent;
    Sider: typeof LayoutSider;
}

const Layout = OriginLayout as LayoutType;

Layout.Content = LayoutContent;
Layout.Footer = LayoutFooter;
Layout.Header = LayoutHeader;
Layout.Sider = LayoutSider;

export {Layout};

export type {
    LayoutProps,
    LayoutHeaderProps,
    LayoutContentProps,
    LayoutFooterProps,
    LayoutSiderProps
};
