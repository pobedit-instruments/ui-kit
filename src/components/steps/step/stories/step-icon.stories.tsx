import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    UserOutlined,
    SolutionOutlined,
    LoadingOutlined,
    SmileOutlined
} from '@ant-design/icons';

import {
    Steps,
    StepsProps,
} from 'src/components/steps';

const {Step} = Steps;

const Template: Story<StepsProps> = ({...props}): JSX.Element => {
    return (
        <Steps current={1}>
            <Step status="finish"
                  title="Логин"
                  icon={<UserOutlined />}
            />

            <Step status="finish"
                  title="Верификация"
                  icon={<SolutionOutlined />}
            />

            <Step status="process"
                  title="Проверка"
                  icon={<LoadingOutlined />}
            />

            <Step status="wait"
                  title="Готово"
                  icon={<SmileOutlined />}
            />
        </Steps>
    );
};

const StepsWithIconStory = Template.bind({});

StepsWithIconStory.storyName = 'Шаги с иконками';

export {StepsWithIconStory};
