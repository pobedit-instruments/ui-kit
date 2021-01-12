import React from 'react';

import AntForm, {
    ErrorListProps as FormErrorListProps
} from 'antd/lib/form';

const AntFormErrorList = AntForm.ErrorList;
const displayName = 'Form.ErrorList';

const ErrorList: React.FunctionComponent<FormErrorListProps> = ({...props}) => (
    <AntFormErrorList data-test={displayName} {...props} />
);

ErrorList.displayName = displayName;

export {ErrorList};
export type {FormErrorListProps};
