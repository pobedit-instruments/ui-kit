import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    Table,
    TableProps
} from 'src/components/table';

type User = {
    key: number;
    name: string;
    age: number;
    address: string;
    description: string;
}

const dataSource: User[] = [
    {
        key: 1,
        name: 'Майк',
        age: 32,
        address: 'Улица Косыгина, 15',
        description: 'Меня зовут Майк, мне 32 года.'
    },
    {
        key: 2,
        name: 'Василий',
        age: 42,
        address: 'Улица Ленина, 1',
        description: 'Меня зовут Василий, мне 42 года.'
    },
    {
        key: 3,
        name: 'Петр',
        age: 3,
        address: 'Улица Круга, 43',
        description: 'Меня зовут Петр, мне 3 года.'
    }
];

const {Column, ColumnGroup} = Table;

const Template: Story<TableProps<User>> = ({...props}): JSX.Element => (
    <Table dataSource={dataSource}
           bordered={true}
           pagination={{
               hideOnSinglePage: true
           }}
           {...props}
    >
        <ColumnGroup title="Имя">
            <Column title="Имя" dataIndex="firstName" key="firstName" />
            <Column title="Фамилия" dataIndex="lastName" key="lastName" />
        </ColumnGroup>

        <Column title="Возраст" dataIndex="age" key="age" />
        <Column title="Адрес" dataIndex="address" key="address" />
    </Table>
);

const TableWithColumnGroupStory = Template.bind({});

TableWithColumnGroupStory.storyName = 'Группа столбцов';

export {TableWithColumnGroupStory};
