import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    Form,
    Table,
    TextField
} from 'src/components';

import {
    TableProps,
    ColumnsType
} from 'src/components/table';

import {FormInstance} from 'src/components/form';
import style from './table-editable.stories.less';

type User = {
    key: number;
    name: string;
    age: number;
    address: string;
    description: string;
};

type EditableRowProps = {
    index: number;
};

type EditableCellProps = {
    title: React.ReactNode;
    editable: boolean;
    children: React.ReactNode;
    dataIndex: keyof User;
    record: User;
    handleSave: (record: User) => void;
};

type Editable = { editable: boolean };

type Columns = ColumnsType<User> & Array<Editable>;

const columns: Columns = [
    {
        title: 'Имя',
        dataIndex: 'name',
        key: 'name',
        editable: true
    },
    {
        title: 'Возраст',
        dataIndex: 'age',
        key: 'age',
        editable: true
    },
    {
        title: 'Адрес',
        dataIndex: 'address',
        key: 'address',
        editable: true
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

const EditableContext = React.createContext<FormInstance<any> | null>(null);

const EditableRow: React.FunctionComponent<EditableRowProps> = ({index, ...props}) => {
    const [form] = Form.useForm();

    return (
        <Form form={form} component={false}>
            <EditableContext.Provider value={form}>
                <tr {...props} />
            </EditableContext.Provider>
        </Form>
    );
};

const EditableCell: React.FunctionComponent<EditableCellProps> = ({
    title,
    editable,
    children,
    dataIndex,
    record,
    handleSave,
    ...restProps
}) => {
    const [editing, setEditing] = React.useState(false);
    const inputRef = React.useRef<any>(null);
    const form = React.useContext(EditableContext)!;

    React.useEffect(() => {
        if (editing) {
            inputRef.current!.focus();
        }
    }, [editing]);

    const toggleEdit = () => {
        setEditing(!editing);

        form.setFieldsValue({
            [dataIndex]: record[dataIndex]
        });
    };

    const save = async () => {
        try {
            const values = await form.validateFields();

            toggleEdit();
            handleSave({...record, ...values});
        } catch (error) {
            console.log('Ошибка сохранения:', error);
        }
    };

    let childNode = children;

    if (editable) {
        if (editing) {
            childNode = (
                <Form.Item
                    style={{margin: 0}}
                    name={dataIndex}
                    rules={[
                        {
                            required: true,
                            message: `Требуется "${title}".`
                        }
                    ]}
                >
                    <TextField.Input ref={inputRef}
                                     onPressEnter={save}
                                     onBlur={save}
                    />
                </Form.Item>
            );
        } else {
            childNode = (
                <div className={style.editableCellValue}
                     onClick={toggleEdit}
                >
                    {children}
                </div>
            );
        }

    }

    return <td {...restProps}>{childNode}</td>;
};

const Template: Story<TableProps<User>> = ({...props}): JSX.Element => {
    const [data, setData] = React.useState<User[]>(dataSource);

    const handleSave = (row: User) => {
        const newData = [...data];
        const index = newData.findIndex(item => row.key === item.key);
        const item = newData[index];

        newData.splice(index, 1, {...item, ...row});

        setData(newData);
    };

    const components = {
        body: {
            row: EditableRow,
            cell: EditableCell
        }
    };

    const cols = columns.map((column: any) => {
        if (!column.editable) {
            return column;
        }

        return {
            ...column,
            onCell: (record: EditableCellProps) => ({
                record,
                editable: column.editable,
                dataIndex: column.dataIndex,
                title: column.title,
                handleSave
            })
        };
    });

    return (
        <Table dataSource={data}
               columns={cols}
               components={components}
               bordered={true}
               rowClassName={() => style.editableRow}
               {...props}
        />
    );
};

const EditableTableStory = Template.bind({});

EditableTableStory.storyName = 'Редактируемые ячейки';

export {EditableTableStory};
