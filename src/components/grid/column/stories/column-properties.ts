const dataSource = [
    {
        key: '1',
        property: 'flex',
        description: 'Изменение размеров блока',
        type: 'string | number',
        value: '-'
    },
    {
        key: '2',
        property: 'offset',
        description: 'Количество ячеек для смещения Col от левого края',
        type: 'number',
        value: '0'
    },
    {
        key: '3',
        property: 'order',
        description: 'Порядок элементов',
        type: 'number',
        value: '0'
    },
    {
        key: '4',
        property: 'pull',
        description: 'Смещение ячеек в левую сторону',
        type: 'number',
        value: '0'
    },
    {
        key: '5',
        property: 'push',
        description: 'Смещение ячеек в правую сторону',
        type: 'number',
        value: '0'
    },
    {
        key: '6',
        property: 'span',
        description: 'Количество занимаемых ячеек (0 соответствует display: none)',
        type: 'number',
        value: '0'
    },
    {
        key: '7',
        property: 'xs',
        description: 'экран < 576px, а также настройка по умолчанию. Может быть значением span или объектом, содержащим указанные выше свойства',
        type: 'number | object',
        value: 'true'
    },
    {
        key: '8',
        property: 'sm',
        description: 'экран ≥ 576px. Может быть значением span или объектом, содержащим указанные выше свойства',
        type: 'number | object',
        value: 'true'
    },
    {
        key: '9',
        property: 'md',
        description: 'экран ≥ 768px. Может быть значением span или объектом, содержащим указанные выше свойства',
        type: 'number | object',
        value: 'true'
    },
    {
        key: '10',
        property: 'lg',
        description: 'экран ≥ 992px. Может быть значением span или объектом, содержащим указанные выше свойства',
        type: 'number | object',
        value: 'true'
    },
    {
        key: '11',
        property: 'xl',
        description: 'экран ≥ 1200px. Может быть значением span или объектом, содержащим указанные выше свойства',
        type: 'number | object',
        value: 'true'
    },
    {
        key: '12',
        property: 'xxl',
        description: 'экран ≥ 1600px. Может быть значением span или объектом, содержащим указанные выше свойства',
        type: 'number | object',
        value: 'true'
    }
];

export {dataSource};
