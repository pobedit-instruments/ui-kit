import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    Button,
    Space,
    TextField,
} from 'src/components';

import {SpaceProps} from 'src/components/space';

const Template: Story<SpaceProps> = ({...props}): JSX.Element => (
    <Space {...props}>
        Текст
        <TextField />
        <Button>Кнопка</Button>
    </Space>
);

const HorizontalSpaceStory = Template.bind({});

HorizontalSpaceStory.storyName = 'Горизонтальный разделитель';

export {HorizontalSpaceStory};
