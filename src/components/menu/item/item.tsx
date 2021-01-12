import React from 'react';
import AntMenu from 'antd/lib/menu';

const displayName = 'Menu.Item';

type ItemProps = React.ComponentProps<typeof AntMenu.Item>;

const Item: React.FunctionComponent<ItemProps> = ({...props}) => (
    <AntMenu.Item data-test={displayName} {...props} />
);

Item.displayName = displayName;

export {Item};
export type {ItemProps};
