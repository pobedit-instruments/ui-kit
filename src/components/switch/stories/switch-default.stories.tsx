import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    Space,
    Switch
} from 'src/components';

import {SwitchProps} from 'src/components/switch';

const Template: Story<SwitchProps> = ({...props}): JSX.Element => (
    <Space direction="vertical">
        <Switch {...props} />

        <Switch defaultChecked={true}
                loading={true}
                {...props}
        />
    </Space>
);

const SwitchStory = Template.bind({});

SwitchStory.storyName = 'Базовое использование';

export {SwitchStory};
