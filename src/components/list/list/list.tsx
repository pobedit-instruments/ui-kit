import React from 'react';
import AntList from 'antd/lib/list';

type ListProps = React.ComponentProps<typeof AntList>;

const displayName = 'List';

const List: React.FunctionComponent<ListProps> = ({children, ...props}) => (
    <AntList data-test={displayName} {...props}>
        {children}
    </AntList>
);

List.displayName = displayName;

export {List};
export type {ListProps};

export type {
    ListConsumer,
    ColumnType as ListColumnType,
    ColumnCount as ListColumnCount,
    ListConsumerProps,
    ListLocale,
    ListSize
} from 'antd/lib/list';
