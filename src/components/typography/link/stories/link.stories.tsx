import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {Link, LinkProps} from 'src/components/typography/link';

const handleClick = (event: React.MouseEvent<HTMLAnchorElement>): void => {
    event.preventDefault();
};

const Template: Story<LinkProps> = (props): JSX.Element => (
    <Link href="/" onClick={handleClick} {...props}>Ссылка</Link>
);

const LinkStory = Template.bind({});

LinkStory.storyName = 'Ссылка';

export {LinkStory};
