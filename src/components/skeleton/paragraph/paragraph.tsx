import React from 'react';
import AntSkeletonParagraph, {SkeletonParagraphProps} from 'antd/lib/skeleton/Paragraph';

const displayName = 'Skeleton.Paragraph';

const SkeletonParagraph: React.FunctionComponent<SkeletonParagraphProps> = ({...props}) => (
    <AntSkeletonParagraph data-test={displayName} {...props} />
);

SkeletonParagraph.displayName = displayName;

export {SkeletonParagraph};
export type {SkeletonParagraphProps};
