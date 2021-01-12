import React from 'react';
import AntBreadcrumbItem, {BreadcrumbItemProps} from 'antd/lib/breadcrumb/BreadcrumbItem';

const displayName = 'Breadcrumb.Item';

const BreadcrumbItem: React.FunctionComponent<BreadcrumbItemProps> = ({...props}) => (
    <AntBreadcrumbItem data-test={displayName} {...props} />
);

BreadcrumbItem.displayName = displayName;

export {BreadcrumbItem};
export type {BreadcrumbItemProps};
