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
    Steps,
    StepsProps
} from 'src/components/steps';

import {
    Component,
    Navigation,
    getStoryTitle
} from 'src/structure';

import {ComponentTable} from 'src/utils/args-table';

// import {dataSource as DropdownArgs} from '../stories/dropdown-properties';
// import {dataSource as ButtonArgs} from '../../button/stories/button-properties';

const controls: Meta<StepsProps> = {
    title: getStoryTitle([
        Component.NAVIGATION,
        Navigation.STEPS
    ]),

    component: Steps,

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

                    **Steps**

                    ### Дочерние компоненты

                    **Steps.Step**
                `
            }
        }
    },

    argTypes: {}
};

export {HorizontalStepsStory} from './step/stories/step-horizontal.stories';
export {StepsWithDotsStory} from './step/stories/step-dots.stories';
export {VerticalStepsStory} from './step/stories/step-vertical.stories';
export {StepsErrorStory} from './step/stories/step-error.stories';
export {StepsWithIconStory} from './step/stories/step-icon.stories';
export {StepsWithContentStory} from './step/stories/step-content.stories';

export default controls;
