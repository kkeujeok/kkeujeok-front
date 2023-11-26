import styled from 'styled-components';

const RollingPaper = () => (
  <Wrapper>
    <Pin />
    <Paper>
      <Message>ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇdddddㅇㅇㅇㅇㅇ</Message>
      <Sender>보낸이 : 유라</Sender>
    </Paper>
  </Wrapper>
);

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
