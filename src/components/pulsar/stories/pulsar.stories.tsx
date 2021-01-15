import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {Pulsar, PulsarProps} from 'src/components/pulsar';

const Template: Story<PulsarProps> = ({...props}): JSX.Element => (
    <Pulsar {...props} />
);

const PulsarStory = Template.bind({});

PulsarStory.storyName = 'Базовое использование';

export {PulsarStory};
