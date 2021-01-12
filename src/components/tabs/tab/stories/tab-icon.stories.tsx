import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    AppleOutlined,
    AndroidOutlined,
    WindowsOutlined
} from '@ant-design/icons';

import {
    Tabs,
    TabsTabProps
} from 'src/components/tabs';

const {Tab} = Tabs;

const Template: Story<TabsTabProps> = ({...props}): JSX.Element => (
    <Tabs>
        <Tab tab={
            <span>
                <AppleOutlined />
                Озеро
            </span>
        }
             key="1"
        >
            Скромный водоем
        </Tab>

        <Tab tab={
            <span>
                <AndroidOutlined />
                Море
            </span>
        }
             key="2"
        >
            Большой водоем
        </Tab>

        <Tab tab={
            <span>
                <WindowsOutlined />
                Океан
            </span>
        }
             key="3"
        >
            Огромный водоем
        </Tab>
    </Tabs>
);

const TabWithIconStory = Template.bind({});

TabWithIconStory.storyName = 'Вкладка с иконками';

export {TabWithIconStory};
