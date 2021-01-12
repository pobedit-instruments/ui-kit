import React from 'react';
import {Story} from '@storybook/react/types-6-0';
import {message} from 'antd';

import {
    Button,
    Steps,
    Divider,
} from 'src/components';

import {StepsProps} from 'src/components/steps';

const {Step} = Steps;

const steps = [
    {
        title: 'Первый',
        content: '1...'
    },
    {
        title: 'Второй',
        content: '2...'
    },
    {
        title: 'Последний',
        content: '3...'
    }
];

const Template: Story<StepsProps> = ({...props}): JSX.Element => {
    const [current, setCurrent] = React.useState(0);
    const FIRST_STEP = 0;
    const LAST_STEP = steps.length - 1;

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    return (
        <>
            <Steps current={current}>
                {
                    steps.map(({title}) => (<Step key={title} title={title} />))
                }
            </Steps>

            <br />

            {steps[current].content}

            <Divider />

            <div>
                {current < LAST_STEP && (
                    <Button type="primary" onClick={() => next()}>
                        Следующий
                    </Button>
                )}

                {current === LAST_STEP && (
                    <Button type="primary" onClick={() => message.success('Выполнено!')}>
                        Выполнено
                    </Button>
                )}

                {current > FIRST_STEP && (
                    <Button style={{margin: '0 8px'}} onClick={() => prev()}>
                        Предыдущий
                    </Button>
                )}
            </div>
        </>
    );
};

const StepsWithContentStory = Template.bind({});

StepsWithContentStory.storyName = 'Шаги с контентом';

export {StepsWithContentStory};
