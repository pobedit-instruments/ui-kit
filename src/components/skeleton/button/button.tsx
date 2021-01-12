import React from 'react';
import AntSkeletonButton, {SkeletonButtonProps} from 'antd/lib/skeleton/Button';

const displayName = 'Skeleton.Button';

const SkeletonButton: React.FunctionComponent<SkeletonButtonProps> = ({...props}) => (
    <AntSkeletonButton data-test={displayName} {...props} />
);

SkeletonButton.displayName = displayName;

export {SkeletonButton};
export type {SkeletonButtonProps};
