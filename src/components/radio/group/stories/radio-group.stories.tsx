import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    Radio,
    RadioGroupProps,
} from 'src/components/radio';

const Template: Story<RadioGroupProps> = ({...props}): JSX.Element => {
    const {Group} = Radio;

    return (
        <Group defaultValue="x">
            <Radio value="x">
                Арбуз
            </Radio>

            <Radio value="y">
                Банан
            </Radio>

            <Radio value="z"
                   disabled={true}
            >
                Киви
            </Radio>
        </Group>
    );
};

const RadioGroupStory = Template.bind({});

RadioGroupStory.storyName = 'Группа элементов';

export {RadioGroupStory};
