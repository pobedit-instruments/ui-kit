import React from 'react';
import AntTypography from 'antd/lib/typography';

const AntParagraph = AntTypography.Paragraph;
const displayName = 'Typography.Paragraph';

type ParagraphProps = React.ComponentProps<typeof AntParagraph>;

const Paragraph: React.FunctionComponent<ParagraphProps> = ({...props}) => {
    return <AntParagraph data-test={displayName} {...props} />;
};

Paragraph.displayName = displayName;

export {Paragraph};
export type {ParagraphProps};
