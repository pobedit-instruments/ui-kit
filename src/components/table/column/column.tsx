import React from 'react';

import AntTable, {
    ColumnType,
    ColumnsType
} from 'antd/lib/table';

const AntTableColumn = AntTable.Column;

type TableColumnProps = React.ComponentProps<typeof AntTableColumn>;
const displayName = 'Table.Column';

const TableColumn: React.FunctionComponent<TableColumnProps> = ({children, ...props}) => (
    <AntTableColumn data-test={displayName} {...props}>
        {children}
    </AntTableColumn>
);

TableColumn.displayName = displayName;

export {TableColumn};

export type {
    TableColumnProps,
    ColumnType,
    ColumnsType
};
