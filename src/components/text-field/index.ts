import {
    TextField as OriginalTextField,
    TextFieldProps
} from './text-field';

import {
    Autocomplete,
    AutocompleteProps
} from './autocomplete';

import {
    TextFieldGroup,
    TextFieldGroupProps
} from './group';

import {
    DatePicker,
    DatePickerProps,
    DateRangePickerProps
} from './date-picker';

import {
    TextFieldInput,
    TextFieldInputProps
} from './input';

import {
    PasswordTextField,
    PasswordTextFieldProps
} from './password';

import {
    SearchTextField,
    SearchTextFieldProps
} from './search';

import {
    TextareaTextField,
    TextareaTextFieldProps
} from './textarea';

type TextFieldType = typeof OriginalTextField & {
    Autocomplete: typeof Autocomplete;
    DatePicker: typeof DatePicker;
    Group: typeof TextFieldGroup;
    Input: typeof TextFieldInput;
    Password: typeof PasswordTextField;
    Search: typeof SearchTextField;
    Textarea: typeof TextareaTextField;
};

const TextField = OriginalTextField as TextFieldType;

TextField.Autocomplete = Autocomplete;
TextField.DatePicker = DatePicker;
TextField.Group = TextFieldGroup;
TextField.Input = TextFieldInput;
TextField.Password = PasswordTextField;
TextField.Search = SearchTextField;
TextField.Textarea = TextareaTextField;

export {TextField};

export type {
    AutocompleteProps,
    DatePickerProps,
    DateRangePickerProps,
    TextFieldProps,
    TextFieldGroupProps,
    TextFieldInputProps,
    PasswordTextFieldProps,
    SearchTextFieldProps,
    TextareaTextFieldProps
};
