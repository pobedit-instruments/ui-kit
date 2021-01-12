import React from 'react';

import AntPagination, {
    PaginationProps,
    PaginationConfig
} from 'antd/lib/pagination';

const displayName = 'Pagination';

const Pagination: React.FunctionComponent<PaginationProps> = ({...props}) => (
    <AntPagination data-test={displayName}
                   size="small"
                   {...props}
    />
);

Pagination.displayName = displayName;

export {Pagination};

export type {
    PaginationProps,
    PaginationConfig
};
