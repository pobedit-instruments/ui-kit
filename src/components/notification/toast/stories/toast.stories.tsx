import React from 'react';
import {Story} from '@storybook/react/types-6-0';
import dedent from 'ts-dedent';
import {RadiusUprightOutlined} from '@ant-design/icons';

import {
    Button,
    Notification
} from 'src/components';

import {ToastNotificationProps} from 'src/components/notification';

const {Toast} = Notification;

const openNotification = (props: ToastNotificationProps) => {
    Toast.info({
        message: 'Оповещение',
        description: dedent `
            Изучение полиномиальных уравнений и их решений долгое время составляло
            едва ли не главный объект «классической алгебры»
        `,
        placement: 'topRight',
        ...props
    });
};

const Template: Story<ToastNotificationProps> = (props: ToastNotificationProps): JSX.Element => (
    <Button type="primary" onClick={() => openNotification(props)}>
        <RadiusUprightOutlined/>
        Показать оповещение
    </Button>
);

const NotificationToastStory = Template.bind({});

NotificationToastStory.storyName = 'Тостовое уведомление';

NotificationToastStory.parameters = {
    docs: {
        source: {
            code: dedent`
                const {Toast} = Notification;

                const openNotification = (props: ToastNotificationProps) => {
                    Toast.info({
                        message: 'Оповещение',
                        description: 'Изучение полиномиальных уравнений и их решений — весёлое занятие!',
                        placement: 'topRight',
                        ...props
                    });
                };

                const Template: Story<ToastNotificationProps> = (props: ToastNotificationProps): JSX.Element => (
                    <Button type="primary" onClick={() => openNotification(props)}>
                        <RadiusUprightOutlined/>
                        Показать оповещение
                    </Button>
                );
            `
        }
    }
};

export {NotificationToastStory};
