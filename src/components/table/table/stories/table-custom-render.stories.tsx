import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    Table,
    Tag
} from 'src/components';

import {
    TableProps,
    ColumnsType
} from 'src/components/table';

type User = {
    key: number;
    name: string;
    age: number;
    address: string;
    description: string;
    tags: string[];
};

enum Activity {
    DEVELOPER = 'Разработчик',
    STUDENT = 'Студент',
    MUSICIAN = 'Музыкант'
}

const activity: Record<string, string> = {
    [Activity.DEVELOPER]: 'geekblue',
    [Activity.STUDENT]: 'green',
    [Activity.MUSICIAN]: 'volcano'
};

const dataSource: User[] = [
    {
        key: 1,
        name: 'Майк',
        age: 32,
        address: 'Улица Косыгина, 15',
        description: 'Меня зовут Майк, мне 32 года.',
        tags: ['Разработчик', 'Студент']
    },
    {
        key: 2,
        name: 'Василий',
        age: 42,
        address: 'Улица Ленина, 1',
        description: 'Меня зовут Василий, мне 42 года.',
        tags: ['Студент']
    },
    {
        key: 3,
        name: 'Петр',
        age: 3,
        address: 'Улица Круга, 43',
        description: 'Меня зовут Петр, мне 3 года.',
        tags: ['Музыкант']
    }
];

const columns: ColumnsType<User> = [
    {
        title: 'Имя',
        dataIndex: 'name',
        key: 'name',
        render: (text: string) => <a href="#noop">{text}</a>
    },
    {
        title: 'Возраст',
        dataIndex: 'age',
        key: 'age'
    },
    {
        title: 'Адрес',
        dataIndex: 'address',
        key: 'address'
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (tags: string[]) => (
            <>
                {
                    tags.map(tag => {
                        return (
                            <Tag color={activity[tag]} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })
                }
            </>
        )
    }
];

const Template: Story<TableProps<User>> = ({...props}): JSX.Element => (
    <Table dataSource={dataSource}
           columns={columns}
           {...props}
    />
);

const TableWithCustomRenderStory = Template.bind({});

TableWithCustomRenderStory.storyName = 'Пользовательский рендер';

export {TableWithCustomRenderStory};
