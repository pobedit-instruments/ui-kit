import React from 'react';
import AntTable, {ColumnGroupType} from 'antd/lib/table';

const AntTableColumnGroup = AntTable.ColumnGroup;

type TableColumnGroupProps = React.ComponentProps<typeof AntTableColumnGroup>;

const displayName = 'Table.ColumnGroup';

const TableColumnGroup: React.FunctionComponent<TableColumnGroupProps> = ({children, ...props}) => (
    <AntTableColumnGroup data-test={displayName} {...props}>
        {children}
    </AntTableColumnGroup>
);

TableColumnGroup.displayName = displayName;

export {TableColumnGroup};

export type {
    TableColumnGroupProps,
    ColumnGroupType
};
