import React from 'react';
import {Meta} from '@storybook/react/types-6-0';
import dedent from 'ts-dedent';

import {
    Spinner,
    SpinnerProps
} from 'src/components/spinner';

import {
    Component,
    Indicator,
    getStoryTitle
} from 'src/structure';

const controls: Meta<SpinnerProps> = {
    title: getStoryTitle([
        Component.INDICATORS,
        Indicator.SPINNER
    ]),

    component: Spinner,

    parameters: {
        docs: {
            description: {
                component: dedent`
                    ### Название компонента

                    **Spinner**
                `
            }
        }
    },

    argTypes: {
        active: {
            description: 'Состояние активности',

            table: {
                type: {
                    summary: 'boolean'
                },
                defaultValue: {
                    summary: true
                }
            },

            control: {
                type: 'boolean'
            }
        }
    }
};

export {SpinnerStory} from './stories/spinner.stories';
export {InlinedSpinnerStory} from './stories/spinner-inlined.stories';
export {CustomSpinnerStory} from './stories/spinner-custom.stories';

export default controls;
