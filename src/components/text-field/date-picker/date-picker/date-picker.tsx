import React from 'react';
import AntDatePicker, {DatePickerProps} from 'antd/lib/date-picker';

const displayName = 'TextField.DatePicker';

const DatePicker: React.FunctionComponent<DatePickerProps> = ({children, ...props}) => (
    <AntDatePicker data-test={displayName} {...props}>
        {children}
    </AntDatePicker>
);

DatePicker.displayName = displayName;

export {DatePicker};
export type {DatePickerProps};
