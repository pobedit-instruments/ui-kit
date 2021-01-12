import React from 'react';
import AntTimePicker, {TimeRangePickerProps} from 'antd/lib/time-picker';

type RangePickerProps = TimeRangePickerProps & React.RefAttributes<any>;

const AntTimeRangePicker = AntTimePicker.RangePicker;
const displayName = 'TextField.TimeRangePicker';

const RangePicker = React.forwardRef<HTMLElement, RangePickerProps>(({children, ...props}, ref) => (
    <AntTimeRangePicker data-test={displayName}
                        ref={ref}
                        {...props}
    />
));

RangePicker.displayName = displayName;

export {RangePicker};
export type {RangePickerProps};
