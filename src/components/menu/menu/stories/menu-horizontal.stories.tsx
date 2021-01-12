import React from 'react';
import {MenuClickEventHandler} from 'rc-menu/lib/interface';

import {
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined
} from '@ant-design/icons';

import {Story} from '@storybook/react/types-6-0';
import {MenuProps, Menu} from 'src/components/menu';
import dedent from 'ts-dedent';

const {
    SubMenu
} = Menu;

const Template: Story<MenuProps> = ({...props}): JSX.Element => {
    const {Item, ItemGroup} = Menu;
    const [current, setCurrent] = React.useState<string>('');

    const handleClick: MenuClickEventHandler = ({key}) => {
        setCurrent(key as string);
    };

    return (
        <Menu onClick={handleClick}
              selectedKeys={[current]}
              mode="horizontal"
        >
            <Item key="mail" icon={<MailOutlined />}>
                Раздел
            </Item>

            <Item key="disabled"
                  disabled={true}
                  icon={<AppstoreOutlined />}
            >
                Недоступно для выбора
            </Item>

            <SubMenu
                key="sport"
                icon={<SettingOutlined />}
                title="Выпадающий список"
            >
                <ItemGroup title="Зимние виды спорта">
                    <Item key="sky">Лыжи</Item>
                    <Item key="bob">Бобслей</Item>
                </ItemGroup>

                <ItemGroup title="Летние виды спорта">
                    <Item key="rugby">Регби</Item>
                    <Item key="golf">Гольф</Item>
                </ItemGroup>
            </SubMenu>

            <Item key="external">
                <a href="/" target="_blank" rel="noopener noreferrer">
                    Внешняя ссылка
                </a>
            </Item>
        </Menu>
    );
};

const HorizontalMenuStory = Template.bind({});

HorizontalMenuStory.storyName = 'Горизонтальное меню';

HorizontalMenuStory.parameters = {
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
                           selectedKeys={[current]}
                           mode="vertical"
                     >
                        <Item key="mail" icon={<MailOutlined />}>
                           Раздел
                        </Item>

                        <Item key="disabled"
                              disabled={true}
                              icon={<AppstoreOutlined />}
                        >
                            Недоступно для выбора
                        </Item>

                        <SubMenu key="sport"
                                 icon={<SettingOutlined />}
                                 title="Выпадающий список"
                        >
                            <ItemGroup title="Зимние виды спорта">
                                <Item key="sky">Лыжи</Item>
                                    <Item key="bob">Бобслей</Item>
                            </ItemGroup>

                            <ItemGroup title="Летние виды спорта">
                                <Item key="rugby">Регби</Item>
                                <Item key="golf">Гольф</Item>
                            </ItemGroup>
                        </SubMenu>

                        <Item key="external">
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

export {HorizontalMenuStory};
