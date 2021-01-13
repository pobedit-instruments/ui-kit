import {Meta} from '@storybook/react/types-6-0';
import dedent from 'ts-dedent';

import {
    Tooltip,
    TooltipProps
} from 'src/components/tooltip';

import {
    Component,
    Informers,
    getStoryTitle
} from 'src/structure';

const controls: Meta<TooltipProps> = {
    title: getStoryTitle([
        Component.INFORMERS,
        Informers.TOOLTIP
    ]),

    component: Tooltip,

    parameters: {
        docs: {
            description: {
                component: dedent`
                    ### Название компонента

                    **Tooltip**
                `
            }
        }
    },

    argTypes: {
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
        },

        visible: {
            description: 'Видимость',
            table: {
                type: {
                    summary: 'string'
                },
                defaultValue: {
                    summary: false
                }
            },
            control: {
                type: 'boolean'
            }
        }
    }
};

export {TooltipStory} from './stories/tooltip-default.stories';
export default controls;
