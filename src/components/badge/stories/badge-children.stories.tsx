import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    Badge,
    BadgeProps
} from 'src/components/badge';

import style from './badge-default.stories.less';

const Template: Story<BadgeProps> = ({...props}): JSX.Element => (
    <Badge count={99} overflowCount={10} {...props}>
        <div className={style.badge} />
    </Badge>
);

const BadgeWithChildrenStory = Template.bind({});

BadgeWithChildrenStory.storyName = 'С дочерними компонентами';

export {BadgeWithChildrenStory};
