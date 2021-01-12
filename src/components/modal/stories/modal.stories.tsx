import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    Button,
    Modal
} from 'src/components'

import {ModalProps} from 'src/components/modal';

const Template: Story<ModalProps> = ({...props}): JSX.Element => {
    const [visible, setVisible] = React.useState(false);

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        setVisible(false);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Открыть
            </Button>

            <Modal
                title="Я пришел к тебе"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                {...props}
            >
                <p>Я пришел к тебе с приветом,</p>
                <p>Рассказать, что солнце встало,</p>
                <p>Что оно горячим светом</p>
                <p>По листам затрепетало;</p>
            </Modal>
        </>
    );
};

const ModalStory = Template.bind({});

ModalStory.storyName = 'Базовое использование';

export {ModalStory};
