// @note list.Meta исключен

import {
    List as OriginalList,
    ListProps
} from './list';

import {
    ListItem,
    ListItemProps
} from './item';

type ListType = typeof OriginalList & {
    Item: typeof ListItem;
};

const List = OriginalList as ListType;

List.Item = ListItem;

export {List};

export type {
    ListProps,
    ListItemProps
};

export type {
    ListConsumer,
    ListColumnType,
    ListColumnCount,
    ListConsumerProps,
    ListLocale,
    ListSize
} from './list';
