/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Modal from './modal/DetailModal';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'; // 수정된 임포트

const RollingPaper = () => {
  const [isModalOpend, setIsModalOpend] = useState(false);
  const [rollingPapers, setRollingPapers] = useState([]);
  const apiURL = process.env.REACT_APP_API_URL;

  // 사용자 ID 추출
  const token = localStorage.getItem('token');
  const decodedToken = jwtDecode(token);
  const { userId } = decodedToken;

  useEffect(() => {
    const fetchRollingPapers = async () => {
      try {
        const response = await axios.get(`${apiURL}/rolling-papers/${userId}`);
        console.log(response.data);
        setRollingPapers(response.data);
      } catch (error) {
        console.error('롤링 페이퍼 데이터를 가져오는 데 실패했습니다:', error);
      }
    };
    fetchRollingPapers();
  }, [userId]);

  const modalView = () => {
    setIsModalOpend(prevState => !prevState);
    if (!isModalOpend) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    console.log('모달 작동! ');
  };

  return (
    <>
      {rollingPapers.map(paper => (
        <Wrapper key={paper.id} onClick={modalView}>
          <Pin />
          <Paper>
            <Message>{paper.content}</Message>
            <Sender>보낸이: {paper.senderNickname}</Sender>
          </Paper>
          {isModalOpend && <Modal modalClose={modalView} />}
        </Wrapper>
      ))}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Paper = styled.div`
  width: 170px;
  height: 180px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 20px;
  background: #fffbe5;
  box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.25);
  z-index: 100;
`;

const Pin = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #f66c6c;
  margin-bottom: -15px;
  z-index: 102;
`;

const Message = styled.p`
  width: 140px;
  height: 40px;
  text-align: center;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Sender = styled.p`
  text-align: center;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export default RollingPaper;
