import React from 'react';
import {Meta} from '@storybook/react/types-6-0';
import dedent from 'ts-dedent';

import {
    Table,
    TableProps
} from 'src/components/table';

import {
    Component,
    Content,
    getStoryTitle
} from 'src/structure';

const controls: Meta<TableProps<object>> = {
    title: getStoryTitle([
        Component.CONTENT,
        Content.TABLE
    ]),

    component: Table,

    parameters: {
        docs: {
            description: {
                component: dedent`
                    ### Название компонента

                    **Table**

                    ### Дочерние компоненты

                    * **Table.Column**
                    * **Table.ColumnGroup**
                `
            }
        }
    },

    argTypes: {}
};

export {TableStory} from './table/stories/table.stories';
export {TableWithGroupStory} from './table/stories/table-group.stories';
export {TableWithPaginationStory} from './table/stories/table-pagination.stories';
export {TableWithCustomRenderStory} from './table/stories/table-custom-render.stories';
export {TableWithFiltersStory} from './table/stories/table-filters.stories';
export {TableWithCustomFiltersStory} from './table/stories/table-custom-filters.stories';
export {TableWithCheckboxStory} from './table/stories/table-checkbox.stories';
export {TableWithRadioStory} from './table/stories/table-radio.stories';
export {TableWithColumnGroupStory} from './column-group/stories/column-group.stories';
export {EditableTableStory} from './table/stories/table-editable.stories';
export {ModifiableTableStory} from './table/stories/table-modifiable.stories';

export default controls;
