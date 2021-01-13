import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    DownOutlined,
    UserOutlined,
    IdcardOutlined,
    DingtalkOutlined
} from '@ant-design/icons';

import {
    Dropdown,
    Menu,
} from 'src/components';

import {DropdownProps} from 'src/components/dropdown';

const OverlayMenu = (): JSX.Element => {
    const {Item} = Menu;

    return (
        <Menu>
            <Item key="1" icon={<UserOutlined />}>
                Футбол
            </Item>

            <Item key="2" icon={<IdcardOutlined />}>
                Хоккей
            </Item>

            <Item key="3" icon={<DingtalkOutlined />}>
                Гребля
            </Item>
        </Menu>
    );
};

const Template: Story<DropdownProps> = ({...props}): JSX.Element => (
    <Dropdown {...props} overlay={OverlayMenu}>
        <a href="#noop">
            Наведи <DownOutlined />
        </a>
    </Dropdown>
);

const DropdownStory = Template.bind({});

DropdownStory.storyName = 'Базовое использование';

export {
    DropdownStory,
    OverlayMenu
};
