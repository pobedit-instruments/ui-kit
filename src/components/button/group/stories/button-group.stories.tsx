import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {MinusOutlined, PlusOutlined} from '@ant-design/icons';

import {
    Badge,
    Button,
    Space
} from 'src/components';

import {ButtonProps} from 'src/components/button';

const {Group} = Button;

const Template: Story<ButtonProps> = ({...props}): JSX.Element => {
    const [count, setCount] = React.useState<number>(1);

    const handleDecrease = () => {
        let result = count - 1;

        if (result < 0) {
            result = 0;
        }

        setCount(result);
    };

    const handleIncrease = () => {
        let result = count + 1;

        setCount(result);
    };

    return (
        <Space>
            <Badge count={count} />

            <Group>
                <Button onClick={handleDecrease}>
                    <MinusOutlined />
                </Button>

                <Button onClick={handleIncrease}>
                    <PlusOutlined />
                </Button>
            </Group>
        </Space>
    );
};

const ButtonGroupStory = Template.bind({});

ButtonGroupStory.storyName = 'Группировка кнопок';

export {ButtonGroupStory};
