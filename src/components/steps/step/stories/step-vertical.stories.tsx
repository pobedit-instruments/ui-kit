import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    Steps,
    StepsProps,
} from 'src/components/steps';

const {Step} = Steps;

const Template: Story<StepsProps> = ({...props}): JSX.Element => {
    return (
        <Steps current={1}
               direction="vertical"
               size="small"
        >
            <Step title="Закончено"
                  description="Описание..."
            />

            <Step title="В процессе"
                  subTitle="Осталось 00:00:08"
                  description="Описание..."
            />

            <Step title="Ожидание"
                  description="Описание..."
            />
        </Steps>
    );
};

const VerticalStepsStory = Template.bind({});

VerticalStepsStory.storyName = 'Вертикальное положение';

export {VerticalStepsStory};
