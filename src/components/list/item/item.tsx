import React from 'react';

import AntList, {
    ListItemProps,
    ListItemLayout
} from 'antd/lib/list';

const AntListItem = AntList.Item;
const displayName = 'List.Item';

const ListItem: React.FunctionComponent<ListItemProps> = ({children, ...props}) => (
    <AntListItem data-test={displayName} {...props}>
        {children}
    </AntListItem>
);

ListItem.displayName = displayName;

export {ListItem};

export type {
    ListItemProps,
    ListItemLayout
};
