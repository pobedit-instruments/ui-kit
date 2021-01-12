import React from 'react';
import AntAutocomplete, {AutoCompleteProps as AutocompleteProps} from 'antd/lib/auto-complete';

const displayName = 'TextField.Autocomplete';

const Autocomplete = React.forwardRef<HTMLElement, AutocompleteProps>(({children, ...props}, ref) => (
    <AntAutocomplete data-test={displayName}
                     ref={ref}
                     {...props}
    >
        {children}
    </AntAutocomplete>
));

Autocomplete.displayName = displayName;

export {Autocomplete};
export type {AutocompleteProps};

export type {
    DataSourceItemObject,
    DataSourceItemType
} from 'antd/lib/auto-complete';
