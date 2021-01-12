import React from 'react';
import {Story} from '@storybook/react/types-6-0';
import dedent from 'ts-dedent';

import {
    Button,
    Notification
} from 'src/components';

import {MessageNotificationProps} from 'src/components/notification';

const {Message} = Notification;
const key = 'updatable';

const openNotification = (props: MessageNotificationProps) => {
    Message.loading({
        content: 'Загрузка...',
        key
    });

    window.setTimeout(() => {
        Message.success({
            key,
            content: 'Изучение полиномиальных уравнений завершено!',
            duration: 2
        });
    }, 1000);
};

const Template: Story<MessageNotificationProps> = (props: MessageNotificationProps): JSX.Element => (
    <Button type="primary" onClick={() => openNotification(props)}>
        Показать сообщение
    </Button>
);

const MessageNotificationStory = Template.bind({});

MessageNotificationStory.storyName = 'Информационное сообщение';

MessageNotificationStory.parameters = {
    docs: {
        source: {
            code: dedent`
                const {Message} = Notification;
                const key = 'updatable';

                const openNotification = (props: MessageNotificationProps) => {
                    Message.loading({
                        content: 'Загрузка...',
                        key
                    });

                    window.setTimeout(() => {
                        Message.success({
                            key,
                            content: 'Изучение полиномиальных уравнений завершено!',
                            duration: 2
                        });
                    }, 1000);
                };

                const Template: Story<MessageNotificationProps> = (props: MessageNotificationProps): JSX.Element => (
                    <Button type="primary" onClick={() => openNotification(props)}>
                        Показать сообщение
                    </Button>
                );
            `
        }
    }
};

export {MessageNotificationStory};
