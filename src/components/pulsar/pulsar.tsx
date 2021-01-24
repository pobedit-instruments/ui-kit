import React from 'react';
import {ConfigContext, ConfigConsumerProps} from 'antd/lib/config-provider';
import {Product} from 'src/config';

import './pulsar.less';

type PulsarProps = {
    color?: string;
    size?: 'large' | 'middle' | 'small' | number;
    style?: React.CSSProperties;
    className?: string;
    prefixCls?: string;
};

type Size = Record<string, number>;

const displayName = 'Pulsar';

const sizeType: Size = {
    small: 8,
    middle: 16,
    large: 32
};

const DEFAULT_COLOR = 'rgb(252, 3, 96)';
const DEFAULT_SIZE = 'small';

const Pulsar: React.FunctionComponent<PulsarProps> = ({
    color = DEFAULT_COLOR,
    size = DEFAULT_SIZE,
    prefixCls,
    ...props
}) => {
    const {getPrefixCls} = React.useContext<ConfigConsumerProps>(ConfigContext);
    const className = getPrefixCls(Product.PREFIX, prefixCls);

    const sizeValue = sizeType[size] || size as number;
    const ripple = sizeValue * 3;
    const position = -(sizeValue * 3) / 2;

    return (
        <div data-test={displayName}
             aria-live="polite"
             role="status"
             {...props}
        >
            <div className={`${className}-pulsar`}
                 style={{
                     backgroundColor: color,
                     height: sizeValue,
                     width: sizeValue
                 }}
            >
                <div className={`${className}-pulsar__ripple`}
                     style={{
                         backgroundColor: color,
                         width: ripple,
                         height: ripple,
                         marginTop: position,
                         marginLeft: position
                     }}
                />
            </div>
        </div>
    );
};

Pulsar.displayName = displayName;

export {Pulsar};
export type {PulsarProps};
