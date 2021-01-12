import React from 'react';
import {Story} from '@storybook/react/types-6-0';
import {UploadOutlined} from '@ant-design/icons';
import {Popconfirm} from 'antd';

import {
    Button,
    Space,
    FileUploader
} from 'src/components';

import {SpaceProps} from 'src/components/space';

const Template: Story<SpaceProps> = ({...props}): JSX.Element => (
    <Space {...props}>
        Текст

        <Button type="primary">Кнопка</Button>

        <FileUploader>
            <Button>
                <UploadOutlined /> Загрузить
            </Button>
        </FileUploader>

        <Popconfirm title="Вы уверены что хотите закрыть это окно?"
                    okText="Да"
                    cancelText="Нет"
        >
            <Button>Подтвердить</Button>
        </Popconfirm>

    </Space>
);

const SpaceStory = Template.bind({});

SpaceStory.storyName = 'Базовое использование';

export {SpaceStory};
