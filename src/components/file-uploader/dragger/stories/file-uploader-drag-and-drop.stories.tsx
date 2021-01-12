import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {InboxOutlined} from '@ant-design/icons';
import {message} from 'antd';

import {
    FileUploader,
    FileUploaderProps,
    FileStatus
} from 'src/components/file-uploader';

const {Dragger} = FileUploader;

const params: FileUploaderProps = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',

    onChange({file, fileList}) {
        switch (file.status) {
            case FileStatus.DONE:
                message.success(`Файл "${file.name}" загружен`);

                break;

            case FileStatus.ERROR:
                message.error(`Ошибка загрузки файла "${file.name}"`);

                break;
        }
    }
};


const Template: Story<FileUploaderProps> = ({...props}): JSX.Element => (
    <Dragger {...params} {...props}>
        <p className="ant-upload-drag-icon">
            <InboxOutlined />
        </p>

        <p className="ant-upload-text">Кликните или перетащите файл</p>
    </Dragger>
);

const FileUploaderWithDraggerStory = Template.bind({});

FileUploaderWithDraggerStory.storyName = 'Перетаскивание файлов';

export {FileUploaderWithDraggerStory};
