import React from 'react';
import style from './pulsar.less';

const displayName = 'Pulsar';

type PulsarProps = {
    color?: string;
    size?: 'large' | 'middle' | 'small' | number;
};

type Size = Record<string, number>;

const sizeType: Size = {
    small: 8,
    middle: 16,
    large: 32
};

const DEFAULT_COLOR = 'rgb(252, 3, 96)';
const DEFAULT_SIZE = 'small';

const Pulsar: React.FunctionComponent<PulsarProps> = ({
    color = DEFAULT_COLOR,
    size = DEFAULT_SIZE
}) => {
    const sizeValue = sizeType[size] || size as number;
    const ripple = sizeValue * 3;
    const position = -(sizeValue * 3) / 2;

    return (
        <div className={`${style.pulsar}`} style={{
            backgroundColor: color,
            height: sizeValue,
            width: sizeValue
        }}>
            <div className={style.pulsar__ripple} style={{
                backgroundColor: color,
                width: ripple,
                height: ripple,
                marginTop: position,
                marginLeft: position
            }}/>
        </div>
    );
}

Pulsar.displayName = displayName;

export {Pulsar};
export type {PulsarProps};
