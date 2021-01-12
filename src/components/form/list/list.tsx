import React from 'react';
import AntForm, {FormListProps} from 'antd/lib/form';

const AntFormList = AntForm.List;
const displayName = 'Form.List';

const List: React.FunctionComponent<FormListProps> = ({children, ...props}) => (
    <AntFormList data-test={displayName} {...props}>
        {children}
    </AntFormList>
);

List.displayName = displayName;

export {List};
export type {FormListProps};
