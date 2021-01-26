import React from 'react';
import {Meta} from '@storybook/react/types-6-0';
import dedent from 'ts-dedent';

import {
    ArgsTable,
    Description,
    Primary,
    Subtitle,
    Stories,
    Title,
    PRIMARY_STORY
} from '@storybook/addon-docs/blocks';

import {
    Menu,
    Space
} from 'src/components';

import {MenuProps} from 'src/components/menu';

import {
    Component,
    Navigation,
    getStoryTitle
} from 'src/structure';

import {Options} from '.storybook/utils/options';
import {dataSource as menuArgs} from './menu/stories/menu-properties';

const controls: Meta<MenuProps> = {
    title: getStoryTitle([
        Component.NAVIGATION,
        Navigation.MENU
    ]),

    component: Menu,

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
                        <Options name="Menu" dataSource={menuArgs} />
                    </Space>
                </>
            ),
            description: {
                component: dedent`
                    <br />

                    ### Название компонента

                    **Menu**

                    ### Дочерние компоненты

                    * **Menu.Divider**
                    * **Menu.Item**
                    * **Menu.ItemGroup**
                    * **Menu.SubMenu**
                `
            }
        }
    },

    argTypes: {}
};

export {HorizontalMenuStory} from './menu/stories/menu-horizontal.stories';
export {VerticalMenuStory} from './menu/stories/menu-vertical.stories';
export {CompactMenuStory} from './menu/stories/menu-compact.stories';

export default controls;
