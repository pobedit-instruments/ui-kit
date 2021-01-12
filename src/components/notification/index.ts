import {ToastNotification} from './toast';
import {MessageNotification} from './message';

import {
    Notification as OriginalNotification,
    NotificationProps
} from './notification';

type NotificationType = typeof OriginalNotification & {
    Toast: typeof ToastNotification,
    Message: typeof MessageNotification
};

const Notification = OriginalNotification as NotificationType;

Notification.Message = MessageNotification;
Notification.Toast = ToastNotification;

export {Notification};
export type {NotificationProps};

export type {
    ToastNotificationPlacement,
    ToastNotificationType,
    ToastNotificationConfigProps,
    ToastNotificationProps
} from './toast';

export type {
    MessageNotificationProps,
    MessageNotificationConfigProps,
    MessageNotificationType,
    MessageNotificationPlacement
} from './message';
