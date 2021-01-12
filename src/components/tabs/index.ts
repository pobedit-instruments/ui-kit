import {
    Tabs as OriginalTabs,
    TabsProps
} from './tabs';

import {
    TabsTab,
    TabsTabProps
} from './tab';

type TabsType = typeof OriginalTabs & {
    Tab: typeof TabsTab;
};

const Tabs = OriginalTabs as TabsType;

Tabs.Tab = TabsTab;

export {Tabs};

export type {
    TabsProps,
    TabsTabProps
};

export type {
    TabsType,
    TabsPosition
} from 'antd/lib/tabs';
