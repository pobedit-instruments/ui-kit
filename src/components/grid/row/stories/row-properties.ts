const dataSource = [
    {
        key: '1',
        property: 'align',
        description: 'Вертикальное выравнивание',
        type: 'top | middle | bottom',
        value: 'top'
    },
    {
        key: '2',
        property: 'justify',
        description: 'Горизонтальное выравнивание',
        type: 'start | end | center | space-around | space-between',
        value: 'start'
    },
    {
        key: '3',
        property: 'gutter',
        description: 'Расстояние между сетками может быть числом или объектом, например {xs: 8, sm: 16, md: 24}. Чтобы одновременно работать по горизонтали и вертикали используется массив (например, [8, 8])',
        type: 'number | object | array',
        value: '0'
    },
    {
        key: '4',
        property: 'wrap',
        description: 'Автоматический перенос блоков (flex-wrap: wrap)',
        type: 'boolean',
        value: 'true'
    }
];

export {dataSource};
