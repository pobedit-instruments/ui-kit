import {
    GridRow,
    GridRowProps
} from './row';

import {
    GridColumn,
    GridColumnProps,
    GridColSize
} from './column';

import {
    Grid as OriginalGrid
} from './grid';

type GridType = typeof OriginalGrid & {
    Row: typeof GridRow;
    Column: typeof GridColumn;
};

const Grid = OriginalGrid as GridType;

Grid.Row = GridRow;
Grid.Column = GridColumn;

export {Grid};

export type {
    GridRowProps,
    GridColumnProps,
    GridColSize
}
