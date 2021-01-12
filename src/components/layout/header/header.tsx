import React from 'react';
import AntLayout, {LayoutProps as LayoutHeaderProps} from 'antd/lib/layout';

const AntLayoutHeader = AntLayout.Header;
const displayName = 'Layout.Header';

const LayoutHeader: React.FunctionComponent<LayoutHeaderProps> = ({...props}) => (
    <AntLayoutHeader data-test={displayName} {...props} />
);

LayoutHeader.displayName = displayName;

export type {LayoutHeaderProps};
export {LayoutHeader};
