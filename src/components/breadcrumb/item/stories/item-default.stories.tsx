import React from 'react';
import {Story} from '@storybook/react/types-6-0';
import {linkTo} from '@storybook/addon-links';
import {Menu} from 'antd';
import dedent from 'ts-dedent';

import {preventClick} from 'src/utils/events';

import {
    BasicElement,
    Component
} from 'src/structure';

import {
    Breadcrumb,
    BreadcrumbProps
} from 'src/components/breadcrumb';

const OverlayMenu = (): JSX.Element => {
    const {Item} = Menu;

    return (
        <Menu>
            <Item>
                <a href="#noop"
                   onClick={linkTo(`${Component.BASIC_ELEMENTS}/${BasicElement.BUTTON}`)}
                >
                    Кнопка
                </a>
            </Item>

            <Item>
                <a href="#noop"
                   onClick={linkTo(`${Component.BASIC_ELEMENTS}/${BasicElement.ICON}`)}
                >
                    Иконки
                </a>
            </Item>

            <Item>
                <a href="#noop"
                   onClick={linkTo(`${Component.BASIC_ELEMENTS}/${BasicElement.TYPOGRAPHY}`)}
                >
                    Типографика
                </a>
            </Item>
        </Menu>
    );
};

const Template: Story<BreadcrumbProps> = ({...props}): JSX.Element => {
    const {Item} = Breadcrumb;

    return (
        <Breadcrumb {...props}>
            <Item>Главная</Item>

            <Item>
                <a href="#noop" onClick={preventClick}>Раздел</a>
            </Item>

            <Item overlay={OverlayMenu}>
                <a href="#noop">Выбор раздела</a>
            </Item>

            <Item>Текст</Item>
        </Breadcrumb>
    );
};

const BreadcrumbStory = Template.bind({});

BreadcrumbStory.storyName = 'Базовое использование';

BreadcrumbStory.parameters = {
    docs: {
        source: {
            code: dedent`
                const OverlayMenu = (): JSX.Element => {
                    const {Item} = Menu;

                    return (
                        <Menu>
                            <Item>
                                <a href="#noop">Кнопка</a>
                            </Item>

                            <Item>
                                <a href="#noop">Иконки</a>
                            </Item>

                            <Item>
                                <a href="#noop">Типографика</a>
                            </Item>
                        </Menu>
                    );
                };

                const Template: React.FunctionComponent<void> = ({...props}): JSX.Element => {
                    const {Item} = Breadcrumb;

                    return (
                        <Breadcrumb {...props}>
                            <Item>Главная</Item>

                            <Item>
                                <a href="#noop">Компоненты</a>
                            </Item>

                            <Item overlay={OverlayMenu}>
                                <a href="#noop">Базовые элементы</a>
                            </Item>

                            <Item>Кнопка</Item>
                        </Breadcrumb>
                    );
                };
            `
        }
    }
};

export {BreadcrumbStory};
