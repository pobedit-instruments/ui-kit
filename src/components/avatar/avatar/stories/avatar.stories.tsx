import React from 'react';
import {Story} from '@storybook/react/types-6-0';
import {UserOutlined} from '@ant-design/icons';

import {
    Avatar,
    AvatarProps
} from 'src/components/avatar';

const Template: Story<AvatarProps> = ({...props}): JSX.Element => (
    <>
        <Avatar size={64}
                icon={<UserOutlined />}
                {...props}
        />

        <Avatar size="large"
                icon={<UserOutlined />}
                {...props}
        />

        <Avatar icon={<UserOutlined />} {
            ...props}
        />

        <Avatar size="small"
                icon={<UserOutlined />}
                {...props}
        />
    </>
);

const AvatarStory = Template.bind({});

AvatarStory.storyName = 'Базовое представление';

export {AvatarStory};
