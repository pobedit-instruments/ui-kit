import React from 'react';
import AntLayout, {LayoutProps as LayoutFooterProps} from 'antd/lib/layout';

const AntLayoutFooter = AntLayout.Footer;
const displayName = 'Layout.Footer';

const LayoutFooter: React.FunctionComponent<LayoutFooterProps> = ({...props}) => (
    <AntLayoutFooter data-test={displayName} {...props} />
);

LayoutFooter.displayName = displayName;

export type {LayoutFooterProps};
export {LayoutFooter};
