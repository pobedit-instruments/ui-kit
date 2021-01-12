import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    Badge,
    BadgeProps
} from 'src/components/badge';

import style from './badge-default.stories.less';

const Template: Story<BadgeProps> = ({...props}): JSX.Element => (
    <Badge dot={true} {...props}>
        <div className={style.badge} />
    </Badge>
);

const BadgeWithDotStory = Template.bind({});

BadgeWithDotStory.storyName = 'Вид с точкой';

export {BadgeWithDotStory};
