import {Meta} from '@storybook/react/types-6-0';
import dedent from 'ts-dedent';

import {
    Slider,
    SliderProps
} from 'src/components/slider';

import {
    Component,
    BasicElement,
    getStoryTitle
} from 'src/structure';

const controls: Meta<SliderProps> = {
    title: getStoryTitle([
        Component.BASIC_ELEMENTS,
        BasicElement.SLIDER
    ]),

    component: Slider,

    parameters: {
        docs: {
            description: {
                component: dedent`
                    <br />

                    ### Название компонента

                    **Slider**

                    Управляет интервальными значениями
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

        disabled: {
            description: 'Заблокировать слайдер',
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

export {SliderStory} from './stories/slider-default.stories';

export default controls;
