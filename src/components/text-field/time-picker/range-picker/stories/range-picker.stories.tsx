import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    TimePicker,
    TimePickerProps
} from 'src/components/text-field/time-picker';

const {RangePicker} = TimePicker;

const Template: Story<TimePickerProps> = ({...props}): JSX.Element => (
    <RangePicker format="YYYY-MM-DD HH:mm:ss"
                 placeholder={['Начальное время', 'Конечное время']}
    />
);

const RangePickerStory = Template.bind({});

RangePickerStory.storyName = 'Выбор временного диапазона';

export {RangePickerStory};
