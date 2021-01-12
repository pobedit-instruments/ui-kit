import React from 'react';
import AntSkeletonInput, {SkeletonInputProps} from 'antd/lib/skeleton/Input';

const displayName = 'Skeleton.Input';

const SkeletonInput: React.FunctionComponent<SkeletonInputProps> = ({...props}) => (
    <AntSkeletonInput data-test={displayName} {...props} />
);

SkeletonInput.displayName = displayName;

export {SkeletonInput};
export type {SkeletonInputProps};
