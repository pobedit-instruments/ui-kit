import React from 'react';

import AntResult, {
    ResultProps as CouponProps
} from 'antd/lib/result';

enum CouponState {
    INFO = 'info',
    SUCCESS = 'success',
    WARNING = 'warning',
    ERROR = 'error',
    FORBIDDEN = '403',
    NOT_FOUND = '404',
    INTERNAL_SERVER_ERROR = '500'
}

const displayName = 'Coupon';

const Coupon: React.FunctionComponent<CouponProps> = ({...props}) => (
    <AntResult data-test={displayName} {...props} />
);

Coupon.displayName = displayName;

export {
    Coupon,
    CouponState
};

export type {CouponProps};
