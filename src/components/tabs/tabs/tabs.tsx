import React from 'react';
import AntTabs, {TabsProps} from 'antd/lib/tabs';

const displayName = 'Tabs';

const Tabs: React.FunctionComponent<TabsProps> = ({children, ...props}) => (
    <AntTabs data-test={displayName} {...props}>
        {children}
    </AntTabs>
);

Tabs.displayName = displayName;

export {Tabs};
export type {TabsProps};

export type {
    TabsPosition,
    TabsType
} from 'antd/lib/tabs';
