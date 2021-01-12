import {MinusOutlined, PlusOutlined} from '@ant-design/icons';
import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    Badge,
    Button,
    Space,
    Table
} from 'src/components';

import {
    TableProps,
    ColumnsType
} from 'src/components/table';

import style from './table-editable.stories.less';

type User = {
    key: number;
    name: string;
    age: number;
    address: string;
    description: string;
};

const {Group} = Button;

const columns: ColumnsType<User> = [
    {
        title: 'Имя',
        dataIndex: 'name',
        key: 'name'
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

const optionalDataSource = (key: number): User[] => [
    {
        key,
        name: 'Майк',
        age: key,
        address: `Улица Косыгина, ${key}`,
        description: `Меня зовут Майк, мне ${key} года.`
    }
];

const Template: Story<TableProps<User>> = ({...props}): JSX.Element => {
    const [data, setData] = React.useState<User[]>(dataSource);
    const [count, setCount] = React.useState<number>(dataSource.length);

    const handleDecrease = () => {
        let result = count - 1;

        if (result < 0) {
            result = 0;
        }

        const modifiedDataSource = data.slice(0, -1);

        setData(modifiedDataSource);
        setCount(result);
    };

    const handleIncrease = () => {
        let result = count + 1;

        const modifiedDataSource = optionalDataSource(result);

        setCount(result);

        setData([
            ...data,
            ...modifiedDataSource
        ]);
    };

    return (
        <Space>
            <Badge count={count} />

            <Space size="large">
                <Group>
                    <Button onClick={handleDecrease}>
                        <MinusOutlined />
                    </Button>

                    <Button onClick={handleIncrease}>
                        <PlusOutlined />
                    </Button>
                </Group>

                <Table dataSource={data}
                       columns={columns}
                       bordered={true}
                       {...props}
                />
            </Space>
        </Space>
    );
};

const ModifiableTableStory = Template.bind({});

ModifiableTableStory.storyName = 'Изменение структуры таблицы';

export {ModifiableTableStory};
