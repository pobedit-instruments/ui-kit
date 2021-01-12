import {
    Table as OriginalTable,
    TableProps,
    TablePaginationConfig
} from './table';

import {
    TableColumn,
    TableColumnProps
} from './column';

import {
    TableColumnGroup,
    TableColumnGroupProps
} from './column-group';

type AccordionType = typeof OriginalTable & {
    Column: typeof TableColumn;
    ColumnGroup: typeof TableColumnGroup;
};

const Table = OriginalTable as AccordionType;

Table.Column = TableColumn;
Table.ColumnGroup = TableColumnGroup;

export {Table};

export type {
    TableProps,
    TableColumnProps,
    TableColumnGroupProps,
    TablePaginationConfig
};

export * from 'antd/lib/table/interface';
