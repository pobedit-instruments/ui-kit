import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    Button,
    Coupon
} from 'src/components';

import {
    CouponProps,
    CouponState
} from 'src/components/coupon';

const {Group} = Button;
const {NOT_FOUND} = CouponState;

const defaultProps: Record<string, CouponProps> = {
    [CouponState.SUCCESS]: {
        status: 'success',
        title: 'Успех',
        subTitle: 'Вы успешно авторизованы'
    },
    [CouponState.WARNING]: {
        status: 'warning',
        title: 'Предупреждение',
        subTitle: 'Вы находитесь в процессе авторизации'
    },
    [CouponState.INFO]: {
        status: 'info',
        title: 'Информация',
        subTitle: 'Просто информирую...'
    },
    [CouponState.ERROR]: {
        status: 'error',
        title: 'Ошибка',
        subTitle: 'Упс. Что-то пошло не так'
    },
    [CouponState.FORBIDDEN]: {
        status: '403',
        title: '403',
        subTitle: 'Упс. Кажется вы не авторизованы'
    },
    [CouponState.NOT_FOUND]: {
        status: '404',
        title: '404',
        subTitle: 'А страницы-то нет уже'
    },
    [CouponState.INTERNAL_SERVER_ERROR]: {
        status: '500',
        title: '500',
        subTitle: 'Вот и сбой на сервере'
    }
};

const Template: Story<CouponProps> = ({...props}): JSX.Element => {
    return (
        <Coupon
            extra={<Button type="primary">Назад</Button>}
            {...defaultProps[props.status!]}
            {...props}
        />
    );
};

const CouponStory = Template.bind({});

CouponStory.args = {status: 403};

CouponStory.storyName = 'Базовое представление';

export {CouponStory};
