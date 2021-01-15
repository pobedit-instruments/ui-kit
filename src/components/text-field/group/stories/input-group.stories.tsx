import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    TextField,
    TextFieldGroupProps
} from 'src/components/text-field';

const {Group} = TextField;
const INPUT_WIDTH = 200;

const Template: Story<TextFieldGroupProps> = ({...props}): JSX.Element => (
    <Group compact={true} {...props}>
        <TextField style={{width: INPUT_WIDTH}} />
        <TextField style={{width: INPUT_WIDTH}} />
    </Group>
);

const TextFieldGroupStory = Template.bind({});

TextFieldGroupStory.storyName = 'Группа полей ввода';

export {TextFieldGroupStory};
