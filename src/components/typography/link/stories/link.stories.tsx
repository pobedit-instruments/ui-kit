import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {preventClick} from 'src/utils/events';
import {Link, LinkProps} from 'src/components/typography/link';

const Template: Story<LinkProps> = (props): JSX.Element => (
    <Link href="/" onClick={preventClick} {...props}>Ссылка</Link>
);

const LinkStory = Template.bind({});

LinkStory.storyName = 'Ссылка';

export {LinkStory};
