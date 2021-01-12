import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    MinusOutlined,
    PlusOutlined
} from '@ant-design/icons';

import {
    Badge,
    Button,
    Space,
    Switch
} from 'src/components';

import {BadgeProps} from 'src/components/badge';
import style from './badge-default.stories.less';

const {Group} = Button;

const Template: Story<BadgeProps> = ({...props}): JSX.Element => {
    const [count, setCount] = React.useState<number>(1);
    const [visible, setVisible] = React.useState<boolean>(true);

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

    const handleChange = (state: boolean) => {
        setVisible(state);
    };

    return (
        <Space direction="vertical">
            <Space size="large">
                <Badge count={count} {...props}>
                    <div className={style.badge} />
                </Badge>

                <Group>
                    <Button onClick={handleDecrease}>
                        <MinusOutlined />
                    </Button>

                    <Button onClick={handleIncrease}>
                        <PlusOutlined />
                    </Button>
                </Group>
            </Space>

            <Space size="large">
                <Badge dot={visible} {...props}>
                    <div className={style.badge} />
                </Badge>

                <Switch onChange={handleChange}
                        checked={visible}
                />
            </Space>
        </Space>
    );
};

const BadgeWithDynamicStory = Template.bind({});

BadgeWithDynamicStory.storyName = 'Интерактивное управление';

export {BadgeWithDynamicStory};
