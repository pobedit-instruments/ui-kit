import React from 'react';
import AntLayout, {LayoutProps} from 'antd/lib/layout';

const displayName = 'Layout';

const Layout: React.FunctionComponent<LayoutProps> = ({...props}) => (
    <AntLayout data-test={displayName} {...props} />
);

Layout.displayName = displayName;

export type {LayoutProps};
export {Layout};
