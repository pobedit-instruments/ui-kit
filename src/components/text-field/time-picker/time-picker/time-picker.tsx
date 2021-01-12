import React from 'react';

import AntTimePicker, {
    TimePickerProps as OriginalTimePickerProps,
    TimePickerLocale
} from 'antd/lib/time-picker';

type TimePickerProps = OriginalTimePickerProps & React.RefAttributes<any>;
const displayName = 'TextField.TimePicker';

const TimePicker = React.forwardRef<HTMLElement, TimePickerProps>(({children, ...props}, ref) => (
    <AntTimePicker data-test={displayName}
                   ref={ref}
                   {...props}
    />
));

TimePicker.displayName = displayName;

export {TimePicker};

export type {
    TimePickerProps,
    TimePickerLocale
};
