import { useRef, Children, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as OutButton } from '../../imgs/outButton.svg';

const ConfirmModal = ({ title, dialog, children, modalClose }) => {
  // 리스트 정보

  // 모달 백그라운드 구분
  const modalRef = useRef(null);
  const navigate = useNavigate();

  const modalClickYes = () => {
    // eslint-disable-next-line no-alert
    alert('계정을 삭제했습니다.');
    modalClose(false);
    navigate('/');
  };

  const modalClickNo = () => {
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
  }, []);

  return (
    <>
      <ModalBg onClick={() => modalClose(true)} />
      <ModalWrapper ref={modalRef} onClick={() => modalClose(false)}>
        {children ? (
          <Children />
        ) : (
          <>
            <Title>{title}</Title>
            <Description>{dialog}</Description>
            <ButtonWrapper>
              <NoBtn onClick={(() => modalClickNo(), modalClose(false))}>취소</NoBtn>
              <YesBtn onClick={() => modalClickYes()}>확인</YesBtn>
            </ButtonWrapper>
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

  background: rgba(0, 0, 0, 0.2);
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 560px;
  height: 360px;
  z-index: 400;

  background: #d6e8e3;
  border-radius: 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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

const CloseButton = styled(OutButton)`
  display: flex;
  margin-left: 480px;
  margin-top: 30px;

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

const Title = styled.div`
  font-size: 40px;
  margin-bottom: 8%;

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

const Description = styled.div`
  font-size: 18px;
  margin-bottom: 37px;

  @media screen and (max-width: 599px) and (min-width: 375px) {
    font-size: 16px;
    margin-top: 2%;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 383px;
  margin-bottom: 63px;

  flex-direction: row;
  justify-content: space-between;

  /* 아이폰 SE UI  */
  @media screen and (max-width: 375px) {
    width: 70%;
    margin-bottom: 5%;
  }

  @media screen and (max-width: 599px) and (min-width: 376px) {
    width: 80%;
    margin-bottom: 5%;
  }
`;

const YesBtn = styled.button`
  width: 147px;
  height: 54px;
  background-color: white;
  border-radius: 10px;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 22px;
  color: #424242;

  /* 아이폰 SE UI  */
  @media screen and (max-width: 375px) {
    width: 100px;
    height: 42px;

    font-size: 20px;
  }

  @media screen and (max-width: 599px) and (min-width: 376px) {
    width: 110px;
    height: 45px;
  }
`;

const NoBtn = styled.button`
  width: 147px;
  height: 54px;
  background-color: white;
  border-radius: 10px;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #424242;
  font-size: 22px;

  /* 아이폰 SE UI  */
  @media screen and (max-width: 375px) {
    width: 100px;
    height: 42px;

    font-size: 20px;
  }

  @media screen and (max-width: 599px) and (min-width: 376px) {
    width: 110px;
    height: 45px;
  }
`;

export default ConfirmModal;
