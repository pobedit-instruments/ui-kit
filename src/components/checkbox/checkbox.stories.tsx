import React from 'react';
import {Meta} from '@storybook/react/types-6-0';
import dedent from 'ts-dedent';

import {
    Checkbox,
    CheckboxProps
} from 'src/components/checkbox';

import {
    Component,
    BasicElement,
    getStoryTitle
} from 'src/structure';

const controls: Meta<CheckboxProps> = {
    title: getStoryTitle([
        Component.BASIC_ELEMENTS,
        BasicElement.CHECKBOX
    ]),

    component: Checkbox,

    parameters: {
        docs: {
            description: {
                component: dedent`
                    <br />

                    ### Название компонента

                    **Checkbox**

                    ### Дочерние компоненты

                    * **Checkbox.Group**
                `
            }
        }
    },

    argTypes: {
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
        },

        checked: {
            description: 'Установить флаг',
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

export {CheckboxStory} from './checkbox/stories/checkbox-default.stories';
export {CheckboxGroupStory} from './group/stories/checkbox-group.stories';

export default controls;
