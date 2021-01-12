import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    DatePicker,
    DateRangePickerProps
} from 'src/components/text-field/date-picker';

const {RangePicker} = DatePicker;

const Template: Story<DateRangePickerProps> = ({...props}): JSX.Element => (
    <RangePicker showTime={{format: 'HH:mm'}}
                 format="YYYY-MM-DD HH:mm"
                 placeholder={['Начальная дата', 'Конечная дата']}
    />
);

const RangePickerStory = Template.bind({});

RangePickerStory.storyName = 'Выбор диапазона дат';

export {RangePickerStory};
