import React from 'react';

import AntSkeletonAvatar, {
    AvatarProps as SkeletonAvatarProps
} from 'antd/lib/skeleton/Avatar';

const displayName = 'Skeleton.Avatar';

const SkeletonAvatar: React.FunctionComponent<SkeletonAvatarProps> = ({...props}) => (
    <AntSkeletonAvatar data-test={displayName} {...props} />
);

SkeletonAvatar.displayName = displayName;

export {SkeletonAvatar};
export type {SkeletonAvatarProps};
