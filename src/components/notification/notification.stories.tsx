import React from 'react';
import {Meta} from '@storybook/react/types-6-0';
import dedent from 'ts-dedent';

import {
    Tabs,
    TabsProps
} from 'src/components/tabs';

import {
    Component,
    Informers,
    getStoryTitle
} from 'src/structure';

const controls: Meta<TabsProps> = {
    title: getStoryTitle([
        Component.INFORMERS,
        Informers.NOTIFICATION
    ]),

    component: Tabs,

    parameters: {
        docs: {
            description: {
                component: dedent`
                    ### Название компонента

                    **Notification**

                    ### Дочерние компоненты

                    * **Notification.Toast**
                    * **Notification.Message**
                `
            }
        }
    },

    argTypes: {
        key: {
            description: 'Уникальный идентификатор сообщения',
            table: {
                type: {
                    summary: 'string | number'
                }
            },
            control: {
                type: 'text'
            }
        }
    }
};

export {NotificationStory} from './notification/stories/notification.stories';
export {MessageNotificationStory} from './message/stories/message.stories';
export {NotificationToastStory} from './toast/stories/toast.stories';

export default controls;
