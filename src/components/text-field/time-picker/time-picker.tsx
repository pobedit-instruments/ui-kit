import React from 'react';
import AntTimePicker, {TimePickerLocale} from 'antd/lib/time-picker';

type TimePickerProps = React.ComponentProps<typeof AntTimePicker>;

const displayName = 'TextField.TimePicker';

const TimePicker: React.FunctionComponent<TimePickerProps> = ({children, ...props}) => (
    <AntTimePicker data-test={displayName} {...props} />
);

TimePicker.displayName = displayName;

export {TimePicker};

export type {
    TimePickerProps,
    TimePickerLocale
};
