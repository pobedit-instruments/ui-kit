import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    TextField,
    TextFieldProps
} from 'src/components/text-field';

const Template: Story<TextFieldProps> = ({...props}): JSX.Element => (
    <TextField placeholder="Введите текст"
               allowClear={true}
               {...props}
    />
);

const TextFieldStory = Template.bind({});

TextFieldStory.storyName = 'Поле ввода с плейсхолдером';

export {TextFieldStory};
