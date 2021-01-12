import React from 'react';
import {Meta} from '@storybook/react/types-6-0';
import dedent from 'ts-dedent';

import {
    Avatar,
    AvatarProps
} from 'src/components/avatar';

import {
    Component,
    Other,
    getStoryTitle
} from 'src/structure';

const controls: Meta<AvatarProps> = {
    title: getStoryTitle([
        Component.OTHER,
        Other.AVATAR
    ]),

    component: Avatar,

    parameters: {
        docs: {
            description: {
                component: dedent`
                    Аватар

                    ### Название компонента

                    **Avatar**

                    ### Дочерние компоненты

                    * **Avatar.Group**
                `
            }
        }
    },

    argTypes: {}
};

export {AvatarStory} from './avatar/stories/avatar.stories';
export {AvatarGroupStory} from './group/stories/avatar-group.stories';

export default controls;
