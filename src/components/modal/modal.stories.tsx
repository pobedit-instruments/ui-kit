import React from 'react';
import {Meta} from '@storybook/react/types-6-0';
import dedent from 'ts-dedent';

import {
    Modal,
    ModalProps
} from 'src/components/modal';

import {
    Component,
    Content,
    getStoryTitle
} from 'src/structure';

const controls: Meta<ModalProps> = {
    title: getStoryTitle([
        Component.CONTENT,
        Content.MODAL
    ]),

    component: Modal,

    parameters: {
        docs: {
            description: {
                component: dedent`
                    ### Название компонента

                    **Modal**
                `
            }
        }
    },

    argTypes: {
        closable: {
            description: 'Закрытие по крестику',

            table: {
                type: {
                    summary: 'boolean'
                },
                defaultValue: {
                    summary: true
                }
            },

            control: {
                type: 'boolean'
            }
        }
    }
};

export {ModalStory} from './stories/modal.stories';

export default controls;
