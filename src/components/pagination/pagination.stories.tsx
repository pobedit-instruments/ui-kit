import {Meta} from '@storybook/react/types-6-0';
import dedent from 'ts-dedent';

import {
    Pagination,
    PaginationProps
} from 'src/components/pagination';

import {
    Component,
    Navigation,
    getStoryTitle
} from 'src/structure';

const controls: Meta<PaginationProps> = {
    title: getStoryTitle([
        Component.NAVIGATION,
        Navigation.PAGINATION
    ]),

    component: Pagination,

    parameters: {
        docs: {
            description: {
                component: dedent`
                    ### Название компонента

                    **Pagination**
                `
            }
        }
    },

    argTypes: {
        current: {
            description: 'Номер текущей страницы',

            table: {
                type: {
                    summary: 'number'
                },
                defaultValue: {
                    summary: '-'
                }
            },

            control: {
                type: 'number',
                step: 1
            }
        }
    }
};

export {PaginationStory} from './stories/pagination-default.stories';

export default controls;
