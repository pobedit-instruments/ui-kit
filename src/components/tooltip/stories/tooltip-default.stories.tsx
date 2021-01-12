import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    Button,
    Tooltip
} from 'src/components';

import {TooltipProps} from 'src/components/tooltip';

const Template: Story<TooltipProps> = ({...props}): JSX.Element => (
    <Tooltip placement="right"
             title="О дивный мир"
             {...props}
    >
        <Button>Наведи</Button>
    </Tooltip>
);

const TooltipStory = Template.bind({});

TooltipStory.storyName = 'Базовое использование';

export {TooltipStory};
