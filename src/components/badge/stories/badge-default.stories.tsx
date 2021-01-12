import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    Badge,
    BadgeProps
} from 'src/components/badge';

const Template: Story<BadgeProps> = ({...props}): JSX.Element => (
    <Badge count={100} />
);

const BadgeStory = Template.bind({});

BadgeStory.storyName = 'Стандартный вид';

export {BadgeStory};
