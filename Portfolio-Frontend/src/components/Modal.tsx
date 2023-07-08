import React, { FC, ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

type ModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  title?: string | null;
  children: ReactNode;
};

const ModalContainer = styled.div`
  position: relative;
  background-color: white;
  border-radius: 0.5rem;
  border-width: 0px;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
  padding: 1rem;
  min-width: 35rem;
  max-width: 150rem;
  min-height: 20rem;
  max-height: 90vh;
  overflow-y: auto;
`;

const Modal: FC<ModalProps> = ({ isOpen, closeModal, title, children }) => {

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      {isOpen ? (
        <div className="fixed z-50 left-0 top-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center" onClick={handleOverlayClick}>
          <ModalContainer>
            <button className="absolute right-3 top-3 m-2" onClick={closeModal}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            {title && <h1 className="text-center text-2xl font-bold m-4">{title}</h1>}
            {children}
          </ModalContainer>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
