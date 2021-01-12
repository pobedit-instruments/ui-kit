import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    MinusOutlined,
    PlusOutlined
} from '@ant-design/icons';

import {
    Button,
    ProgressBar,
    Space
} from 'src/components';

import {ProgressBarProps} from 'src/components/progress-bar';

const {Group} = Button;

const Template: Story<ProgressBarProps> = ({...props}): JSX.Element => {
    const [percent, setPercent] = React.useState<number>(10);

    const handleIncrease = () => {
        let value = percent + 10;

        if (value > 100) {
            value = 100;
        }

        setPercent(value);
    };

    const handleDecrease = () => {
        let value = percent - 10;

        if (value < 0) {
            value = 0;
        }

        setPercent(value);
    };

    return (
        <Space direction="vertical"
               style={{width: '100%'}}
        >
            <ProgressBar type="line"
                         percent={percent}
            />

            <Group>
                <Button onClick={handleDecrease}
                        icon={<MinusOutlined />}
                />

                <Button onClick={handleIncrease}
                        icon={<PlusOutlined />} />
            </Group>
        </Space>
    );
};

const LinearProgressBarStory = Template.bind({});

LinearProgressBarStory.storyName = 'Линейный индикатор';

export {LinearProgressBarStory};
