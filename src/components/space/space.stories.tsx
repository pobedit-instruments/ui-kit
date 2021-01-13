import {Meta} from '@storybook/react/types-6-0';
import dedent from 'ts-dedent';

import {
    Space,
    SpaceProps
} from 'src/components/space';

import {
    Component,
    Layout,
    getStoryTitle
} from 'src/structure';

const controls: Meta<SpaceProps> = {
    title: getStoryTitle([
        Component.LAYOUT,
        Layout.SPACE
    ]),

    component: Space,

    parameters: {
        docs: {
            description: {
                component: dedent`
                    <br />

                    ### Название компонента

                    **Space**

                    Позволяет добавить пространство между компонентами.
                `
            }
        }
    },

    argTypes: {
        align: {
            description: 'Выравнивание',
            table: {
                type: {
                    summary: 'start | end | center | baseline'
                },
                defaultValue: {
                    summary: '-'
                }
            },
            control: {
                type: 'select',
                options: [
                    'start',
                    'end',
                    'center',
                    'baseline'
                ]
            }
        },

        direction: {
            description: 'Направление',
            table: {
                type: {
                    summary: 'vertical | horizontal'
                },
                defaultValue: {
                    summary: 'horizontal'
                }
            },
            control: {
                type: 'select',
                options: [
                    'vertical',
                    'horizontal'
                ]
            }
        },

        size: {
            description: 'Размер отступа',
            table: {
                type: {
                    summary: 'small | middle | large | number'
                },
                defaultValue: {
                    summary: 'small'
                }
            },
            control: {
                type: 'select',
                options: [
                    'small',
                    'middle',
                    'large',
                    'number'
                ]
            }
        },

        split: {
            description: 'Разделитель',
            table: {
                type: {
                    summary: 'React.ReactNode'
                },
                defaultValue: {
                    summary: '-'
                }
            },
            control: {
                type: 'object'
            }
        }
    }
};

export {SpaceStory} from './stories/space-default.stories';

export default controls;
