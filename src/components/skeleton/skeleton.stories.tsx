import React from 'react';
import {Meta} from '@storybook/react/types-6-0';
import dedent from 'ts-dedent';

import {
    Skeleton,
    SkeletonProps
} from 'src/components/skeleton';

import {
    Component,
    Indicator,
    getStoryTitle
} from 'src/structure';

const controls: Meta<SkeletonProps> = {
    title: getStoryTitle([
        Component.INDICATORS,
        Indicator.SKELETON
    ]),

    component: Skeleton,

    parameters: {
        docs: {
            description: {
                component: dedent`
                    ### Название компонента

                    **Skeleton**

                    ### Дочерние компоненты

                    * **Skeleton.Avatar**
                    * **Skeleton.Button**
                    * **Skeleton.Image**
                    * **Skeleton.Input**
                    * **Skeleton.Paragraph**
                    * **Skeleton.Title**
                `
            }
        }
    },

    argTypes: {
        active: {
            description: 'Состояние',

            table: {
                type: {
                    summary: 'boolean'
                },
                defaultValue: {
                    summary: 'false'
                }
            },

            control: {
                type: 'boolean'
            }
        }
    }
};

export {SkeletonStory} from './skeleton/stories/skeleton.stories';
export {SkeletonParagraphWithAvatarStory} from './skeleton/stories/skeleton-paragraph-avatar.stories';
export {SkeletonImageStory} from './image/stories/skeleton-image.stories';
export {SkeletonAvatarStory} from './avatar/stories/skeleton-avatar.stories';
export {SkeletonButtonStory} from './button/stories/skeleton-button.stories';
export {SkeletonInputStory} from './input/stories/skeleton-input.stories';
export {SkeletonParagraphStory} from './paragraph/stories/skeleton-paragraph.stories';
export {SkeletonTitleStory} from './title/stories/skeleton-title.stories';

export default controls;
