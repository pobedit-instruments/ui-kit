import React from 'react';
import dedent from 'ts-dedent';

const dataSource = [
    {
        key: '1',
        property: 'breakpoint',
        description: dedent `
            Точки останова адаптивного макета<br />
            <pre>
            {
              xs: '480px',
              sm: '576px',
              md: '768px',
              lg: '992px',
              xl: '1200px',
              xxl: '1600px'
            }
            </pre>
        `,
        type: 'xs | sm | md | lg | xl | xxl',
        value: '-'
    },
    {
        key: '2',
        property: 'collapsed',
        description: 'Установить текущий статус',
        type: 'string',
        value: '-'
    },
    {
        key: '3',
        property: 'collapsedWidth',
        description: 'Ширина свернутой боковой панели. При установке значения 0 появится специальный триггер',
        type: 'number',
        value: '80'
    },
    {
        key: '4',
        property: 'collapsible',
        description: 'Можно ли свернуть',
        type: 'boolean',
        value: '-'
    },
    {
        key: '5',
        property: 'defaultCollapsed',
        description: 'Установить начальный статус',
        type: 'boolean',
        value: 'false'
    },
    {
        key: '6',
        property: 'reverseArrow',
        description: 'Обратное направление стрелки для правого Sider\'a',
        type: 'boolean',
        value: 'false'
    },
    {
        key: '7',
        property: 'theme',
        description: 'Применить тему',
        type: 'light | dark',
        value: 'dark'
    },
    {
        key: '8',
        property: 'trigger',
        description: 'Триггер.',
        type: 'React.ReactNode',
        value: '-'
    },
    {
        key: '9',
        property: 'width',
        description: 'Ширина',
        type: 'number | string',
        value: '200'
    },
    {
        key: '10',
        property: 'zeroWidthTriggerStyle',
        description: 'Стили для триггера. Появляется когда collapsedWidth равен 0',
        type: 'object',
        value: 'true'
    },
    {
        key: '11',
        property: 'onBreakpoint',
        description: 'Функция обратного вызова, которая выполняемая при изменении точек останова',
        type: '(broken) => {}',
        value: '-'
    },
    {
        key: '12',
        property: 'onCollapse',
        description: 'Функция обратного вызова, которая выполняемая по нажатием на триггер или активацией адаптивного макета.',
        type: '(collapsed, type) => {}',
        value: 'true'
    }
];

export {dataSource};
