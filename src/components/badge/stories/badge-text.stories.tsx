import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    Badge,
    BadgeProps
} from 'src/components/badge';

const Template: Story<BadgeProps> = ({...props}): JSX.Element => (
    <Badge status="success" text="Успешно" />
);

const BadgeWithTextStory = Template.bind({});

BadgeWithTextStory.storyName = 'Текстовый статус';

export {BadgeWithTextStory};
