import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    Tabs,
    TabsTabProps
} from 'src/components/tabs';

const {Tab} = Tabs;

const Template: Story<TabsTabProps> = ({...props}): JSX.Element => (
    <Tabs>
        <Tab tab="Озеро"
             key="1"
        >
            Скромный водоем
        </Tab>

        <Tab tab="Море"
             key="2"
             disabled={true}
        >
            Большой водоем
        </Tab>

        <Tab tab="Океан"
             key="3"
        >
            Огромный водоем
        </Tab>
    </Tabs>
);

const DisaledTabStory = Template.bind({});

DisaledTabStory.storyName = 'Заблокированная вкладка';

export {DisaledTabStory};
