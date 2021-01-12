import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {Table} from 'src/components';
import {TableProps, ColumnsType} from 'src/components/table';

type User = {
    key: number;
    name: string;
    age: number;
    address: string;
    description: string;
};

const columns: ColumnsType<any> = [
    {
        title: 'Имя',
        dataIndex: 'name',
        key: 'name',
        sortDirections: ['descend'],
        sorter: true,
        filters: [
            {
                text: 'Майк',
                value: 'Майк',
            },
            {
                text: 'Василий',
                value: 'Василий',
                // children: [
                //     {
                //         text: 'Пенсионер',
                //         value: 'retiree'
                //     }
                // ]
            }
        ],
        onFilter: (value, record) => record.name.includes(value)
    },
    {
        title: 'Возраст',
        dataIndex: 'age',
        key: 'age',
        defaultSortOrder: 'descend',
        sorter: (x, y) => {
            return x.age - y.age;
        }
    },
    {
        title: 'Адрес',
        dataIndex: 'address',
        key: 'address',
        sorter: (x, y) => {
            return x.address.length - y.address.length;
        }
    }
];

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

const Template: Story<TableProps<User>> = ({...props}): JSX.Element => (
    <Table dataSource={dataSource}
           columns={columns}
           {...props}
    />
);

const TableWithFiltersStory = Template.bind({});

TableWithFiltersStory.storyName = 'Таблица с фильтрами';

export {TableWithFiltersStory};
