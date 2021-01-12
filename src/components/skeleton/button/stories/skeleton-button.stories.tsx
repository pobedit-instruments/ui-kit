import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    Skeleton,
    SkeletonButtonProps
} from 'src/components/skeleton';

const {Button} = Skeleton;

const Template: Story<SkeletonButtonProps> = ({...props}): JSX.Element => (
    <Button active={true}
            shape="round"
            {...props}
    />
);

const SkeletonButtonStory = Template.bind({});

SkeletonButtonStory.storyName = 'Кнопка';

export {SkeletonButtonStory};
