import React from 'react';
import AntTextField, {SearchProps} from 'antd/lib/input';

type SearchTextFieldProps = SearchProps & React.RefAttributes<AntTextField>;
const AntSearchTextField = AntTextField.Search;
const displayName = 'TextField.Search';

const SearchTextField = React.forwardRef<AntTextField, SearchTextFieldProps>(({children, ...props}, ref) => (
    <AntSearchTextField data-test={displayName}
                        ref={ref}
                        {...props}
    >
        {children}
    </AntSearchTextField>
));

SearchTextField.displayName = displayName;

export {SearchTextField};
export type {SearchTextFieldProps};
