import React from 'react';
import {Table} from 'antd';
import {ColumnsType} from 'antd/lib/table/interface';

const columns: ColumnsType<{}> = [
    {
        title: 'Тип',
        dataIndex: 'type',
        key: 'type'
    },
    {
        title: 'Пример',
        dataIndex: 'example',
        key: 'example',
        align: 'right'
    }
];

const dataSource = [
    {
        key: '1',
        type: 'Числовой разделитель',
        example: function () {
            try {

            } catch (error) {
                return '1 000 000';
            }
        }()
    },
    {
        key: '2',
        type: 'Единицы измерения',
        example: function () {
            try {
                const locale = new Intl.NumberFormat('ru-RU', {
                    style: 'unit',
                    unit: 'kilogram'
                } as any);

                return locale.format(1000000);
            } catch (error) {
                return '1 000 000 kg';
            }
        }()
    },
    {
        key: '3',
        type: 'Проценты',
        info: '',
        example: '12.32%'
    },
    {
        key: '4',
        type: 'Метры в секунду',
        example: function () {
            try {
                const locale = new Intl.NumberFormat('ru-RU', {
                    style: 'unit',
                    unit: 'meter-per-second'
                } as any);

                return locale.format(1000000);
            } catch (error) {
                return '1000,000,000 м/с.';
            }
        }()
    },
    {
        key: '5',
        type: 'Валюта',
        example: function () {
            try {
                const locale = new Intl.NumberFormat('ru-RU', {
                    style: 'currency',
                    currency: 'RUB'
                });

                return locale.format(1000000);
            } catch (error) {
                return '1 000 000 ₽';
            }
        }()
    },
    {
        key: '6',
        type: 'Дата',
        example: function () {
            const date = new Date();

            try {
                const locale = new Intl.DateTimeFormat('ru-RU');

                return locale.format(date);
            } catch (error) {
                return date.toDateString();
            }
        }()
    }
];

const DataFormatTable: React.FunctionComponent<void> = (): JSX.Element => (
    <Table rowKey="id"
           bordered={true}
           pagination={{
               hideOnSinglePage: true
           }}
           columns={columns}
           dataSource={dataSource}
           style={{width: 500}}
    />
);

export {DataFormatTable};
