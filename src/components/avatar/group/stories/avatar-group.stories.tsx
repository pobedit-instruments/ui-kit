import React from 'react';
import {Story} from '@storybook/react/types-6-0';
import {UserOutlined, AntDesignOutlined} from '@ant-design/icons';

import {Tooltip} from 'src/components';

import {
    Avatar,
    AvatarProps,
} from 'src/components/avatar';

const Template: Story<AvatarProps> = ({...props}): JSX.Element => (
    <Avatar.Group
        maxCount={2}
        size="large"
        maxStyle={{color: '#f56a00', backgroundColor: '#fde3cf'}}
    >
        <Avatar src="./stories/components/avatar/user.png" />

        <Avatar style={{backgroundColor: '#f56a00'}}>K</Avatar>

        <Tooltip title="Пользователи" placement="top">
            <Avatar style={{backgroundColor: '#87d068'}}
                    icon={<UserOutlined />}
            />
        </Tooltip>

        <Avatar style={{backgroundColor: '#1890ff'}}
                icon={<AntDesignOutlined />}
        />
    </Avatar.Group>
);

const AvatarGroupStory = Template.bind({});

AvatarGroupStory.storyName = 'Группа аватаров';

export {AvatarGroupStory};
