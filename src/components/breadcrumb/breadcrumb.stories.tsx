import React from 'react';
import {Meta} from '@storybook/react/types-6-0';
import dedent from 'ts-dedent';

import {
    ArgsTable,
    Description,
    Primary,
    Stories,
    Subtitle,
    Title,
    PRIMARY_STORY
} from '@storybook/addon-docs/blocks';

import {
    Space,
    Breadcrumb,
} from 'src/components';

import {BreadcrumbProps} from 'src/components/breadcrumb';

import {
    Component,
    Navigation,
    getStoryTitle
} from 'src/structure';

import {Options} from '.storybook/utils/options';

import {dataSource as BreadcrumbArgs} from './breadcrumb/stories/breadcrumb-properties';
import {dataSource as ItemArgs} from './item/stories/item-properties';
import {dataSource as SeparatorArgs} from './separator/stories/separator-properties';

const controls: Meta<BreadcrumbProps> = {
    title: getStoryTitle([
        Component.NAVIGATION,
        Navigation.BREADCRUMBS
    ]),

    component: Breadcrumb,

    parameters: {
        docs: {
            page: () => (
                <>
                    <Title />
                    <Subtitle />
                    <Description />
                    <Primary />

                    <Stories />
                    <ArgsTable story={PRIMARY_STORY} />

                    <Space size="large" direction="vertical">
                        <Options name="Breadcrumb" dataSource={BreadcrumbArgs} />
                        <Options name="Breadcrumb.Item" dataSource={ItemArgs} />
                        <Options name="Breadcrumb.Separator" dataSource={SeparatorArgs} />
                    </Space>
                </>
            ),

            description: {
                component: dedent`
                    Навигационная цепочка (или хлебные крошки) отображает текущее местоположение и позволяет вернуться к состояниям выше в иерархии.

                    ### Название компонента

                    **Breadcrumbs**

                    ### Дочерние компоненты

                    * **Breadcrumb.Item**
                    * **Breadcrumb.Separator**
                `
            }
        }
    },

    argTypes: {}
};

export {BreadcrumbStory} from './item/stories/item-default.stories';

export default controls;
