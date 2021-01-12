import React from 'react';
import {Story} from '@storybook/react/types-6-0';
import {message} from 'antd';
import ImageCrop from 'antd-img-crop';

import {FileUploader} from 'src/components';

import {
    FileUploaderProps,
    FileStatus
} from 'src/components/file-uploader';

type UploadPreview = FileUploaderProps['onPreview'];
type HandleChange = FileUploaderProps['onChange'];

const params: FileUploaderProps = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    listType: 'picture-card'
};

const handlePreview: UploadPreview = async (file) => {
    let {url} = file;
    const image = new Image();

    if (!url) {
        url = await new Promise((resolve) => {
            const reader = new FileReader();

            reader.readAsDataURL(file.originFileObj!);
            reader.onload = () => resolve(reader.result as string);
        });
    }

    if (url) {
        image.src = url;
    }

    const imageWindow = window.open(url);

    if (imageWindow) {
        imageWindow.document.write(image.outerHTML);
    }
};

const Template: Story<FileUploaderProps> = ({...props}): JSX.Element => {
    const [fileList, setFileList] = React.useState<any>([
        {
            uid: '-1',
            name: 'image.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        }
    ]);

    const handleChange: HandleChange = ({file, fileList: newFileList}) => {
        switch (file.status) {
            case FileStatus.ERROR:
                message.error(`Ошибка загрузки файла "${file.name}"`);

                break;

            default:
                setFileList(newFileList);
        }

    };

    return (
        <ImageCrop rotate={true}>
            <FileUploader
                fileList={fileList}
                onChange={handleChange}
                onPreview={handlePreview}
                {...params}
                {...props}
            >
                {fileList.length < 5 && '+ Загрузить'}
            </FileUploader>
        </ImageCrop>
    );
};

const FileUploaderWithImageCropStory = Template.bind({});

FileUploaderWithImageCropStory.storyName = 'Изменение размера изображения';

export {FileUploaderWithImageCropStory};
