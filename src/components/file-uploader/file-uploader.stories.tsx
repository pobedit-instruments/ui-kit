import {Meta} from '@storybook/react/types-6-0';
import dedent from 'ts-dedent';

import {
    FileUploader,
    FileUploaderProps
} from 'src/components/file-uploader';

import {
    Component,
    Other,
    getStoryTitle
} from 'src/structure';

const controls: Meta<FileUploaderProps> = {
    title: getStoryTitle([
        Component.OTHER,
        Other.FILE_UPLOADER
    ]),

    component: FileUploader,

    parameters: {
        docs: {
            description: {
                component: dedent`
                    <br />

                    ### Название компонента

                    **FileUploader**

                    Управляет загрузкой файлов

                    ### Дочерние компоненты

                    * **FileUploader.Dragger**
                `
            }
        }
    },

    argTypes: {
        accept: {
            description: 'Установить спецификаторы типов',
            table: {
                type: {
                    summary: 'string',
                    detail: 'См. [описание](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept)'
                }
            },
            control: {
                type: 'boolean',
                value: false
            }
        }
    }
};

export {FileUploaderStory} from './file-uploader/stories/file-uploader-default.stories';
export {FileUploaderWithImageStory} from './file-uploader/stories/file-uploader-image.stories';
export {FileUploaderWithImageCropStory} from './file-uploader/stories/file-uploader-crop-image.stories';
export {FileUploaderWithDraggerStory} from './dragger/stories/file-uploader-drag-and-drop.stories';

export default controls;
