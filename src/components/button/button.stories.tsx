import React from 'react';
import {Meta} from '@storybook/react/types-6-0';
import {DownloadOutlined} from '@ant-design/icons';
import dedent from 'ts-dedent';

import {
    Button,
    ButtonProps
} from 'src/components/button';

import {
    Component,
    BasicElement,
    getStoryTitle
} from 'src/structure';

import './button/stories/button.stories.less';
import foo from './group/stories/text-buttons.png';

const controls: Meta<ButtonProps> = {
    title: getStoryTitle([
        Component.BASIC_ELEMENTS,
        BasicElement.BUTTON
    ]),

    component: Button,

    parameters: {
        docs: {
            description: {
                component: dedent`
                    <br />

                    ### Название компонента

                    **Button**

                    ### Дочерние компоненты

                    * **Button.Group**

                    ### Текстовые кнопки

                    В функциональной области проекта может быть не более 5 текcтовых кнопок.<br />
                    Расстояние между иконкой и текстом кнопки 8px. Расстояние между кнопками 24px.
                `
            }
        }
    },

    argTypes: {
        block: {
            description: 'Возможность подогнать ширину кнопки к ее родительской ширине',
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
        danger: {
            description: 'Установите статус опасности кнопки',
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
        disabled: {
            description: 'Заблокировать кнопку',
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
        ghost: {
            description: 'Сделать фон прозрачным, а цвета текста и границ инвертировать',
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
        href: {
            description: 'Ссылка, куда будет выполняться перенаправление',
            table: {
                type: {
                    summary: 'string'
                }
            },
            control: {
                type: 'text'
            }
        },
        htmlType: {
            description: 'Семантический [тип кнопки](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type)',
            table: {
                type: {
                    summary: 'string'
                },
                defaultValue: {
                    summary: 'button'
                }
            },
            control: {
                type: 'select',
                options: [
                    'button',
                    'reset',
                    'submit'
                ]
            }
        },
        icon: {
            description: 'Добавить иконку',
            table: {
                type: {
                    summary: 'React.ReactNode'
                }
            },
            control: {
                type: 'select',
                options: {
                    Yes: [
                        <DownloadOutlined />
                    ],
                    No: []
                }
            }
        },
        loading: {
            description: 'Добавить индикатор загрузки',
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
        onClick: {
            description: 'Обработчик события нажатия на кнопку',
            table: {
                type: {
                    detail: '((event: MouseEvent<HTMLElement, MouseEvent>) => void)',
                    summary: 'Function'
                }
            },
            type: {
                required: true
            }
        },
        size: {
            description: 'Установить размер кнопки',
            table: {
                type: {
                    summary: 'string'
                },
                defaultValue: {
                    summary: 'middle'
                }
            },
            control: {
                type: 'select',
                options: [
                    'large',
                    'middle',
                    'small'
                ]
            }
        },
        target: {
            description: 'Установить [якорный](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/A#target) элемент',
            table: {
                type: {
                    summary: 'string'
                }
            },
            control: {
                type: 'text'
            }
        },
        type: {
            description: 'Вид кнопки',
            table: {
                type: {
                    summary: 'string'
                },
                defaultValue: {
                    summary: 'default'
                }
            },
            control: {
                type: 'select',
                options: [
                    'default',
                    'primary',
                    'ghost',
                    'dashed',
                    'link',
                    'text'
                ]
            }
        }
    }
};

export {ButtonStory} from './button/stories/button-default.stories';
export {ButtonLayoutStory} from './button/stories/button-layout.stories';
export {ButtonVariationStory} from './button/stories/button-variation.stories';
export {ButtonGroupStory} from './group/stories/button-group.stories';
export {ButtonWithStateStory} from './group/stories/button-state.stories';

export default controls;
