import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    Accordion,
    AccordionProps
} from 'src/components/accordion';

const {Panel} = Accordion;

const Template: Story<AccordionProps> = ({...props}): JSX.Element => (
    <Accordion ghost={true}>
        <Panel header="Мистер Твистер" key="1">
            Самуил Яковлевич Маршак
        </Panel>

        <Panel header="Преступление и наказание" key="2">
            Фёдор Михайлович Достоевский
        </Panel>

        <Panel header="Мертвые души" key="3">
            Николай Васильевич Гоголь
        </Panel>
    </Accordion>
);

const AccordionStory = Template.bind({});

AccordionStory.storyName = 'Базовое представление';

export {AccordionStory};
