import React from 'react';
import {Story} from '@storybook/react/types-6-0';
import Highlighter from 'react-highlight-words';

import {SearchOutlined} from '@ant-design/icons';

import {
    Button,
    TextField,
    Space,
    Table,
} from 'src/components';

import {
    TableProps,
    ColumnType,
    ColumnsType,
    FilterDropdownProps
} from 'src/components/table';

type User = {
    key: number;
    name: string;
    age: number;
    address: string;
    description: string;
}

const DEFAULT_SEARCH_VALUE = '';

const getColumnSearchProps = (dataIndex: string, {
    searchText,
    searchColumn,
    searchInput,
    handleSearch,
    handleReset
}: any): ColumnType<any> => {
    return {
        filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}: FilterDropdownProps) => {
            const [selectedKey] = selectedKeys;

            return (
                <div style={{padding: 8}}>
                    <TextField.Input
                        ref={searchInput}

                        placeholder={`Search ${dataIndex}`}
                        value={selectedKey}

                        onChange={
                            ({target}: React.ChangeEvent<HTMLInputElement>) => {
                                return setSelectedKeys(target.value ? [target.value] : []);
                            }
                        }

                        onPressEnter={
                            () => handleSearch(selectedKey, confirm, dataIndex)
                        }

                        style={{
                            width: 188,
                            marginBottom: 8,
                            display: 'block'
                        }}
                    />
                    <Space>
                        <Button size="small"
                                style={{width: 90}}
                                onClick={
                                    () => handleReset(clearFilters)
                                }
                        >
                            Сбросить
                        </Button>

                        <Button
                            type="primary"
                            onClick={
                                () => handleSearch(selectedKey, confirm, dataIndex)
                            }
                            icon={<SearchOutlined />}
                            size="small"
                            style={{width: 90}}
                        >
                            Искать
                        </Button>
                    </Space>
                </div>
            )
        },

        filterIcon: (filtered: boolean) => (
            <SearchOutlined style={{color: filtered ? '#1890ff' : undefined}} />
        ),

        onFilter: (value, record: Record<string, string>): boolean => {
            const expression = new RegExp(record[dataIndex], 'i');

            return expression.test(`${value}`);
        },

        onFilterDropdownVisibleChange: (visible: boolean): void => {
            if (visible) {
                window.setTimeout(() => searchInput.current?.select(), 100);
            }
        },

        render: (text: string) => {
            if (searchColumn === dataIndex) {
                return (
                    <Highlighter
                        highlightStyle={{backgroundColor: '#ffc069', padding: 0}}
                        searchWords={[searchText as string]}
                        autoEscape
                        textToHighlight={text ? text.toString() : ''}
                    />
                );
            }

            return text;
        }
    };
}

const columns = (options: any): ColumnsType<User> => (
    [
        {
            title: 'Имя',
            dataIndex: 'name',
            key: 'name',
            ...getColumnSearchProps('name', options)
        },
        {
            title: 'Возраст',
            dataIndex: 'age',
            key: 'age',
            ...getColumnSearchProps('age', options)
        },
        {
            title: 'Адрес',
            dataIndex: 'address',
            key: 'address',
            ...getColumnSearchProps('address', options)
        }
    ]
);

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

const Template: Story<TableProps<User>> = ({...props}): JSX.Element => {
    const [searchText, setSearchedText] = React.useState<React.Key>(DEFAULT_SEARCH_VALUE);
    const [searchColumn, setsearchColumn] = React.useState<string>();

    const searchInput = React.useRef<HTMLInputElement>(null);

    const handleSearch = (selectedKey: React.Key, confirm: () => void, dataIndex: string) => {
        confirm();

        setSearchedText(selectedKey);
        setsearchColumn(dataIndex);
    };

    const handleReset = (clearFilters?: () => void) => {
        if (clearFilters) {
            clearFilters();
        }

        setSearchedText(DEFAULT_SEARCH_VALUE);
    };

    return (
        <Table dataSource={dataSource}
               columns={
                   columns({
                       searchText,
                       searchColumn,
                       searchInput,
                       handleSearch,
                       handleReset
                })
               }
               {...props}
        />
    );
}

const TableWithCustomFiltersStory = Template.bind({});

TableWithCustomFiltersStory.storyName = 'Таблица с пользовательскими фильтрами';

export {TableWithCustomFiltersStory};
