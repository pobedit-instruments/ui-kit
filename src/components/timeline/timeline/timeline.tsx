import React from 'react';

import AntTimeline, {TimelineProps} from 'antd/lib/timeline';

const displayName = 'Timeline';

const Timeline: React.FunctionComponent<TimelineProps> = ({children, ...props}) => (
    <AntTimeline data-test={displayName} {...props}>
        {children}
    </AntTimeline>
);

Timeline.displayName = displayName;

export {Timeline};
export type {TimelineProps};
