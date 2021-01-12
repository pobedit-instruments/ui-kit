import React, {
    ComponentProps,
    FunctionComponent
} from 'react';

import {Table, Typography} from 'antd';

type TableProps = {
    name: string;
    dataSource: ComponentProps<typeof Table>['dataSource'];
};

const render = (html: string): JSX.Element => {
    return <div dangerouslySetInnerHTML={{__html: html}} />;
}

const ComponentTable: React.FunctionComponent<TableProps> = ({name, dataSource}): JSX.Element => (
    <div>
        <Typography.Title level={3}>{name}</Typography.Title>

        <Table dataSource={dataSource}
               columns={[
                   {
                       title: 'Свойство',
                       dataIndex: 'property',
                       key: 'property'
                   },
                   {
                       title: 'Описание',
                       dataIndex: 'description',
                       key: 'description',
                       render
                   },
                   {
                       title: 'Тип',
                       dataIndex: 'type',
                       key: 'type',
                       render
                   },
                   {
                       title: 'Значение по умолчанию',
                       dataIndex: 'value',
                       key: 'value'
                   }
               ]}
               bordered={true}
               pagination={{hideOnSinglePage: true}}
        />
    </div>
);

export {ComponentTable};
