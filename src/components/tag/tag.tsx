import React from 'react';

import AntTag, {TagProps} from 'antd/lib/tag';

const displayName = 'Tag';

const Tag: React.FunctionComponent<TagProps> = ({children, ...props}) => (
    <AntTag data-test={displayName} {...props}
    >
        {children}
    </AntTag>
);

Tag.displayName = displayName;

export {Tag};
export type {TagProps};

export type {
    TagType,
    CheckableTagProps
} from 'antd/lib/tag';
