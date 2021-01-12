import React from 'react';

import AntGridRow, {
    RowProps as GridRowProps
} from 'antd/lib/row';

const displayName = 'Grid.Row';

const GridRow: React.FunctionComponent<GridRowProps> = ({...props}) => (
    <AntGridRow data-test={displayName} {...props} />
);

GridRow.displayName = displayName;

export {GridRow};
export type {GridRowProps};
