import React from 'react';
import {Story} from '@storybook/react/types-6-0';
import dedent from 'ts-dedent';

import {
    Radio,
    RadioProps
} from 'src/components/radio';

const {Group, Button} = Radio;

const Template: Story<RadioProps> = ({...props}): JSX.Element => (
    <Group defaultValue="moscow" buttonStyle="solid">
        <Button value="moscow">Москва</Button>
        <Button value="spb">Санкт-Петербург</Button>
        <Button value="ekb">Екатеринбург</Button>
    </Group>
);

const ButtonWithStateStory = Template.bind({});

ButtonWithStateStory.storyName = 'Состояние кнопок';

ButtonWithStateStory.parameters = {
    docs: {
        description: {
            story: 'Состояние кнопок задается через `Radio.Group`'
        },

        source: {
            code: dedent`
                const {Group, Button} = Radio;

                const Template = ({...props}: ButtonProps): JSX.Element => (
                    <Group defaultValue="moscow" buttonStyle="solid">
                        <Button value="moscow">Москва</Button>
                        <Button value="spb">Санкт-Петербург</Button>
                        <Button value="ekb">Екатеринбург</Button>
                    </Group>
                );
            `
        }
    }
};

export {ButtonWithStateStory};
