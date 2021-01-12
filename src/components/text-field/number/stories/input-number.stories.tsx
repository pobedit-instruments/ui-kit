import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    NumberTextField,
    NumberTextFieldProps
} from 'src/components/text-field/number';

const Template: Story<NumberTextFieldProps> = ({...props}): JSX.Element => (
    <NumberTextField placeholder="Выберите число" {...props} />
);

const NumberTextFieldStory = Template.bind({});

NumberTextFieldStory.storyName = 'Числовое поле ввода';

export {NumberTextFieldStory};
