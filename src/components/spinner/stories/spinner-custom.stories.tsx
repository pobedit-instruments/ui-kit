import React from 'react';
import {Story} from '@storybook/react/types-6-0';
import {AppleOutlined} from '@ant-design/icons';

import {Spinner} from 'src/components';
import {SpinnerProps} from 'src/components/spinner';

const Template: Story<SpinnerProps> = ({...props}): JSX.Element => (
    <Spinner indicator={<AppleOutlined spin={true} />}
             size="large"
             {...props}
    />
);

const CustomSpinnerStory = Template.bind({});

CustomSpinnerStory.storyName = 'Пользовательский компонент';

export {CustomSpinnerStory};
