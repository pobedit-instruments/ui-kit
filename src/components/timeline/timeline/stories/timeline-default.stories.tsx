import React from 'react';
import {Story} from '@storybook/react/types-6-0';
import {ClockCircleOutlined} from '@ant-design/icons';

import {
    Timeline,
    TimelineProps
} from 'src/components/timeline';

const Template: Story<TimelineProps> = ({...props}): JSX.Element => (
    <Timeline pending="Обработка..." {...props}>
        <Timeline.Item color="green">
            Предложить идею
        </Timeline.Item>

        <Timeline.Item>
            Оценить трудоемкость
        </Timeline.Item>

        <Timeline.Item color="red">
            Взять в работу
        </Timeline.Item>

        <Timeline.Item dot={<ClockCircleOutlined style={{fontSize: '16px'}} />}>
            Параллельные работы:
            <ul>
                <li>Предоставить калькуляцию</li>
                <li>Найти инвестирование</li>
                <li>Заключить договор</li>
            </ul>
        </Timeline.Item>

        <Timeline.Item color="gray">
            Провести тестирование
        </Timeline.Item>
    </Timeline>
);

const TimelineStory = Template.bind({});

TimelineStory.storyName = 'Базовое использование';

export {TimelineStory};
