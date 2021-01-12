import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    Tabs,
    TabsProps
} from 'src/components/tabs';

const {Tab} = Tabs;

const Template: Story<TabsProps> = ({...props}): JSX.Element => (
    <Tabs defaultActiveKey="1" {...props}>
        <Tab tab="Озеро" key="1">
            Скромный водоем
        </Tab>

        <Tab tab="Море" key="2">
            Большой водоем
        </Tab>

        <Tab tab="Океан" key="3">
            Огромный водоем
        </Tab>
    </Tabs>
);

const TabsStory = Template.bind({});

TabsStory.storyName = 'Базовый тип';

export {TabsStory};
