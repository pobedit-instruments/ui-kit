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
    Dropdown,
    DropdownProps
} from 'src/components/dropdown';

import {
    Component,
    Navigation,
    getStoryTitle
} from 'src/structure';

import {ComponentTable} from 'src/utils/args-table';
// import {dataSource as DropdownArgs} from '../stories/dropdown-properties';
// import {dataSource as ButtonArgs} from '../../button/stories/button-properties';

const controls: Meta<DropdownProps> = {
    title: getStoryTitle([
        Component.NAVIGATION,
        Navigation.DROPDOWN
    ]),

    component: Dropdown,

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

                    {/*<Space size="large" direction="vertical">*/}
                    {/*    <ComponentTable name="Dropdown" dataSource={DropdownArgs} />*/}
                    {/*    <ComponentTable name="Breadcrumb.Button" dataSource={ButtonArgs} />*/}
                    {/*</Space>*/}
                </>
            ),

            description: {
                component: dedent`
                    Выпадающий список

                    ### Название компонента

                    **Dropdown**

                    ### Дочерние компоненты

                    * **Dropdown.Button**
                `
            }
        }
    },

    argTypes: {
        disabled: {
            description: 'Заблокировать слайдер',
            table: {
                type: {
                    summary: 'boolean'
                }
            },
            control: {
                type: 'boolean'
            }
        }
    }
};

export {DropdownStory} from './dropdown/stories/dropdown-default.stories';
export {DropdownButtonStory} from './button/stories/dropdown-button.stories';

export default controls;
