import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    Select,
    Space
} from 'src/components';

import {SelectProps} from 'src/components/select';

const {Option} = Select;

const Template: Story<SelectProps> = ({...props}): JSX.Element => (
    <Space>
        <Select defaultValue="x">
            <Option value="x">Ессентуки</Option>
            <Option value="disabled" disabled>
                Заблокировано
            </Option>
            <Option value="y">Гусь</Option>
        </Select>

        <Select defaultValue="x"
                disabled={true}
        >
            <Option value="x">Ессентуки</Option>
        </Select>

        <Select defaultValue="x"
                loading={true}
        >
            <Option value="x">Ессентуки</Option>
        </Select>

        <Select defaultValue="x"
                allowClear={true}
        >
            <Option value="x">Ессентуки</Option>
        </Select>
    </Space>
);

const SelectStory = Template.bind({});

SelectStory.storyName = 'Базовый тип';

export {SelectStory};
