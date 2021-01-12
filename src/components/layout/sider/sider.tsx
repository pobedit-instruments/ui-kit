import React from 'react';
import AntLayout, {SiderProps as LayoutSiderProps} from 'antd/lib/layout';

const AntLayoutSider = AntLayout.Sider;
const displayName = 'Layout.Sider';

const LayoutSider: React.FunctionComponent<LayoutSiderProps> = ({...props}) => (
    <AntLayoutSider data-test={displayName} {...props} />
);

LayoutSider.displayName = displayName;

export type {LayoutSiderProps};
export {LayoutSider};
