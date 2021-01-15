import React from 'react';
import {Story} from '@storybook/react/types-6-0';
import {UploadOutlined} from '@ant-design/icons';

import {
    Button,
    FileUploader,
    Notification
} from 'src/components';

import {
    FileUploaderProps,
    FileStatus
} from 'src/components/file-uploader';

const {Message} = Notification;

const params: FileUploaderProps = {
    name: 'Файл',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
        authorization: 'authorization-text'
    },
    onChange({file, fileList}) {
        switch (file.status) {
            case FileStatus.DONE:
                Message.success(`Файл "${file.name}" загружен`);

                break;

            case FileStatus.ERROR:
                Message.error(`Ошибка загрузки файла "${file.name}"`);

                break;
        }
    }
};

const Template: Story<FileUploaderProps> = ({...props}): JSX.Element => (
    <FileUploader {...params} {...props}>
        <Button icon={<UploadOutlined />}>Загрузить</Button>
    </FileUploader>
);

const FileUploaderStory = Template.bind({});

FileUploaderStory.storyName = 'Базовое использование';

export {FileUploaderStory};
