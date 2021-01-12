import React from 'react';
import AntDatePicker, {RangePickerProps} from 'antd/lib/date-picker';

const AntDateRangePicker = AntDatePicker.RangePicker;
const displayName = 'TextField.RangePicker';

const RangePicker: React.FunctionComponent<RangePickerProps> = ({children, ...props}) => (
    <AntDateRangePicker data-test={displayName} {...props}>
        {children}
    </AntDateRangePicker>
);


RangePicker.displayName = displayName;

export {RangePicker};
export type {RangePickerProps};
