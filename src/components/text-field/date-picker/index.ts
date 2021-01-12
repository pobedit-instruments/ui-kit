import {
    DatePicker as OriginalDatePicker,
    DatePickerProps
} from './date-picker';

import {
    RangePicker,
    RangePickerProps
} from './range-picker';

type DatePickerType = typeof OriginalDatePicker & {
    RangePicker: typeof RangePicker;
};

const DatePicker = OriginalDatePicker as DatePickerType;

DatePicker.RangePicker = RangePicker;

export {DatePicker};

export type {
    DatePickerProps,
    RangePickerProps as DateRangePickerProps
};
