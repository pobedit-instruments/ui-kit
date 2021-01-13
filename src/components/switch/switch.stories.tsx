import {Meta} from '@storybook/react/types-6-0';
import dedent from 'ts-dedent';

import {
    Switch,
    SwitchProps
} from 'src/components/switch';

import {
    Component,
    BasicElement,
    getStoryTitle
} from 'src/structure';

const controls: Meta<SwitchProps> = {
    title: getStoryTitle([
        Component.BASIC_ELEMENTS,
        BasicElement.SWITCH
    ]),

    component: Switch,

    parameters: {
        docs: {
            description: {
                component: dedent`
                    <br />

                    ### Название компонента

                    **Switch**

                    Переключатель
                `
            }
        }
    },

    argTypes: {
        autoFocus: {
            description: 'Установить автофокус',
            table: {
                type: {
                    summary: 'boolean'
                }
            },
            control: {
                type: 'boolean'
            }
        },

        checked: {
            description: 'Установить значение',
            table: {
                type: {
                    summary: 'boolean'
                }
            },
            control: {
                type: 'boolean'
            }
        }
    }
};

export {SwitchStory} from './stories/switch-default.stories';

export default controls;
