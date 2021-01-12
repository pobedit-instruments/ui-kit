import {
    FileUploader as OriginalFileUploader,
    FileUploaderProps,
    FileUploaderListProps,
    FileUploaderChangeParam,
    FileUploaderRcFile
} from './file-uploader';

import {
    FileDragger,
    FileDraggerProps
} from './dragger';

type FileUploaderType = typeof OriginalFileUploader & {
    Dragger: typeof FileDragger;
};

enum FileStatus {
    ERROR = 'error',
    SUCCESS = 'success',
    DONE = 'done',
    UPLOADING = 'uploading',
    REMOVED = 'removed'
}

const FileUploader = OriginalFileUploader as FileUploaderType;

FileUploader.Dragger = FileDragger;

export {
    FileUploader,
    FileStatus
};

export type {
    FileUploaderListProps,
    FileUploaderChangeParam,
    FileUploaderRcFile,
    FileUploaderProps,
    FileDraggerProps
};
