import React from 'react';
import {Meta} from '@storybook/react/types-6-0';
import dedent from 'ts-dedent';

import {
    Autocomplete,
    AutocompleteProps
} from 'src/components/text-field/autocomplete';

import {
    Component,
    BasicElement,
    TextField,
    getStoryTitle
} from 'src/structure';

const controls: Meta<AutocompleteProps> = {
    title: getStoryTitle([
        Component.BASIC_ELEMENTS,
        BasicElement.TEXT_FIELD,
        TextField.AUTOCOMPLETE
    ]),

    component: Autocomplete,

    parameters: {
        docs: {
            description: {
                component: dedent`
                    ### Название компонента

                    **Autocomplete**
                `
            }
        }
    },

    argTypes: {
        allowClear: {
            description: 'Добавить очистку поля',
            table: {
                type: {
                    summary: 'boolean'
                },
                defaultValue: {
                    summary: 'false'
                }
            },
            control: {
                type: 'boolean'
            }
        }
    }
};

export {AutocompleteStory} from './stories/autocomplete-default.stories';

export default controls;
