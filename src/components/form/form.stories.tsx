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
    Form,
    FormProps
} from 'src/components/form';

import {
    Component,
    Other,
    getStoryTitle
} from 'src/structure';

// import {Options} from 'src/utils/options';
// import {dataSource as DropdownArgs} from '../stories/dropdown-properties';
// import {dataSource as ButtonArgs} from '../../button/stories/button-properties';

const controls: Meta<FormProps> = {
    title: getStoryTitle([
        Component.OTHER,
        Other.FORM
    ]),

    component: Form,

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
                    {/*    <Options name="Dropdown" dataSource={DropdownArgs} />*/}
                    {/*    <Options name="Breadcrumb.Button" dataSource={ButtonArgs} />*/}
                    {/*</Space>*/}
                </>
            ),

            description: {
                component: dedent`
                    Выпадающий список

                    ### Название компонента

                    **Form**

                    ### Дочерние компоненты

                    * **Form.Item**
                    * **Form.List**
                    * **Form.ErrorList**
                    * **Form.Provider**
                `
            }
        }
    },

    argTypes: {}
};

export {FormStory} from './form/stories/form-default.stories';

export default controls;
