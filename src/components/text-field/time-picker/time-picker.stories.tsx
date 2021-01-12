import React from 'react';
import {Meta} from '@storybook/react/types-6-0';
import dedent from 'ts-dedent';

import {
    TimePicker,
    TimePickerProps
} from 'src/components/text-field/time-picker';

import {
    Component,
    BasicElement,
    TextField,
    getStoryTitle
} from 'src/structure';

const controls: Meta<TimePickerProps> = {
    title: getStoryTitle([
        Component.BASIC_ELEMENTS,
        BasicElement.TEXT_FIELD,
        TextField.TIME_PICKER
    ]),

    component: TimePicker,

    parameters: {
        docs: {
            description: {
                component: dedent`
                    ### Название компонента

                    **TimePicker**
                `
            }
        }
    },

    argTypes: {
        allowClear: {
            description: 'Добавить очистку поля',
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

export {TimePickerStory} from './time-picker/stories/time-picker.stories';
export {RangePickerStory} from './range-picker/stories/range-picker.stories';

export default controls;
