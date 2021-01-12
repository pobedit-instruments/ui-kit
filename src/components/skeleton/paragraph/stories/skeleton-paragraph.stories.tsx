import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    Skeleton,
    SkeletonParagraphProps
} from 'src/components/skeleton';

const {Paragraph} = Skeleton;

const Template: Story<SkeletonParagraphProps> = ({...props}): JSX.Element => (
    <Paragraph rows={2} {...props} />
);

const SkeletonParagraphStory = Template.bind({});

SkeletonParagraphStory.storyName = 'Параграф';

export {SkeletonParagraphStory};
