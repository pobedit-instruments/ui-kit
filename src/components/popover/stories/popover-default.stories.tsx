import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    Button,
    Popover,
    Space
} from 'src/components';

import {PopoverProps} from 'src/components/popover';

const content = <p>Немного лет тому назад...</p>;
const title = 'Угадай стих';

const Template: Story<PopoverProps> = ({...props}): JSX.Element => (
    <Space>
        <Popover content={content}
                 title={title}
                 trigger="hover"
                 {...props}
        >
            <Button>Наведи на меня</Button>
        </Popover>

        <Popover content={content}
                 title={title}
                 trigger="focus"
                 {...props}
        >
            <Button>Переведи фокус</Button>
        </Popover>

        <Popover content={content}
                 title={title}
                 trigger="click"
                 {...props}
        >
            <Button>Кликни на меня</Button>
        </Popover>
    </Space>
);

const PopoverStory = Template.bind({});

PopoverStory.storyName = 'Базовое использование';

export {PopoverStory};
