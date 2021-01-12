import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    TextField,
    TextareaTextFieldProps
} from 'src/components/text-field';

const {Textarea} = TextField;

const Template: Story<TextareaTextFieldProps> = ({...props}): JSX.Element => (
    <Textarea placeholder="Введите текст"
              showCount={true}
              {...props}
    />
);

const TextFieldTextareaStory = Template.bind({});

TextFieldTextareaStory.storyName = 'Многострочное поле ввода';

export {TextFieldTextareaStory};
