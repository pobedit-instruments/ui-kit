import React from 'react';
import AntBreadcrumbSeparator from 'antd/lib/breadcrumb/BreadcrumbSeparator';

type BreadcrumbSeparatorProps = React.ComponentProps<typeof AntBreadcrumbSeparator>;

const displayName = 'Breadcrumb.Separator';

const BreadcrumbSeparator: React.FunctionComponent<BreadcrumbSeparatorProps> = ({...props}) => (
    <AntBreadcrumbSeparator data-test={displayName} {...props} />
);

BreadcrumbSeparator.displayName = displayName;

export {BreadcrumbSeparator};
export type {BreadcrumbSeparatorProps};
