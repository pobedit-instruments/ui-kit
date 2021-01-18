declare module '*.mdx' {
    let MDXComponent: (props: any) => JSX.Element;

    export default MDXComponent;
}

declare module '*.mp4' {
    const resource: BinaryType;

    export = resource;
}

declare module '*.less' {
    const resource: Record<string, string>;

    export = resource;
}
