import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    TimePicker,
    TimePickerProps
} from 'src/components/text-field/time-picker';

const Template: Story<TimePickerProps> = ({...props}): JSX.Element => (
    <TimePicker style={{width: 200}}
                placeholder="Выберите время"
                {...props}
    />
);

const TimePickerStory = Template.bind({});

TimePickerStory.storyName = 'Базовое использование';

export {TimePickerStory};
