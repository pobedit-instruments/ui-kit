import React from 'react';
import {Meta} from '@storybook/react/types-6-0';
import dedent from 'ts-dedent';

import {
    List,
    ListProps
} from 'src/components/list';

import {
    Component,
    Content,
    getStoryTitle
} from 'src/structure';

const controls: Meta<ListProps> = {
    title: getStoryTitle([
        Component.CONTENT,
        Content.LIST
    ]),

    component: List,

    parameters: {
        docs: {
            description: {
                component: dedent`
                    ### Название компонента

                    **List**

                    ### Дочерние компоненты

                    * **List.Item**
                `
            }
        }
    },

    argTypes: {}
};

export {ListStory} from './list/stories/list.stories';

export default controls;
