import {Meta} from '@storybook/react/types-6-0';
import dedent from 'ts-dedent';

import {
    Tag,
    TagProps
} from 'src/components/tag';

import {
    Component,
    Informers,
    getStoryTitle
} from 'src/structure';

const controls: Meta<TagProps> = {
    title: getStoryTitle([
        Component.INFORMERS,
        Informers.TAG
    ]),

    component: Tag,

    parameters: {
        docs: {
            description: {
                component: dedent`
                    ### Название компонента

                    **Tag**
                `
            }
        }
    },

    argTypes: {
        closable: {
            description: 'Сделать тег закрываемым',

            table: {
                type: {
                    summary: 'number'
                },
                defaultValue: {
                    summary: false
                }
            },

            control: {
                type: 'boolean'
            }
        }
    }
};

export {TagStory} from './stories/tag-default.stories';
export {ColoredTagStory} from './stories/tag-colored.stories';
export {TagWithIconStory} from './stories/tag-icons.stories';

export default controls;
