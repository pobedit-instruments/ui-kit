import {
    TimePicker as OriginalTimePicker,
    TimePickerProps
} from './time-picker';

import {
    RangePicker,
    RangePickerProps
} from './range-picker';

type TimePickerType = typeof OriginalTimePicker & {
    RangePicker: typeof RangePicker;
};

const TimePicker = OriginalTimePicker as TimePickerType;

TimePicker.RangePicker = RangePicker;

export {TimePicker};

export type {
    TimePickerProps,
    RangePickerProps as TimeRangePickerProps
};
