import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    DownOutlined,
    UploadOutlined,
    AppstoreAddOutlined
} from '@ant-design/icons';

import {
    Button,
    Dropdown,
    Menu,
    Space,
    FileUploader
} from 'src/components';

import {ButtonProps} from 'src/components/button';

const Template: Story<ButtonProps> = ({...props}): JSX.Element => {
    const menu = (
        <Menu>
            <Menu.Item key="1">Пепси</Menu.Item>
            <Menu.Item key="2">Спрайт</Menu.Item>
            <Menu.Item key="3">Кола</Menu.Item>
        </Menu>
    );

    return (
        <Space size="middle">
            <Dropdown overlay={menu}>
                <Button {...props}>
                    Выбрать <DownOutlined />
                </Button>
            </Dropdown>

            <FileUploader>
                <Button icon={<UploadOutlined />}>
                    Загрузить
                </Button>
            </FileUploader>

            <Button type="text" icon={<AppstoreAddOutlined />}>
                Добавить
            </Button>
        </Space>
    );
};

const ButtonVariationStory = Template.bind({});

ButtonVariationStory.storyName = 'Вариации кнопок';

ButtonVariationStory.parameters = {
    docs: {
        description: {
            story: 'Кнопки могут включаться в состав других компонентов `Dropdown`, `Menu`, `Form`, `Radio`, `Upload`'
        }
    }
};

export {ButtonVariationStory};
