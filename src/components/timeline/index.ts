import {
    Timeline as OriginalTimeline,
    TimelineProps
} from './timeline';

import {
    TimelineItem,
    TimelineItemProps
} from './item';

type TimelineType = typeof OriginalTimeline & {
    Item: typeof TimelineItem;
};

const Timeline = OriginalTimeline as TimelineType;

Timeline.Item = TimelineItem;

export {Timeline};

export type {
    TimelineProps,
    TimelineItemProps
};
