import {Meta} from '@storybook/react/types-6-0';
import dedent from 'ts-dedent';

import {
    Select,
    SelectProps
} from 'src/components/select';

import {
    Component,
    BasicElement,
    getStoryTitle
} from 'src/structure';

const controls: Meta<SelectProps> = {
    title: getStoryTitle([
        Component.BASIC_ELEMENTS,
        BasicElement.SELECT
    ]),

    component: Select,

    parameters: {
        docs: {
            description: {
                component: dedent`
                    <br />

                    ### Название компонента

                    **Select**

                    ### Дочерние компоненты

                    * **Select.Group**
                    * **Select.Option**
                `
            }
        }
    },

    argTypes: {}
};

export {SelectStory} from './select/stories/select-default.stories';
export {CustomSelectStory} from './select/stories/select-custom.stories';

export default controls;
