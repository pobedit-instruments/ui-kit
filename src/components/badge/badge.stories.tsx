import {Meta} from '@storybook/react/types-6-0';
import dedent from 'ts-dedent';

import {
    Badge,
    BadgeProps
} from 'src/components/badge';

import {
    Component,
    Informers,
    getStoryTitle
} from 'src/structure';

const controls: Meta<BadgeProps> = {
    title: getStoryTitle([
        Component.INFORMERS,
        Informers.BADGE
    ]),

    component: Badge,

    parameters: {
        docs: {
            description: {
                component: dedent`
                    ### Название компонента

                    **Badge**
                `
            }
        }
    },

    argTypes: {
        color: {
            description: 'Цвет точки слева',
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

export {BadgeStory} from './stories/badge-default.stories';
export {BadgeWithChildrenStory} from './stories/badge-children.stories';
export {BadgeWithIconStory} from './stories/badge-icon.stories';
export {BadgeWithDotStory} from './stories/badge-dot.stories';
export {BadgeWithTextStory} from './stories/badge-text.stories';
export {BadgeWithDynamicStory} from './stories/badge-dynamic.stories';

export default controls;
