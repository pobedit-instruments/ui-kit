import React from 'react';
import {Meta} from '@storybook/react/types-6-0';
import dedent from 'ts-dedent';

import {
    TextField,
    TextFieldProps
} from 'src/components/text-field';

import {
    Component,
    BasicElement,
    getStoryTitle
} from 'src/structure';

const controls: Meta<TextFieldProps> = {
    title: getStoryTitle([
        Component.BASIC_ELEMENTS,
        BasicElement.TEXT_FIELD
    ]),

    component: TextField,

    parameters: {
        docs: {
            description: {
                component: dedent`
                    ### Название компонента

                    **TextField**

                    ### Типы полей ввода

                    * **TextField.Input** — Текстовое поле
                    * **TextField.Textarea** — Многострочное текстовое поле
                    * **TextField.Search** — Поле поиска
                    * **TextField.Group** — Группировка полей
                    * **TextField.Password** — Поле с паролем
                    * **NumberTextField** — Выбор числа
                    * **DatePicker** — Выбор даты
                    * **TimePicker** — Выбора времени
                    * **Autocomplete** — Автодополнение
                `
            }
        }
    },

    argTypes: {
        id: {
            description: 'Идентификатор',
            table: {
                type: {
                    summary: 'string'
                },
                defaultValue: {
                    summary: '-'
                }
            },
            control: {
                type: 'text'
            }
        }
    }
};

export {TextFieldStory} from './text-field/stories/text-field-default.stories';
export {NumberTextFieldStory} from './number/stories/input-number.stories';
export {TextFieldTextareaStory} from './textarea/stories/input-textarea.stories';
export {TextFieldPasswordStory} from './password/stories/input-password.stories';
export {TextFieldSearchStory} from './search/stories/input-search.stories';
export {TextFieldGroupStory} from './group/stories/input-group.stories';

export default controls;
