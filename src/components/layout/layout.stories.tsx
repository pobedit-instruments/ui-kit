import React from 'react';
import {Meta} from '@storybook/react/types-6-0';
import dedent from 'ts-dedent';

import {
    ArgsTable,
    Description,
    Primary,
    Subtitle,
    Title,
    PRIMARY_STORY
} from '@storybook/addon-docs/blocks';

import {
    Layout,
    Space
} from 'src/components';

import {LayoutProps} from 'src/components/layout';

import {
    Component,
    Layout as LayoutSection,
    getStoryTitle
} from 'src/structure';

import {ComponentTable} from 'src/utils/args-table';

import {dataSource as siderArgs} from './sider/stories/sider-table';
import {dataSource as layoutArgs} from './layout/strories/layout-properties';
import {LayoutStory} from './layout/strories/layout-default.stories';

const controls: Meta<LayoutProps> = {
    title: getStoryTitle([
        Component.LAYOUT,
        LayoutSection.LAYOUT
    ]),

    component: Layout,

    parameters: {
        docs: {
            page: () => (
                <>
                    <Title />
                    <Subtitle />
                    <Description />
                    <Primary />
                    <ArgsTable story={PRIMARY_STORY} />

                    <Space size="large" direction="vertical">
                        <ComponentTable name="Layout" dataSource={layoutArgs} />
                        <ComponentTable name="Sider" dataSource={siderArgs} />
                    </Space>
                </>
            ),
            description: {
                component: dedent`
                    <br />

                    ### Название компонента

                    **Layout**

                    ### Дочерние компоненты

                    * **Layout.Content**
                    * **Layout.Footer**
                    * **Layout.Header**
                    * **Layout.Sider**

                    ### Размерность

                    * Навигация первого уровня выравнивается по левому краю рядом с логотипом, а дополнительное меню выравнивается по правому краю.
                    * Навигация вверху: высота навигации первого уровня 64px, навигации второго уровня 48px.
                    * Верхняя навигация (для целевых страниц): высота навигации первого уровня 80px, навигации второго уровня 56px.
                    * Формула расчета верхней навигации: 48 + 8n.
                    * Формула расчета боковой навигации: 200 + 8n.

                    ### Правила взаимодействия

                    * Навигация первого уровня и навигация последнего уровня должны различаться визуализацией;
                    * Текущий элемент должен иметь наивысший приоритет визуализации;
                    * Когда текущий элемент навигации сворачивается, стиль текущего элемента навигации применяется к его родительскому уровню;
                    * Левая панель навигации поддерживает стили «аккордеон» и «раскрытие»; вы можете выбрать тот, который лучше всего подходит для вашего случая.

                    ### Обзор компонентов

                    * Layout: обертка, в которую могут быть вложены Header, Sider, Content, Footer, а также сам Layout может располагаться в таком же родительском контейнере.
                    * Header, Sider, Content и Footer — элементы, которые располагаются строго в Layout и могут включать другие элементы.

                    > Базируется на спецификации [CSS Flexible Box Layout Module](https://www.w3.org/TR/css-flexbox-1/)
                `
            }
        }
    },

    argTypes: {}
};

export {LayoutStory} from './layout/strories/layout-default.stories';
export default controls;
