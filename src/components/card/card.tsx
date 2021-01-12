import React from 'react';
import AntCard, {CardProps} from 'antd/lib/card';

const displayName = 'Card';

const Card: React.FunctionComponent<CardProps> = ({children, ...props}) => (
    <AntCard data-test={displayName} {...props}>
        {children}
    </AntCard>
);

Card.displayName = displayName;

export {Card};
export type {CardProps};

export type {
    CardSize,
    CardType,
    CardInterface
} from 'antd/lib/card';
