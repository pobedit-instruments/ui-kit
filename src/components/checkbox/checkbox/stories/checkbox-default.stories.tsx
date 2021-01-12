import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    Checkbox,
    CheckboxProps
} from 'src/components/checkbox';

const Template: Story<CheckboxProps> = ({...props}): JSX.Element => (
    <Checkbox {...props} />
);

const CheckboxStory = Template.bind({});

CheckboxStory.storyName = 'Базовый тип';

export {CheckboxStory};
