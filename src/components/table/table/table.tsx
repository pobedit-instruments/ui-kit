import React from 'react';
import AntTable, {TableProps} from 'antd/lib/table';

const displayName = 'Table';

const Table = <RecordType extends object = any>({children, ...props}: TableProps<RecordType>) => (
    <AntTable<RecordType> data-test={displayName}
                          pagination={{
                              hideOnSinglePage: true
                          }}
                          {...props}>
        {children}
    </AntTable>
);

Table.displayName = displayName;

export {Table};

export type {
    TableProps,
    TablePaginationConfig
} from 'antd/lib/table';
