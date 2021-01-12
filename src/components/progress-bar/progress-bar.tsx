import React from 'react';

import AntProgressBar, {
    ProgressProps as ProgressBarProps
} from 'antd/lib/progress';

const displayName = 'ProgressBar';

const ProgressBar: React.FunctionComponent<ProgressBarProps> = ({...props}) => (
    <AntProgressBar data-test={displayName} {...props} />
);

ProgressBar.displayName = displayName;

export {ProgressBar};

export type {ProgressBarProps};
