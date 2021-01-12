import {
    TypographyProps
} from 'antd/lib/typography';

import {
    Typography as OriginTypography
} from './typography';

import {
    Paragraph,
    ParagraphProps
} from './paragraph';

import {
    Link,
    LinkProps
} from './link';

import {
    Text,
    TextProps
} from './text';

import {
    Title,
    TitleProps
} from './title';

const Typography = OriginTypography as TypographyProps;

Typography.Link = Link;
Typography.Paragraph = Paragraph;
Typography.Text = Text;
Typography.Title = Title;

export {Typography};

export type {
    TypographyProps,
    ParagraphProps,
    TitleProps,
    TextProps,
    LinkProps
};
