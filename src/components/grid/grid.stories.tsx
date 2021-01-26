import React from 'react';
import {Meta} from '@storybook/react/types-6-0';
import dedent from 'ts-dedent';

import {
    ArgsTable,
    Description,
    Primary,
    Stories,
    Subtitle,
    Title,
    PRIMARY_STORY
} from '@storybook/addon-docs/blocks';

import {
    Grid,
    Space
} from 'src/components';

import {GridRowProps} from 'src/components/grid';

import {
    Component,
    Layout,
    getStoryTitle
} from 'src/structure';

import {Options} from '.storybook/utils/options';

import {dataSource as rowArgs} from './row/stories/row-properties';
import {dataSource as colArgs} from './column/stories/column-properties';
import {dataSource as gridArgs} from './grid/stories/grid-properties';

const {Row} = Grid;

const controls: Meta<GridRowProps> = {
    title: getStoryTitle([
        Component.LAYOUT,
        Layout.GRID
    ]),

    component: Row,

    parameters: {
        docs: {
            page: () => (
                <>
                    <Title />
                    <Subtitle />
                    <Description />
                    <Primary />

                    <Stories />
                    <ArgsTable story={PRIMARY_STORY} />

                    <Space size="large" direction="vertical">
                        <Options name="Grid" dataSource={gridArgs} />
                        <Options name="Row" dataSource={rowArgs} />
                        <Options name="Col" dataSource={colArgs} />
                    </Space>
                </>
            ),

            description: {
                component: dedent`
                    <br />

                    ### Название компонента

                    **Grid**

                    ### Дочерние компоненты

                    * **Grid.Col**
                    * **Grid.Row**

                    В сеточной системе мы определяем фрейм за пределами информационной области на основе строки (Row) и столбца (Col), чтобы гарантировать,
                    что каждая область может иметь стабильное расположение.
                    Чтобы гарантировать правильное выравнивание — элементы содержимого должны размещаться непосредственно в Col, и только Col должен размещаться непосредственно в Row.

                    Система сетки столбцов представляет собой значение 1-24 для представления диапазона значений. Например, три столбца одинаковой ширины могут быть созданы с помощью \<Col span=\{8\} /\>.
                    Если сумма промежутков столбца в строке больше 24, то переполнение столбца в целом начнет новую компоновку строк.

                    Наша сеточная система позволяет выровнять элементы в родительском элементе по горизонтали - слева, по центру, справа, по ширине и децентрализованно.
                    Также мы поддерживаем вертикальное выравнивание — по верхнему краю, по вертикали по центру, по нижнему краю.
                    Возможно определить и порядок элементов — для этого используя свойство *order*.
                `
            }
        }
    },

    argTypes: {}
};

export {GridStory} from './grid/stories/grid-default.stories';
export default controls;
