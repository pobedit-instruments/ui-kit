import {Meta} from '@storybook/react/types-6-0';
import dedent from 'ts-dedent';

import {
    Coupon,
    CouponProps
} from 'src/components/coupon';

import {
    Component,
    Content,
    getStoryTitle
} from 'src/structure';

const controls: Meta<CouponProps> = {
    title: getStoryTitle([
        Component.CONTENT,
        Content.COUPON
    ]),

    component: Coupon,

    parameters: {
        docs: {
            description: {
                component: dedent`
                    ### Название компонента

                    **Coupon**

                    ### Описание

                    Используется когда важные операции требуют информирования или участия пользователя. Удачно совмещается c компонентами с Table и Modal.
                `
            }
        }
    },

    argTypes: {
        status: {
            description: 'Статус',

            table: {
                type: {
                    summary: 'string',
                    detail: 'success | error | info | warning'
                },
                defaultValue: {
                    summary: 'info'
                }
            },

            control: {
                type: 'select',
                options: [
                    '403',
                    '404',
                    '500',
                    'success',
                    'error',
                    'info',
                    'warning'
                ]
            }
        }
    }
};

export {CouponStory} from './stories/coupon.stories';

export default controls;
