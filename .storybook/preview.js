// import React from 'react';
import {themes} from '@storybook/theming';
import 'antd/dist/antd.css';

import {
    DesignSystem,
    Component,
    BasicElement,
    TextField,
    Content,
    Layout,
    Structure
} from '../src/structure';

const globalTypes = {
    locale: {
        name: 'Locale',
        description: 'Язык',
        defaultValue: 'en',
        toolbar: {
            icon: 'globe',
            items: [
                {
                    title: 'English',
                    value: 'en',
                    right: '🇺🇸'
                },
                {
                    title: 'Русский',
                    value: 'ru',
                    right: '🇷🇺'
                }
            ]
        }
    }
};

const parameters = {
    docs: {
        theme: themes.light
    },

    options: {
        storySort: {
            method: 'alphabetical',
            order: [
                Structure.DESIGN_SYSTEM, [
                    DesignSystem.OVERVIEW,
                    DesignSystem.COMPONENTS,
                    DesignSystem.STYLISTICS,
                    DesignSystem.PATTERNS,
                    DesignSystem.ACCESSIBILITY
                ],

                Component.BASIC_ELEMENTS, [
                    BasicElement.ICON,
                    BasicElement.TYPOGRAPHY,
                    BasicElement.BUTTON,

                    BasicElement.TEXT_FIELD, [
                        TextField.TEXT,
                        TextField.DATE_PICKER,
                        TextField.TIME_PICKER,
                        TextField.AUTOCOMPLETE
                    ],

                    BasicElement.RADIO,
                    BasicElement.CHECKBOX,
                    BasicElement.SWITCH,
                    BasicElement.SLIDER
                ],

                Component.CONTENT, [
                   Content.TABLE,
                   Content.PANEL,
                   Content.MODAL
                ],

                Component.LAYOUT, [
                    Layout.LAYOUT,
                    Layout.GRID,
                    Layout.SPACE,
                    Layout.DIVIDER
                ],

                Component.INDICATORS,
                Component.NAVIGATION,
                Component.INFORMERS,
                Component.WIDGETS,
                Component.OTHER
            ]
        }
    },

    actions: {
        argTypesRegex: "^on[A-Z].*"
    },

    argTypes: {
        style: {
            description: 'Дополнительные стили',
            type: {
                summary: 'Record<string, string | number>'
            },
            control: {
                type: 'object',
                value: {}
            }
        },

        className: {
            description: 'Классы таблицы стилей',
            type: {
                summary: 'string'
            },
            control: {
                type: 'text'
            }
        },

        'data-test': {
            description: 'Идентификатор компонента компонента, который будет использоваться при тестировании',
            type: {
                summary: 'string'
            },
            control: {
                type: 'text'
            }
        }
    },

    backgrounds: {
        default: 'Светлая тема',
        values: [
            {
                name: 'Светлая тема',
                value: themes.light.appBg
            },
            {
                name: 'Темная тема',
                value: themes.dark.appBg,
                default: true
            }
        ],

        grid: {
            disable: false,
            cellSize: 20,
            opacity: 0.5,
            cellAmount: 5
        }
    }
};

/*
const withThemeProvider = (Story, context) => {
    const {backgrounds} = context.globals;
    // let isDarkMode = backgrounds?.value === themes.dark.appBg;

    return <Story {...context} />;
};
*/

// const decorators = [withThemeProvider];

export {
    // decorators,
    globalTypes,
    parameters
};
