import React from 'react';
import AntForm, {FormItemProps} from 'antd/lib/form';

const AntFormItem = AntForm.Item;
const displayName = 'Form.Item';

const Item: React.FunctionComponent<FormItemProps> = ({children, ...props}) => (
    <AntFormItem data-test={displayName} {...props}>
        {children}
    </AntFormItem>
);

Item.displayName = displayName;

export {Item};
export type {FormItemProps};
