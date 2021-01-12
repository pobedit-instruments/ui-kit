import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    TextField,
    TextFieldProps
} from 'src/components/text-field';

const {Textarea} = TextField;

const Template: Story<TextFieldProps> = ({...props}): JSX.Element => (
    <Textarea placeholder="Введите текст"
              showCount={true}
              {...props}
    />
);

const TextFieldTextareaStory = Template.bind({});

TextFieldTextareaStory.storyName = 'Многострочное поле ввода';

export {TextFieldTextareaStory};
