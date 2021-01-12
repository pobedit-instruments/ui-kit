import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {Spinner, SpinnerProps} from 'src/components/spinner';

const Template: Story<SpinnerProps> = ({...props}): JSX.Element => (
    <Spinner {...props} />
)

const SpinnerStory = Template.bind({});

SpinnerStory.storyName = 'Базовое использование';

export {SpinnerStory};
