import React from 'react';
import {Meta} from '@storybook/react/types-6-0';
import dedent from 'ts-dedent';

import {
    ProgressBar,
    ProgressBarProps
} from 'src/components/progress-bar';

import {
    Component,
    Indicator,
    getStoryTitle
} from 'src/structure';

const controls: Meta<ProgressBarProps> = {
    title: getStoryTitle([
        Component.INDICATORS,
        Indicator.PROGRESS
    ]),

    component: ProgressBar,

    parameters: {
        docs: {
            description: {
                component: dedent`
                    ### Название компонента

                    **ProgressBar**
                `
            }
        }
    },

    argTypes: {
        percent: {
            description: 'Установить процент завершения',

            table: {
                type: {
                    summary: 'boolean'
                },
                defaultValue: {
                    summary: 0
                }
            },

            control: {
                type: 'number'
            }
        }
    }
};

export {CircularProgressBarStory} from './stories/circular-progress-bar.stories';
export {LinearProgressBarStory} from './stories/linear-progress-bar.stories';

export default controls;
