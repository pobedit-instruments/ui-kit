import React from 'react';
import {Story} from '@storybook/react/types-6-0';
import {InboxOutlined} from '@ant-design/icons';

import {
    Notification,
    Space
} from 'src/components';

import {
    FileUploader,
    FileUploaderProps,
    FileStatus
} from 'src/components/file-uploader';

const {Dragger} = FileUploader;
const {Message} = Notification;

const params: FileUploaderProps = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',

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
    <Dragger {...params} {...props}>
        <Space direction="vertical">
            <InboxOutlined style={{fontSize: 50, color: '#0078D2'}} />
            Кликните или перетащите файл
        </Space>
    </Dragger>
);

const FileUploaderWithDraggerStory = Template.bind({});

FileUploaderWithDraggerStory.storyName = 'Перетаскивание файлов';

export {FileUploaderWithDraggerStory};
