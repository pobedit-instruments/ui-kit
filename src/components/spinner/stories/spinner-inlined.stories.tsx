import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    Coupon,
    Spinner
} from 'src/components';

import {SpinnerProps} from 'src/components/spinner';
import {CouponState} from 'src/components/coupon';

const Template: Story<SpinnerProps> = ({...props}): JSX.Element => (
    <Spinner {...props}>
        <Coupon status={CouponState.NOT_FOUND} />
    </Spinner>
)

const InlinedSpinnerStory = Template.bind({});

InlinedSpinnerStory.storyName = 'Встраивание компонента';

export {InlinedSpinnerStory};
