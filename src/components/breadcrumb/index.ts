import {
    Breadcrumb as OriginalBreadcrumb,
    BreadcrumbProps
} from './breadcrumb';

import {
    BreadcrumbItem,
    BreadcrumbItemProps
} from './item';

import {
    BreadcrumbSeparator,
    BreadcrumbSeparatorProps
} from './separator';

type BreadcrumbType = typeof OriginalBreadcrumb & {
    Item: typeof BreadcrumbItem;
    Separator: typeof BreadcrumbSeparator;
};

const Breadcrumb = OriginalBreadcrumb as BreadcrumbType;

Breadcrumb.Item = BreadcrumbItem;
Breadcrumb.Separator = BreadcrumbSeparator;

export {Breadcrumb};

export type {
    BreadcrumbProps,
    BreadcrumbItemProps,
    BreadcrumbSeparatorProps
};
