import React from 'react';
import AntBreadcrumb, {BreadcrumbProps} from 'antd/lib/breadcrumb';

const displayName = 'Breadcrumb';

const Breadcrumb: React.FunctionComponent<BreadcrumbProps> = ({...props}) => (
    <AntBreadcrumb data-test={displayName} {...props} />
);

Breadcrumb.displayName = displayName;

export {Breadcrumb};
export type {BreadcrumbProps};
