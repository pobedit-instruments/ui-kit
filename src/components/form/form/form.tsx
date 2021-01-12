import React from 'react';
import AntForm, {FormProps} from 'antd/lib/form';

const displayName = 'Form';

const Form: React.FunctionComponent<FormProps> = ({children, ...props}) => (
    <AntForm data-test={displayName} {...props}>
        {children}
    </AntForm>
);

Form.displayName = displayName;

export {Form};
export type {FormProps};
export type {FormInstance} from 'antd/lib/form';
