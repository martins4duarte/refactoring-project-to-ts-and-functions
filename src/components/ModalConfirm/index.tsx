import { ReactNode } from 'react';
import ReactModal from 'react-modal';

interface Props {
  isOpen: boolean;
  setIsOpen: () => void;
  children: ReactNode;
}

export default function ModalConfirm({ isOpen, setIsOpen, children }: Props) {

  return (
    <ReactModal
        shouldCloseOnOverlayClick={!false}
        onRequestClose={setIsOpen}
        isOpen={isOpen}
        ariaHideApp={false}
        style={{
          content: {
            top: '44%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: '#F0F0F5',
            color: '#000000',
            borderRadius: '8px',
            width: '370px',
            border: 'none',
          },
          overlay: {
            backgroundColor: '#121214e6',
          },
        }}
      >
        {children}
      </ReactModal>
  )
}
