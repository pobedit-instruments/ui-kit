import {Meta} from '@storybook/react/types-6-0';
import dedent from 'ts-dedent';

import {
    DatePicker,
    DatePickerProps
} from 'src/components/text-field/date-picker';

import {
    Component,
    BasicElement,
    TextField,
    getStoryTitle
} from 'src/structure';

const controls: Meta<DatePickerProps> = {
    title: getStoryTitle([
        Component.BASIC_ELEMENTS,
        BasicElement.TEXT_FIELD,
        TextField.DATE_PICKER
    ]),

    component: DatePicker,

    parameters: {
        docs: {
            description: {
                component: dedent`
                    ### Название компонента

                    **DatePicker**
                `
            }
        }
    },

    argTypes: {
        picker: {
            description: 'Выбрать тип',
            table: {
                type: {
                    summary: 'date | week | month | quarter | year'
                },
                defaultValue: {
                    summary: 'date'
                }
            },
            control: {
                type: 'select',
                options: [
                    'date',
                    'week',
                    'month',
                    'quarter',
                    'year'
                ]
            }
        }
    }
};

export {DatePickerStory} from './date-picker/stories/date-picker.stories';
export {RangePickerStory} from './range-picker/stories/range-picker.stories';

export default controls;
