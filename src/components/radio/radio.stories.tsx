import {Meta} from '@storybook/react/types-6-0';
import dedent from 'ts-dedent';

import {
    Radio,
    RadioProps
} from 'src/components/radio';

import {
    Component,
    BasicElement,
    getStoryTitle
} from 'src/structure';

const controls: Meta<RadioProps> = {
    title: getStoryTitle([
        Component.BASIC_ELEMENTS,
        BasicElement.RADIO
    ]),

    component: Radio,

    parameters: {
        docs: {
            description: {
                component: dedent`
                    <br />

                    ### Название компонента

                    **Radio**

                    ### Дочерние компоненты

                    * **Radio.Button**
                    * **Radio.Group**
                `
            }
        }
    },

    argTypes: {}
};

export {RadioStory} from './radio/stories/radio-default.stories';
export {RadioGroupStory} from './group/stories/radio-group.stories';
export {RadioButtonStory} from './button/stories/radio-button.stories';

export default controls;
