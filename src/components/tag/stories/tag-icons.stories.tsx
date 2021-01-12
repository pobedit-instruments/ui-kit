import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    CheckCircleOutlined,
    SyncOutlined,
    CloseCircleOutlined,
    ExclamationCircleOutlined,
    ClockCircleOutlined,
    MinusCircleOutlined,
} from '@ant-design/icons';

import {Tag} from 'src/components';
import {TagProps} from 'src/components/tag';

const Template: Story<TagProps> = ({...props}): JSX.Element => {
    return (
        <>
            <Tag icon={<CheckCircleOutlined />} color="success">
                Успешно
            </Tag>

            <Tag icon={<SyncOutlined spin />} color="processing">
                В процессе
            </Tag>

            <Tag icon={<CloseCircleOutlined />} color="error">
                Ошибка
            </Tag>
            <Tag icon={<ExclamationCircleOutlined />} color="warning">
                Предупреждение
            </Tag>

            <Tag icon={<ClockCircleOutlined />} color="default">
                Ожидание
            </Tag>

            <Tag icon={<MinusCircleOutlined />} color="default">
                Остановить
            </Tag>
        </>
    );
};

const TagWithIconStory = Template.bind({});

TagWithIconStory.storyName = 'Теги с иконками';

export {TagWithIconStory};
