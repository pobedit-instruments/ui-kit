import React from 'react';
import {Meta} from '@storybook/react/types-6-0';
import dedent from 'ts-dedent';

import {
    Timeline,
    TimelineProps
} from 'src/components/timeline';

import {
    Component,
    Indicator,
    getStoryTitle
} from 'src/structure';

const controls: Meta<TimelineProps> = {
    title: getStoryTitle([
        Component.INDICATORS,
        Indicator.TIMELINE
    ]),

    component: Timeline,

    parameters: {
        description: {
            component: dedent`
                ### Название компонента

                **Timeline**

                ### Дочерние компоненты

                * **Timeline.Item**
            `
        }
    },

    argTypes: {
        mode: {
            description: 'Режим',
            table: {
                type: {
                    summary: 'left | alternate | right'
                }
            },
            control: {
                type: 'text'
            }
        }
    }
};

export {TimelineStory} from './timeline/stories/timeline-default.stories';

export default controls;
