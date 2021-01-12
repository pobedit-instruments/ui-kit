import React from 'react';
import AntTypography from 'antd/lib/typography';

const AntText = AntTypography.Text;
const displayName = 'Typography.Text';

type TextProps = React.ComponentProps<typeof AntText>;

const Text: React.FunctionComponent<TextProps> = ({...props}) => {
    return <AntText data-test={displayName} {...props} />;
};

Text.displayName = displayName;

export {Text};
export type {TextProps};
