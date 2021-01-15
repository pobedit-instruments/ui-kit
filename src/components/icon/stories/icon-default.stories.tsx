import React from 'react';
import {Story} from '@storybook/react/types-6-0';
import {AppleOutlined} from '@ant-design/icons';
import {Typography} from 'src/components';

import {
    Icon,
    IconProps
} from 'src/components/icon';

const {Title} = Typography;

const Template: Story<IconProps> = ({...props}): JSX.Element => (
    <Title>
        <Icon component={AppleOutlined} {...props} />
    </Title>
);

const IconStory = Template.bind({});

IconStory.storyName = 'Базовый тип';

export {IconStory};
