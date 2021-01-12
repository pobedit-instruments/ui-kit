import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {Paragraph, ParagraphProps} from 'src/components/typography/paragraph';

const Template: Story<ParagraphProps> = (props): JSX.Element => (
    <Paragraph {...props}>
        Немного лет тому назад...
    </Paragraph>
);

const ParagraphStory = Template.bind({});

ParagraphStory.storyName = 'Параграф';

ParagraphStory.args = {
    copyable: false
};

ParagraphStory.argTypes = {
    strong: {
        description: 'Выделить жирным',
        table: {
            type: {
                summary: 'boolean'
            }
        },

        defaultValue: false,

        control: {
            type: 'boolean'
        }
    }
};

export {ParagraphStory};
