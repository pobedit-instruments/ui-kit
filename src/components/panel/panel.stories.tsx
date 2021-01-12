import React from 'react';
import {Meta} from '@storybook/react/types-6-0';
import dedent from 'ts-dedent';

import {
    Panel,
    PanelProps
} from 'src/components/panel';

import {
    Component,
    Content,
    getStoryTitle
} from 'src/structure';

const controls: Meta<PanelProps> = {
    title: getStoryTitle([
        Component.CONTENT,
        Content.PANEL
    ]),

    component: Panel,

    parameters: {
        docs: {
            description: {
                component: dedent`
                    ### Название компонента

                    **Panel**
                `
            }
        }
    },

    argTypes: {
        keyboard: {
            description: 'Закрытие по Esc',

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
        },

        placement: {
            description: 'Расположение панели',
            table: {
                type: {
                    summary: 'top | right | bottom | left'
                },
                defaultValue: {
                    summary: 'right'
                }
            },
            control: {
                type: 'select',
                options: [
                    'right',
                    'top',
                    'bottom',
                    'left'
                ]
            }
        }
    }
};

export {PanelStory} from './stories/panel.stories';
export {MultiPanelStory} from './stories/panel-multi.stories';

export default controls;
