import {Meta} from '@storybook/react/types-6-0';
import dedent from 'ts-dedent';

import {
    Tabs,
    TabsProps
} from 'src/components/tabs';

import {
    Component,
    Navigation,
    getStoryTitle
} from 'src/structure';

const controls: Meta<TabsProps> = {
    title: getStoryTitle([
        Component.NAVIGATION,
        Navigation.TABS
    ]),

    component: Tabs,

    parameters: {
        docs: {
            description: {
                component: dedent`
                    ### Название компонента

                    **Tabs**

                    ### Дочерние компоненты

                    * **Tabs.Tab**
                `
            }
        }
    },

    argTypes: {
        activeKey: {
            description: 'Ключ текущей вкладки',
            table: {
                type: {
                    summary: 'string'
                }
            },
            control: {
                type: 'text'
            }
        }
    }
};

export {TabsStory} from './tabs/stories/tab-default.stories';
export {DisaledTabStory} from './tab/stories/tab-disabled.stories';
export {TabWithIconStory} from './tab/stories/tab-icon.stories';

export default controls;
