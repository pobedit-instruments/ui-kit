import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    TextField,
    TextFieldProps
} from 'src/components/text-field';

const {Password} = TextField;

const Template: Story<TextFieldProps> = ({...props}): JSX.Element => (
    <Password placeholder="Введите пароль" {...props} />
);

const TextFieldPasswordStory = Template.bind({});

TextFieldPasswordStory.storyName = 'Поле с паролем';

export {TextFieldPasswordStory};
