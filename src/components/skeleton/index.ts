import {
    Skeleton as OriginalSkeleton,
    SkeletonProps
} from './skeleton';

import {
    SkeletonAvatar,
    SkeletonAvatarProps
} from './avatar';

import {
    SkeletonButton,
    SkeletonButtonProps
} from './button';

import {
    SkeletonInput,
    SkeletonInputProps
} from './input';

import {
    SkeletonImage,
    SkeletonImageProps
} from './image';

import {
    SkeletonParagraph,
    SkeletonParagraphProps
} from './paragraph';

import {
    SkeletonTitle,
    SkeletonTitleProps
} from './title';

type SkeletonType = typeof OriginalSkeleton & {
    Avatar: typeof SkeletonAvatar;
    Button: typeof SkeletonButton;
    Input: typeof SkeletonInput;
    Image: typeof SkeletonImage;
    Paragraph: typeof SkeletonParagraph;
    Title: typeof SkeletonTitle;
};

const Skeleton = OriginalSkeleton as SkeletonType;

Skeleton.Avatar = SkeletonAvatar;
Skeleton.Button = SkeletonButton;
Skeleton.Image = SkeletonImage;
Skeleton.Input = SkeletonInput;
Skeleton.Paragraph = SkeletonParagraph;
Skeleton.Title = SkeletonTitle;

export {Skeleton};

export type {
    SkeletonProps,
    SkeletonAvatarProps,
    SkeletonButtonProps,
    SkeletonInputProps,
    SkeletonImageProps,
    SkeletonTitleProps,
    SkeletonParagraphProps
};
