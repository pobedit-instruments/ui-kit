import React from 'react';
import {LoadingOutlined} from '@ant-design/icons';
import AntSpinner, {SpinProps} from 'antd/lib/spin';

const displayName = 'Spinner';

type SpinnerProps = SpinProps & {
    active?: boolean
};

const Spinner: React.FunctionComponent<SpinnerProps> = ({children, indicator, active = true, ...props}) => (
    <AntSpinner data-test={displayName}
                indicator={
                    indicator || <LoadingOutlined spin={true} />
                }
                spinning={active}
                {...props}
    >
        {children}
    </AntSpinner>
);

Spinner.displayName = displayName;

export {Spinner};
export type {SpinnerProps};

export type {
    SpinIndicator as SpinnerIndicator,
    SpinSize as SpinnerSize,
    SpinState as SpinnerState
} from 'antd/lib/spin';
