import {Meta} from '@storybook/react/types-6-0';
import dedent from 'ts-dedent';

import {
    Space,
    SpaceProps
} from 'src/components/space';

import {
    Component,
    Other,
    getStoryTitle
} from 'src/structure';

const controls: Meta<SpaceProps> = {
    title: getStoryTitle([
        Component.OTHER,
        Other.AFFIX
    ]),

    component: Space,

    parameters: {
        docs: {
            description: {
                component: dedent`
                    Фиксирует компонент у края экрана если содержимое страницы не помещается в область просмотра.
                    Удачно сочетается постраничной навигацией.

                    ### Название компонента

                    **Affix**
                `
            }
        }
    },

    argTypes: {
        target: {
            description: 'DOM-элемент, который будет использоваться как контейнер для прокрутки',
            table: {
                type: {
                    summary: '() => HTMLElement'
                },
                defaultValue: {
                    summary: '() => window'
                }
            },
            control: {
                type: 'object'
            }
        },

        onChange: {
            description: 'Колбек изменения состояния',
            table: {
                type: {
                    summary: '(affixed: boolean) => void'
                },
                defaultValue: {
                    summary: '-'
                }
            },
            control: {
                type: 'function'
            }
        },

        offsetBottom: {
            description: 'Сместить относительно нижнего края вьюпорта. Значение задается в пикселях',

            table: {
                type: {
                    summary: 'number'
                },
                defaultValue: {
                    summary: '-'
                }
            },

            defaultValue: 0,

            control: {
                type: 'number',
                step: 1
            }
        },

        offsetTop: {
            description: 'Сместить относительно верхнего края вьюпорта. Значение задается в пикселях',

            table: {
                type: {
                    summary: 'number'
                },
                defaultValue: {
                    summary: '0'
                }
            },

            defaultValue: 0,

            control: {
                type: 'number',
                step: 1
            }
        }
    }
};

export {AffixStory} from './stories/affix-default.stories';

export default controls;
