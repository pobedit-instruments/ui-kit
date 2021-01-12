import React from 'react';
import {Meta} from '@storybook/react/types-6-0';
import dedent from 'ts-dedent';

import {
    Accordion,
    AccordionProps
} from 'src/components/accordion';

import {
    Component,
    Content,
    getStoryTitle
} from 'src/structure';

const controls: Meta<AccordionProps> = {
    title: getStoryTitle([
        Component.CONTENT,
        Content.ACCORDION
    ]),

    component: Accordion,

    parameters: {
        docs: {
            description: {
                component: dedent`
                    ### Название компонента

                    **Accordion**

                    ### Дочерние компоненты

                    * **Accordion.Panel**
                `
            }
        }
    },

    argTypes: {}
};

export {AccordionStory} from './accordion/stories/accordion.stories';

export default controls;
