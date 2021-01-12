import {
    Avatar as OriginalAvatar,
    AvatarProps
} from './avatar';

import {
    AvatarGroup,
    AvatarGroupProps
} from './group';

type AvatarType = typeof OriginalAvatar & {
    Group: typeof AvatarGroup;
};

const Avatar = OriginalAvatar as AvatarType;

Avatar.Group = AvatarGroup;

export {Avatar};

export type {
    AvatarProps,
    AvatarGroupProps
};
