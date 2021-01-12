import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    Notification,
    NotificationProps
} from 'src/components/notification';

const Template: Story<NotificationProps> = ({...props}): JSX.Element => (
    <Notification message="Success Tips"
                  type="success"
                  showIcon={true}
                  {...props}
    />

);

const NotificationStory = Template.bind({});

NotificationStory.storyName = 'Базовое представление';

export {NotificationStory};
