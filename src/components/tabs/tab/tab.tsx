import React from 'react';

import AntTabs, {
    TabPaneProps as TabsTabProps
} from 'antd/lib/tabs';

const AntTabsTab = AntTabs.TabPane;
const displayName = 'Tabs.Tab';

const TabsTab: React.FunctionComponent<TabsTabProps> = ({children, ...props}) => (
    <AntTabsTab data-test={displayName} {...props}>
        {children}
    </AntTabsTab>
);

TabsTab.displayName = displayName;

export {TabsTab};
export type {TabsTabProps};

export type {
    TabsType,
    TabsPosition
} from 'antd/lib/tabs';
