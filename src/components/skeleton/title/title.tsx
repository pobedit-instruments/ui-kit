import React from 'react';
import AntSkeletonTitle, {SkeletonTitleProps} from 'antd/lib/skeleton/Title';

const displayName = 'Skeleton.Title';

const SkeletonTitle: React.FunctionComponent<SkeletonTitleProps> = ({...props}) => (
    <AntSkeletonTitle data-test={displayName} {...props} />
);

SkeletonTitle.displayName = displayName;

export {SkeletonTitle};
export type {SkeletonTitleProps};
