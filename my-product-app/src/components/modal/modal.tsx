import React, { ReactNode } from 'react';
import '../modal/modal.css'
// import { ReactComponent as CloseIcon } from '../../assets/icons/cross.svg';

interface ModalProps {
    visible: () => void;
    title: string;
    onClose: () => void;
    children?: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ visible, title, onClose, children }) => {

    const handleModalClick = () => {


        onClose();
    };

    // if (!visible) {
    //     return null;
    // }

    return (
        <div className="modal-overlay" onClick={handleModalClick}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <div className="modal-title">{title}</div>
                    <button className="modal-close" onClick={onClose}>
                        {/* <CloseIcon /> */}
                        X

                    </button>
                </div>
                <div className="modal-content">{children}</div>
            </div>
        </div>
    );
};

export default Modal;
