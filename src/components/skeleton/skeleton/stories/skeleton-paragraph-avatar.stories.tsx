import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    Skeleton,
    SkeletonProps
} from 'src/components/skeleton';

const Template: Story<SkeletonProps> = ({...props}): JSX.Element => (
    <Skeleton active={true}
              avatar={true}
              paragraph={{rows: 4}}
              {...props}
    />
);

const SkeletonParagraphWithAvatarStory = Template.bind({});

SkeletonParagraphWithAvatarStory.storyName = 'Параграф';

export {SkeletonParagraphWithAvatarStory};
