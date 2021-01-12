import React from 'react';
import {Meta} from '@storybook/react/types-6-0';
import dedent from 'ts-dedent';

import {
    Divider,
    DividerProps
} from 'src/components/divider';

import {
    Component,
    Layout,
    getStoryTitle
} from 'src/structure';

const controls: Meta<DividerProps> = {
    title: getStoryTitle([
        Component.LAYOUT,
        Layout.DIVIDER
    ]),

    component: Divider,

    parameters: {
        docs: {
            description: {
                component: dedent`
                    <br />

                    ### Название компонента

                    **Divider**
                `
            }
        }
    },

    argTypes: {
        dashed: {
            description: 'Использовать пунктирную линию',
            table: {
                type: {
                    summary: 'boolean'
                },
                defaultValue: {
                    summary: false
                }
            },
            control: {
                type: 'boolean'
            }
        },
        orientation: {
            description: 'Положение заголовка внутри разделителя',
            table: {
                type: {
                    summary: 'string'
                },
                defaultValue: {
                    summary: 'center'
                }
            },
            control: {
                type: 'select',
                options: [
                    'left',
                    'right',
                    'center'
                ]
            }
        },
        plain: {
            description: 'Не использовать заголовки в тексте разделителя',
            table: {
                type: {
                    summary: 'boolean'
                },
                defaultValue: {
                    summary: 'false'
                }
            },
            control: [
                {
                    type: 'boolean'
                }
            ]
        },
        type: {
            description: 'Тип разделителя',
            table: {
                type: {
                    summary: 'string'
                },
                defaultValue: {
                    summary: 'horizontal'
                }
            },
            control: {
                type: 'select',
                options: [
                    'horizontal',
                    'vertical'
                ]
            }
        }
    }
};

export {DividerStory} from './stories/divider-default.stories';

export default controls;
