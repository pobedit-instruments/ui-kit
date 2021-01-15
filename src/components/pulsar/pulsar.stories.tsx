import {Meta} from '@storybook/react/types-6-0';
import dedent from 'ts-dedent';

import {
    Pulsar,
    PulsarProps
} from 'src/components/pulsar';

import {
    Component,
    Indicator,
    getStoryTitle
} from 'src/structure';

const controls: Meta<PulsarProps> = {
    title: getStoryTitle([
        Component.INDICATORS,
        Indicator.PULSAR
    ]),

    component: Pulsar,

    parameters: {
        docs: {
            description: {
                component: dedent`
                    ### Название компонента

                    **Pulsar**

                    ### Описание

                    Используются для привлечения внимания пользователя к элементам интерфейса.
                `
            }
        }
    },

    argTypes: {
        color: {
            description: 'Задать цвет',
            table: {
                type: {
                    summary: 'string'
                },
                defaultValue: {
                    summary: 'red'
                }
            },
            control: {
                type: 'text'
            }
        },

        size: {
            description: 'Установить размер пульсара',
            table: {
                type: {
                    summary: 'large | middle | small | number'
                },
                defaultValue: {
                    summary: 'small'
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
        }
    }
};

export {PulsarStory} from './stories/pulsar.stories';

export default controls;
