import React from 'react';
import AntFileUploader, {UploadProps} from 'antd/lib/upload';

type FileUploaderProps = UploadProps & {
    children?: React.ReactNode
};

const displayName = 'FileUploader';

const FileUploader = React.forwardRef<unknown, FileUploaderProps>(({children, ...props}, ref) => (
    <AntFileUploader data-test={displayName} ref={ref} {...props}>
        {children}
    </AntFileUploader>
));

FileUploader.displayName = displayName;

export {FileUploader};
export type {FileUploaderProps};

export type {
    UploadListProps as FileUploaderListProps,
    UploadChangeParam as FileUploaderChangeParam,
    RcFile as FileUploaderRcFile
} from 'antd/lib/upload';
