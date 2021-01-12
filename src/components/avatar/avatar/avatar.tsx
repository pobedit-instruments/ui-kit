import React, {FunctionComponent} from 'react';
import AntAvatar, {AvatarProps} from 'antd/lib/avatar';

const displayName = 'Avatar';

const Avatar: React.FunctionComponent<AvatarProps> = ({children, ...props}) => (
    <AntAvatar data-test={displayName} {...props}>
        {children}
    </AntAvatar>
);

Avatar.displayName = displayName;

export {Avatar};
export type {AvatarProps};
