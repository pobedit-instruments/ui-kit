import React from 'react';

import AntDrawer, {DrawerProps as PanelProps} from 'antd/lib/drawer';

const displayName = 'Panel';

const Panel: React.FunctionComponent<PanelProps> = ({children, ...props}) => (
    <AntDrawer data-test={displayName} {...props}
    >
        {children}
    </AntDrawer>
);

Panel.displayName = displayName;

export {Panel};
export type {PanelProps};
