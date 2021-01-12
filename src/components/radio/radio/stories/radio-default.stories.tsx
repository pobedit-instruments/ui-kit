import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    Radio,
    RadioProps
} from 'src/components/radio';

const Template: Story<RadioProps> = ({...props}): JSX.Element => (
    <Radio />
);

const RadioStory = Template.bind({});

RadioStory.storyName = 'Базовый тип';

export {RadioStory};
