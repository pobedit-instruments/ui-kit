import React from 'react';
import {Story} from '@storybook/react/types-6-0';
import {Space} from 'antd';

import {
    Button,
    ButtonProps
} from 'src/components/button';

const Template: Story<ButtonProps> = ({...props}): JSX.Element => (
    <Space size="middle">
        <Button {...props}>Кнопка</Button>
        <Button  {...props} type="primary">Кнопка</Button>
    </Space>
);

const ButtonLayoutStory = Template.bind({});

ButtonLayoutStory.storyName = 'Распложение кнопок';

ButtonLayoutStory.parameters = {
    docs: {
        description: {
            story: 'Расстояние между кнопками задается с помощью компонента `Space`'
        }
    }
};

export {ButtonLayoutStory};
