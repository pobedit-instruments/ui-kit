import React from 'react';
import AntSteps, {StepsProps} from 'antd/lib/steps';

const displayName = 'Steps';

const Steps: React.FunctionComponent<StepsProps> = ({children, ...props}) => (
    <AntSteps data-test={displayName} {...props}>
        {children}
    </AntSteps>
);

Steps.displayName = displayName;

export {Steps};
export type {StepsProps};
