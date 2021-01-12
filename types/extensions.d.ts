declare module '*.mdx' {
    let MDXComponent: (props: any) => JSX.Element;

    export default MDXComponent;
}

declare module '*.less' {
    const resource: Record<string, string>;

    export = resource;
}
