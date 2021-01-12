import React from 'react';

import AntModal, {
    ModalProps,
    ModalFuncProps as ModalMethodProps
} from 'antd/lib/modal';

const displayName = 'Modal';

const Modal: React.FunctionComponent<ModalProps> = ({children, ...props}) => (
    <AntModal data-test={displayName} {...props}
    >
        {children}
    </AntModal>
);

Modal.displayName = displayName;

export {Modal};

export type {
    ModalProps,
    ModalMethodProps
};
