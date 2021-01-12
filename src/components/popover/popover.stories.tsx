import React from 'react';
import {Meta} from '@storybook/react/types-6-0';
import dedent from 'ts-dedent';

import {
    Popover,
    PopoverProps
} from 'src/components/popover';

import {
    Component,
    Informers,
    getStoryTitle
} from 'src/structure';

const controls: Meta<PopoverProps> = {
    title: getStoryTitle([
        Component.INFORMERS,
        Informers.POPOVER
    ]),

    component: Popover,

    parameters: {
        docs: {
            description: {
                component: dedent`
                    Плавающая карточка.

                    ### Название компонента

                    **Popover**

                    ### Описание

                    См. компонент Tooltip
                `
            }
        }
    },

    argTypes: {
        content: {
            description: 'Содержимое карточки',
            table: {
                type: {
                    summary: 'React.ReactNode | () => React.ReactNode'
                }
            },
            control: {
                type: 'object'
            }
        },

        title: {
            description: 'Заголовок карточки',
            table: {
                type: {
                    summary: 'React.ReactNode | () => React.ReactNode'
                }
            },
            control: {
                type: 'object'
            }
        },

        transitionName: {
            description: 'Имя, которое используется для анимации (не меняйте это свойство если не хотите сломать анимацию)',
            table: {
                type: {
                    summary: 'string'
                }
            },
            control: {
                type: 'string'
            }
        },

        placement: {
            description: 'Расположение',
            table: {
                type: {
                    summary: 'string',
                    detail: 'topLeft | bottomLeft | left | top | bottom | right | rightTop | rightBottom'
                },
                defaultValue: {
                    summary: 'top'
                }
            },
            control: {
                type: 'text'
            }
        },

        trigger: {
            description: 'Событие',
            table: {
                type: {
                    summary: 'string',
                    detail: 'hover | focus | click | contextMenu | Array<string>'
                },
                defaultValue: {
                    summary: 'hover'
                }
            },
            control: {
                type: 'text'
            }
        }
    }
};

export {PopoverStory} from './stories/popover-default.stories';

export default controls;
