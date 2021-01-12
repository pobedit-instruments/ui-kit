import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    Skeleton,
    SkeletonAvatarProps
} from 'src/components/skeleton';

const {Avatar} = Skeleton;

const Template: Story<SkeletonAvatarProps> = ({...props}): JSX.Element => (
    <Avatar active={true} {...props} />
);

const SkeletonAvatarStory = Template.bind({});

SkeletonAvatarStory.storyName = 'Аватар';

export {SkeletonAvatarStory};
