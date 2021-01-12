import React from 'react';
import dedent from 'ts-dedent';

import {
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined
} from '@ant-design/icons';

import {Story} from '@storybook/react/types-6-0';

import {
    Menu,
    MenuClickEventHandler,
    MenuProps
} from 'src/components/menu';

const {
    SubMenu
} = Menu;

const Template: Story<MenuProps> = ({...props}): JSX.Element => {
    const {Item, ItemGroup} = Menu;

    return (
        <Menu mode="inline"
              style={{width: 256}}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sport']}
        >
            <Item key="mail" icon={<MailOutlined />}>
                Раздел
            </Item>

            <Item key="app" disabled icon={<AppstoreOutlined />}>
                Недоступно для выбора
            </Item>

            <SubMenu
                key="sport"
                icon={<SettingOutlined />}
                title="Выпадающий список"
            >
                <ItemGroup title="Зимние виды спорта">
                    <Item key="1">Лыжи</Item>
                    <Item key="2">Бобслей</Item>
                </ItemGroup>

                <ItemGroup title="Летние виды спорта">
                    <Item key="3">Регби</Item>
                    <Item key="4">Гольф</Item>
                </ItemGroup>
            </SubMenu>

            <Item key="alipay">
                <a href="/" target="_blank" rel="noopener noreferrer">
                    Внешняя ссылка
                </a>
            </Item>
        </Menu>
    );
};

const VerticalMenuStory = Template.bind({});

VerticalMenuStory.storyName = 'Вертикальное меню';

VerticalMenuStory.parameters = {
    docs: {
        source: {
            code: dedent`
                const Template: Story<MenuProps> = ({...props}): JSX.Element => {
                const {Item, ItemGroup} = Menu;
                const [current, setCurrent] = React.useState<string>('');

                const handleClick: MenuClickEventHandler = ({key}) => {
                    setCurrent(key as string);
                };

                return (
                    <Menu onClick={handleClick}
                          style={{width: 256}}
                          defaultSelectedKeys={['1']}
                          defaultOpenKeys={['sport']}
                          mode="inline"
                    >
                        <Item key="mail" icon={<MailOutlined />}>
                            Раздел
                        </Item>

                        <Item key="app" disabled icon={<AppstoreOutlined />}>
                            Недоступно для выбора
                        </Item>

                        <SubMenu
                            key="sport"
                            icon={<SettingOutlined />}
                            title="Выпадающий список"
                        >
                            <ItemGroup title="Зимние виды спорта">
                                <Item key="1">Лыжи</Item>
                                <Item key="2">Бобслей</Item>
                            </ItemGroup>

                            <ItemGroup title="Летние виды спорта">
                                <Item key="3">Регби</Item>
                                <Item key="4">Гольф</Item>
                            </ItemGroup>
                        </SubMenu>

                        <Item key="alipay">
                            <a href="/" target="_blank" rel="noopener noreferrer">
                                Внешняя ссылка
                            </a>
                        </Item>
                    </Menu>
                );
            };
            `
        }
    }
};

export {VerticalMenuStory};
