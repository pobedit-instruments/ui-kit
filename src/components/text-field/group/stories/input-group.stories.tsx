import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    TextField,
    TextFieldProps
} from 'src/components/text-field';

const {Group} = TextField;

const Template: Story<TextFieldProps> = ({...props}): JSX.Element => (
    <Group compact={true} {...props}>
        <TextField style={{width: 300}} />
        <TextField style={{width: 300}} />
    </Group>
);

const TextFieldGroupStory = Template.bind({});

TextFieldGroupStory.storyName = 'Группа полей ввода';

export {TextFieldGroupStory};
