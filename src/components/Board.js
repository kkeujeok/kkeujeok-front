/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import RollingPaper from './RollingPaper';
import { ReactComponent as Ground } from '../imgs/ground.svg';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

const Board = () => {
  // const [isModalDialog, setIsModalDialog] = useState('');
  const apiURL = process.env.REACT_APP_API_URL;
  // 사용자 ID 추출
  const token = localStorage.getItem('token');
  const decodedToken = jwtDecode(token);
  const { userId } = decodedToken;
  const [rollingPaperDtos, setRollingPaperDtos] = useState([]);

  const openModalHandler = () => {};
  const userInfo = async () => {
    try {
      console.log('유저아이디: ', userId);

      const response = await axios.get(`${apiURL}/users/myPage/${userId}`);
      setRollingPaperDtos(response.data.rollingPaperDtos);
      console.log('멜론:', response);
    } catch (error) {
      console.error('에러 :', error);
    }
  };

  useEffect(() => {
    userInfo();
  }, [userId]);

  return (
    <Wrapper>
      <PaperBox>
        {rollingPaperDtos.map((paperDto, index) => (
            <RollingPaper key={paperDto.id || index} {...paperDto} />
        ))}
        <GroundBox />
      </PaperBox>
      <ConfirmRolling>받은 페이퍼 수: {rollingPaperDtos.length} 개</ConfirmRolling>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 60%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(
    180deg,
    #0c0d41 0%,
    #221c5f 31.16%,
    #352f85 57.51%,
    #40399e 70.05%,
    rgba(124, 79, 197, 0.76) 81.56%,
    rgba(216, 116, 146, 0) 100%
  );
`;

const GroundBox = styled(Ground)`
  position: fixed;
  bottom: 0;
  left: 0;
  width: auto;
  height: 180px;
  z-index: 0;
`;

const PaperBox = styled.div`
  display: flex;
  width: 510px;
  align-items: flex-start;
  align-content: flex-start;
  gap: 54px 110px;
  flex-wrap: wrap;
`;

const ConfirmRolling = styled.p`
  left: 50%;
  position: absolute;
  bottom: 0;
  z-index: 400;
`;
export default Board;
