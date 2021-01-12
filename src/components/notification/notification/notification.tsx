import React from 'react';

import AntAlert, {
    AlertProps as NotificationProps
} from 'antd/lib/alert';

const displayName = 'Notification';

const Notification: React.FunctionComponent<NotificationProps> = ({children, ...props}) => (
    <AntAlert data-test={displayName} {...props}>
        {children}
    </AntAlert>
);

Notification.displayName = displayName;

export {Notification};
export type {NotificationProps};
