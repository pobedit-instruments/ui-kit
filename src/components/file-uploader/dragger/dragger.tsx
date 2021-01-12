import React from 'react';

import AntFileUploader, {
    DraggerProps as FileDraggerProps
} from 'antd/lib/upload';

const AntFileDragger = AntFileUploader.Dragger;
const displayName = 'FileUploader.Dragger';

const FileDragger: React.FunctionComponent<FileDraggerProps> = ({children, ...props}) => (
    <AntFileDragger data-test={displayName} {...props}>
        {children}
    </AntFileDragger>
);

FileDragger.displayName = displayName;

export {FileDragger};
export type {FileDraggerProps};
