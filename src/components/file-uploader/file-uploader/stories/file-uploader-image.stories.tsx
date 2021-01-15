import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    LoadingOutlined,
    PlusOutlined
} from '@ant-design/icons';

import {
    FileUploader,
    Notification
} from 'src/components';

import {
    FileUploaderProps,
    FileStatus
} from 'src/components/file-uploader';

const {Message} = Notification;

const params: FileUploaderProps = {
    name: 'Аватар',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    listType: 'picture-card',
    showUploadList: false
};

type BeforeUpload = FileUploaderProps['beforeUpload'];
type HandleChange = FileUploaderProps['onChange'];

const beforeUpload: BeforeUpload = (file) => {
    const image = /image\/(png|jp[e]?g)/.test(file.type);

    if (!image) {
        Message.error('You can only upload JPG/PNG file!');
    }

    const goodSize = file.size / 1024 / 1024 < 2;

    if (!goodSize) {
        Message.error('Изображение должно быть меньше 2MB!');
    }

    return image && goodSize;
};

function getBase64(image: Blob, callback: (image: string) => void) {
    const reader = new FileReader();

    reader.addEventListener('load', () => (
        callback(reader.result as string))
    );

    if (image) {
        reader.readAsDataURL(image);
    } else {
        Message.error(`Ошибка загрузки изображения"`);
    }
}

const Template: Story<FileUploaderProps> = ({...props}): JSX.Element => {
    const [loading, setLoading] = React.useState<boolean>();
    const [imageUrl, setImageUrl] = React.useState<string>();

    const UploadButton = () => {
        if (imageUrl) {
            return <img src={imageUrl} alt="avatar" style={{width: '100%'}} />;
        } else {
            if (loading) {
                return <LoadingOutlined />;
            }

            return <PlusOutlined />;
        }
    };

    const handleChange: HandleChange = ({file}) => {
        switch (file.status) {
            case FileStatus.UPLOADING:
                setLoading(true);

                break;

            case FileStatus.DONE:
                getBase64(file.originFileObj!, (imageUrl) => {
                    setImageUrl(imageUrl);
                    setLoading(false);
                });

                break;

            case FileStatus.ERROR:
                Message.error(`Ошибка загрузки файла "${file.name}"`);
                setLoading(false);

                break;
        }
    };

    return (
        <FileUploader
            beforeUpload={beforeUpload}
            onChange={handleChange}
            {...params}
            {...props}
        >
            {
                <UploadButton />
            }
        </FileUploader>
    );
};

const FileUploaderWithImageStory = Template.bind({});

FileUploaderWithImageStory.storyName = 'Загрузка изображений';

export {FileUploaderWithImageStory};
