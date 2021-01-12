import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    Steps,
    StepsProps,
} from 'src/components/steps';
import dedent from 'ts-dedent';

const {Step} = Steps;

const Template: Story<StepsProps> = ({...props}): JSX.Element => {
    const [current, setCurrent] = React.useState<number>(1);

    const handleChange = (current: number) => {
        setCurrent(current);
    };

    return (
        <Steps current={current}
               onChange={handleChange}
               percent={60}
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

const HorizontalStepsStory = Template.bind({});

HorizontalStepsStory.storyName = 'Горизонтальное положение';

HorizontalStepsStory.parameters = {
    docs: {
        source: {
            code: dedent`
                const Template: Story<StepsProps> = ({...props}): JSX.Element => {
                const [current, setCurrent] = React.useState<number>(1);

                const handleChange = (current: number) => {
                    setCurrent(current);
                };

                return (
                    <Steps current={current}
                           onChange={handleChange}
                           percent={60}
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
            `
        }
    }
};

export {HorizontalStepsStory};
