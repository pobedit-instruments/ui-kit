import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {Title, TitleProps} from 'src/components/typography/title';

const Template: Story<TitleProps> = (props) => (
    <Title {...props}>
        Немного лет тому назад...
    </Title>
);

const TitleStory = Template.bind({});

TitleStory.storyName = 'Заголовок';

TitleStory.args = {
    copyable: false
};

TitleStory.argTypes = {
    level: {
        description: 'Уровень',
        table: {
            type: {
                summary: 'number',
                detail: '1 | 2 | 3 | 4 | 5 -> H1, H2, H3, H4, H5'
            }
        },

        defaultValue: false,

        control: {
            type: 'select',
            options: [1, 2, 3, 4, 5]
        }
    }
};

export {TitleStory};
