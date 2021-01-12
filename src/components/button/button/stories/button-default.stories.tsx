import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    Button,
    ButtonProps
} from 'src/components/button';

const Template: Story<ButtonProps> = ({...props}): JSX.Element => (
    <Button {...props}>Кнопка</Button>
);

const ButtonStory = Template.bind({});

ButtonStory.storyName = 'Базовый тип';

ButtonStory.args = {
    type: 'default'
};

export {ButtonStory};
