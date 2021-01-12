import React from 'react';
import AntSkeleton, {SkeletonProps} from 'antd/lib/skeleton';

const displayName = 'Skeleton';

const Skeleton: React.FunctionComponent<SkeletonProps> = ({...props}) => (
    <AntSkeleton data-test={displayName} {...props} />
);

Skeleton.displayName = displayName;

export {Skeleton};
export type {SkeletonProps};
