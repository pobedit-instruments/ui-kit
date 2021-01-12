import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    TextField,
    TextFieldProps
} from 'src/components/text-field';

const {Search} = TextField;

const Template: Story<TextFieldProps> = ({...props}): JSX.Element => (
    <Search placeholder="Введите текст" {...props} />
)

const TextFieldSearchStory = Template.bind({});

TextFieldSearchStory.storyName = 'Поле поиска';

export {TextFieldSearchStory};
