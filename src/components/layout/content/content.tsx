import React from 'react';
import AntLayout, {LayoutProps as LayoutContentProps} from 'antd/lib/layout';

const AntLayoutContent = AntLayout.Content;
const displayName = 'Layout.Content';

const LayoutContent: React.FunctionComponent<LayoutContentProps> = ({...props}) => (
    <AntLayoutContent data-test={displayName} {...props} />
);

LayoutContent.displayName = displayName;

export type {LayoutContentProps};
export {LayoutContent};
