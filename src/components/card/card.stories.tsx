import React from 'react';
import {Meta} from '@storybook/react/types-6-0';
import dedent from 'ts-dedent';

import {
    Card,
    CardProps
} from 'src/components/card';

import {
    Component,
    Content,
    getStoryTitle
} from 'src/structure';

const controls: Meta<CardProps> = {
    title: getStoryTitle([
        Component.CONTENT,
        Content.CARD
    ]),

    component: Card,

    parameters: {
        docs: {
            description: {
                component: dedent`
                    ### Название компонента

                    **Card**
                `
            }
        }
    },

    argTypes: {
        title: {
            description: 'Заголовок',
            table: {
                type: {
                    summary: 'React.ReactNode'
                }
            },
            control: {
                type: 'text'
            }
        }
    }
};

export {CardStory} from './stories/card-default.stories';

export default controls;
