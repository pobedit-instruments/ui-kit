import React from 'react';

import AntGridColumn, {
    ColProps as GridColumnProps,
    ColSize as GridColSize
} from 'antd/lib/col';

const displayName = 'Grid.Column';

const GridColumn: React.FunctionComponent<GridColumnProps> = ({...props}) => (
    <AntGridColumn data-test={displayName} {...props} />
);

GridColumn.displayName = displayName;

export {GridColumn};

export type {
    GridColumnProps,
    GridColSize
};
