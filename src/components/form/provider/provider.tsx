import React from 'react';
import AntForm from 'antd/lib/form';
import {FormProviderProps} from 'antd/lib/form/context';

const AntFormProvider = AntForm.Provider;
const displayName = 'Form.Provider';

const Provider: React.FunctionComponent<FormProviderProps> = ({children, ...props}) => (
    <AntFormProvider data-test={displayName} {...props}>
        {children}
    </AntFormProvider>
);

Provider.displayName = displayName;

export {Provider};
export type {FormProviderProps};
