/* eslint-disable no-console */
import { useRef, Children, useEffect } from 'react';
import styled from 'styled-components';

const SendingModal = ({ modalClose, children }) => {
  // 리스트 정보

  // 모달 백그라운드 구분
  const modalRef = useRef(null);

  const sendMessage = () => {
    console.log('전송 ');
    alert('전송');
    modalClose(false);
  };

  useEffect(() => {
    const closeModal = e => {
      if (modalClose && modalRef.current && !modalRef.current.contains(e.target)) {
        modalClose(false);
      }
    };

    document.addEventListener('mousedown', closeModal);

    return () => {
      document.removeEventListener('mousedown', closeModal);
    };
  }, [modalClose]);

  return (
    <>
      <ModalBg />
      <ModalWrapper ref={modalRef}>
        <Pin />
        {children ? (
          <Children />
        ) : (
          <>
            <ModalInput />
            <SendBtn onClick={sendMessage}>메시지 보내기</SendBtn>
          </>
        )}
      </ModalWrapper>
    </>
  );
};

const ModalBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  width: 100%;
  height: 100%;
  z-index: 200;
  background: rgba(0, 0, 0, 0.8);
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 351px;
  height: 345px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 20px;
  background: #fffbe5;
  box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.25);
  z-index: 230;

  /* 아이폰 SE UI */
  @media screen and (max-width: 375px) {
    width: 90%;
    height: 38%;
  }

  @media screen and (max-width: 599px) and (min-width: 376px) {
    width: 90%;
    height: 30%;
  }
`;

const Pin = styled.div`
  width: 52px;
  height: 49px;
  border-radius: 50%;
  background-color: #f66c6c;
  margin-top: -50px;
  z-index: 102;
`;

const DeletionBtn = styled.button`
  margin-left: 260px;
  font-size: 16px;
  margin-top: 0px;

  background-color: #fffbe5;
  border: none;
  color: #5d5d5d;

  /* 아이폰 SE UI  */
  @media screen and (max-width: 375px) {
    width: 8%;
    margin-top: 6px;
    margin-left: 80%;
  }

  @media screen and (max-width: 599px) and (min-width: 376px) {
    margin-left: 78%;
    margin-top: 8px;
  }
`;

const Sender = styled.div`
  font-size: 14px;
  font-weight: 300;
  margin-top: 70px;

  /* 아이폰 SE UI  */
  @media screen and (max-width: 375px) {
    font-size: 30px;
    margin-bottom: 6%;
    margin-top: 0;
  }

  @media screen and (max-width: 599px) and (min-width: 376px) {
    font-size: 30px;
    margin-bottom: 6%;
    margin-top: 4%;
  }
`;

const ModalInput = styled.input`
  width: 280px;
  height: 164px;

  font-size: 16px;
  font-weight: 300;
  line-height: 30px;
  margin-top: 10px;
  background-color: transparent;
  border: none;

  &:focus {
    border: none;
  }

  @media screen and (max-width: 599px) and (min-width: 375px) {
    font-size: 16px;
    margin-top: 2%;
  }
`;

const SendBtn = styled.button`
  width: 170px;
  height: 60px;
  background-color: rgba(114, 77, 188, 1);
  text-align: center;
  padding: 20px;
  color: #ffff;
  border-radius: 10px;
  margin: 50px auto 0 auto;
  border: none;
  z-index: 500;
  &:hover {
    background-color: rgba(114, 100, 188, 1);
  }
`;

export default SendingModal;
