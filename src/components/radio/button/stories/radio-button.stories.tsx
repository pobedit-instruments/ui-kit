import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    Radio,
    RadioButtonProps,
} from 'src/components/radio';

const Template: Story<RadioButtonProps> = ({...props}): JSX.Element => {
    const {Group, Button} = Radio;

    return (
        <Group defaultValue="x"
               buttonStyle="solid"
        >
            <Button value="x" {...props}>
                Арбуз
            </Button>

            <Button value="y" {...props}>
                Банан
            </Button>

            <Button value="z"
                    disabled={true}
                    {...props}
            >
                Киви
            </Button>
        </Group>
    );
};

const RadioButtonStory = Template.bind({});

RadioButtonStory.storyName = 'Группа кнопок';

export {RadioButtonStory};
