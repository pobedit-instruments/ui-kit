import React from 'react';
import AntSkeletonImage, {SkeletonImageProps} from 'antd/lib/skeleton/Image';

const displayName = 'Skeleton.Image';

const SkeletonImage: React.FunctionComponent<SkeletonImageProps> = ({...props}) => (
    <AntSkeletonImage data-test={displayName} {...props} />
);

SkeletonImage.displayName = displayName;

export {SkeletonImage};
export type {SkeletonImageProps};
