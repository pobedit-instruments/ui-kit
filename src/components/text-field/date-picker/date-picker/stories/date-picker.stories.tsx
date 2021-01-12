import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    DatePicker,
    DatePickerProps,
} from 'src/components/text-field/date-picker';

const Template: Story<DatePickerProps> = ({...props}): JSX.Element => (
    <DatePicker style={{width: 200}}
                placeholder="Выберите дату"
                {...props}
    />
);

const DatePickerStory = Template.bind({});

DatePickerStory.storyName = 'Базовое использование';

export {DatePickerStory};
