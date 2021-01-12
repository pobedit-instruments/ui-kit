import React from 'react';
import AntSpace, {SpaceProps} from 'antd/lib/space';

const displayName = 'Space';

const Space: React.FunctionComponent<SpaceProps> = ({...props}) => (
    <AntSpace data-test={displayName} {...props} />
);

Space.displayName = displayName;

export {Space};
export type {SpaceProps};

export type {
    SpaceContext,
    SpaceSize
} from 'antd/lib/space';
