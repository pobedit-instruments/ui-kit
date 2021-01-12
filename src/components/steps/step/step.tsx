import React from 'react';
import AntSteps, {StepProps} from 'antd/lib/steps';

const AntStep = AntSteps.Step;
const displayName = 'Steps.Step';

const Step: React.FunctionComponent<StepProps> = ({...props}) => (
    <AntStep data-test={displayName} {...props} />
);

Step.displayName = displayName;

export {Step};
export type {StepProps};
