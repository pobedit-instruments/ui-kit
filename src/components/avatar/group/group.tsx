import React from 'react';

import {
    Group as AntAvatarGroup,
    GroupProps
} from 'antd/lib/avatar';

const displayName = 'Avatar.Group';

const AvatarGroup: React.FunctionComponent<GroupProps> = ({children, ...props}) => (
    <AntAvatarGroup data-test={displayName} {...props}>
        {children}
    </AntAvatarGroup>
);

AvatarGroup.displayName = displayName;

export {AvatarGroup};
export type {GroupProps as AvatarGroupProps};
