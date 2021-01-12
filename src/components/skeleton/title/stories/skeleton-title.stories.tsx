import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    Skeleton,
    SkeletonTitleProps
} from 'src/components/skeleton';

const {Title} = Skeleton;

const Template: Story<SkeletonTitleProps> = ({...props}): JSX.Element => (
    <Title {...props} />
);

const SkeletonTitleStory = Template.bind({});

SkeletonTitleStory.storyName = 'Заголовок';

export {SkeletonTitleStory};
