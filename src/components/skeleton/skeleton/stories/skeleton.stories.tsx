import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    Skeleton,
    SkeletonProps
} from 'src/components/skeleton';

const Template: Story<SkeletonProps> = ({...props}): JSX.Element => (
    <Skeleton active={true} {...props} />
);

const SkeletonStory = Template.bind({});

SkeletonStory.storyName = 'Базовое представление';

export {SkeletonStory};
