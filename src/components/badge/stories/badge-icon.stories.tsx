import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    ClockCircleOutlined,
    NotificationOutlined
} from '@ant-design/icons';

import {
    Badge,
    Space
} from 'src/components';

import {BadgeProps} from 'src/components/badge';
import style from './badge-default.stories.less';

const Template: Story<BadgeProps> = ({...props}): JSX.Element => (
    <Space size="large">
        <Badge count={<ClockCircleOutlined style={{color: '#f5222d'}} />} {...props}>
            <div className={style.badge} />
        </Badge>

        <Badge count={0} dot={true} {...props}>
            <NotificationOutlined />
        </Badge>

        <Badge dot={true} {...props}>
            <NotificationOutlined />
        </Badge>
    </Space>
);

const BadgeWithIconStory = Template.bind({});

BadgeWithIconStory.storyName = 'Вид с иконкой';

export {BadgeWithIconStory};
