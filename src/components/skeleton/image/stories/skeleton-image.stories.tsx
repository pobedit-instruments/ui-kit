import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    Skeleton,
    SkeletonImageProps
} from 'src/components/skeleton';

const {Image} = Skeleton;

const Template: Story<SkeletonImageProps> = ({...props}): JSX.Element => (
    <Image {...props} />
);

const SkeletonImageStory = Template.bind({});

SkeletonImageStory.storyName = 'Изображение';

export {SkeletonImageStory};
