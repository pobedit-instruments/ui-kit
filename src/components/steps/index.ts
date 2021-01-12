import {
    Steps as OriginalSteps,
    StepsProps
} from './steps';

import {
    Step,
    StepProps
} from './step';

type StepType = typeof OriginalSteps & {
    Step: typeof Step;
};

const Steps = OriginalSteps as StepType;

Steps.Step = Step;

export {Steps};

export type {
    StepsProps,
    StepProps
};
