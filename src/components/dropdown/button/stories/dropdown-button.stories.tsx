import React, {DetailedReactHTMLElement} from 'react';
import {Story} from '@storybook/react/types-6-0';
import dedent from 'ts-dedent';

import {
    DownOutlined,
    UserOutlined,
} from '@ant-design/icons';

import {
    Dropdown,
    Button,
    Space,
    Tooltip
} from 'src/components';

import {DropdownButtonProps} from 'src/components/dropdown';
import {ButtonProps} from 'src/components/button';
import {OverlayMenu} from '../../dropdown/stories/dropdown-default.stories'

type ButtonType = DetailedReactHTMLElement<ButtonProps, any>;

const Template: Story<DropdownButtonProps> = ({...props}): JSX.Element => {
    return (
        <Space>
            <Dropdown.Button overlay={OverlayMenu}>
                Стандартное меню
            </Dropdown.Button>

            <Dropdown.Button
                overlay={OverlayMenu}
                placement="bottomCenter"
                icon={<UserOutlined />}
            >
                Меню с иконкой
            </Dropdown.Button>

            <Dropdown.Button
                overlay={OverlayMenu}
                disabled={true}
            >
                Неактивное меню
            </Dropdown.Button>

            <Dropdown.Button
                overlay={OverlayMenu}
                buttonsRender={([leftButton, rightButton]: React.ReactNode[]) => [
                    <Tooltip title="Подсказка" key="leftButton">
                        {leftButton}
                    </Tooltip>,
                    React.cloneElement(rightButton as ButtonType, {
                        loading: true
                    })
                ]}
            >
                Меню с тултипом
            </Dropdown.Button>

            <Dropdown overlay={OverlayMenu}>
                <Button>
                    Кнопка <DownOutlined />
                </Button>
            </Dropdown>
        </Space>
    );
};

const DropdownButtonStory = Template.bind({});

DropdownButtonStory.storyName = 'Кнопка';

DropdownButtonStory.parameters = {
    docs: {
        source: {
            code: dedent`
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

                const Template = ({...props}): JSX.Element => {
                    return (
                        <Space>
                            <Dropdown.Button overlay={OverlayMenu}>
                                Стандартное меню
                            </Dropdown.Button>

                            <Dropdown.Button
                                overlay={OverlayMenu}
                                placement="bottomCenter"
                                icon={<UserOutlined />}
                            >
                                Меню с иконкой
                            </Dropdown.Button>

                            <Dropdown.Button
                                overlay={OverlayMenu}
                                disabled={true}
                            >
                                Неактивное меню
                            </Dropdown.Button>

                            <Dropdown.Button
                                overlay={OverlayMenu}
                                buttonsRender={([leftButton, rightButton]: React.ReactNode[]) => [
                                    <Tooltip title="Подсказка" key="leftButton">
                                        {leftButton}
                                    </Tooltip>,
                                    React.cloneElement(rightButton, {loading: true})
                                ]}
                            >
                                Меню с тултипом
                            </Dropdown.Button>

                            <Dropdown overlay={OverlayMenu}>
                                <Button>
                                    Кнопка <DownOutlined />
                                </Button>
                            </Dropdown>
                        </Space>
                    );
                }
            `
        }
    }
};

export {DropdownButtonStory};
