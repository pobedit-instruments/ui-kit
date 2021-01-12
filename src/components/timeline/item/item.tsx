import React from 'react';

import AntTimeline, {TimelineItemProps} from 'antd/lib/timeline';

const AntTimelineItem = AntTimeline.Item;
const displayName = 'Timeline.Item';

const TimelineItem: React.FunctionComponent<TimelineItemProps> = ({children, ...props}) => (
    <AntTimelineItem data-test={displayName} {...props}>
        {children}
    </AntTimelineItem>
);

TimelineItem.displayName = displayName;

export {TimelineItem};
export type {TimelineItemProps};
