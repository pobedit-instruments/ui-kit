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
    MenuProps
} from 'src/components/menu';

const {
    SubMenu
} = Menu;

const Template: Story<MenuProps> = ({...props}): JSX.Element => {
    const {Item} = Menu;

    return (
        <Menu mode="vertical"
              style={{width: 256}}
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

                <Item key="bob">Бобслей</Item>

                <SubMenu
                    key="sky"
                    title="Лыжный вид спорта"
                >
                    <Item key="biathlon">Биатлон</Item>
                </SubMenu>
            </SubMenu>

            <Item key="external">
                <a href="/" target="_blank" rel="noopener noreferrer">
                    Внешняя ссылка
                </a>
            </Item>
        </Menu>
    );
};

const CompactMenuStory = Template.bind({});

CompactMenuStory.storyName = 'Компактное меню';

CompactMenuStory.parameters = {
    docs: {
        source: {
            code: dedent`
                const Template: Story<MenuProps> = ({...props}): JSX.Element => {
                const {ItemGroup} = Menu;

                return (
                     <Menu mode="vertical"
                           style={{width: 256}}
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

export {CompactMenuStory};
