import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    Skeleton,
    SkeletonInputProps
} from 'src/components/skeleton';

const {Button} = Skeleton;

const Template: Story<SkeletonInputProps> = ({...props}): JSX.Element => (
    <Button active={true} {...props}/>
);

const SkeletonInputStory = Template.bind({});

SkeletonInputStory.storyName = 'Поле ввода';

export {SkeletonInputStory};
