import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as EmailImg } from '../imgs/Email.svg';
import { ReactComponent as Satellite } from '../imgs/Satellite.svg';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const Ranking = () => {
  const [rankingData, setRankingData] = useState([]);
  const [myRank, setMyRank] = useState(0);
  const apiURL = process.env.REACT_APP_API_URL;

  // 사용자 ID 추출
  const token = localStorage.getItem('token');
  const decodedToken = jwtDecode(token);
  const userId = decodedToken;

  useEffect(() => {
    axios.get(`${apiURL}/users/ranking`)
      .then((response) => {setRankingData(response.data); console.log(response.data)})
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    axios.get(`${apiURL}/users/ranking/${userId}`)
      .then((response) => {setMyRank(response.data); console.log(response.data)})
      .catch(error => console.error(error));
  }, []);

  return(
  <Wrapper>
    <SatelliteIcon />
    <LeftBox>
      <BackBtn to="/home">내 우주로 돌아가기</BackBtn>
      <PaperBox>
        <ContentBox>
            <Title> 행운 랭킹 TOP 10 </Title>
            {rankingData.map((user, index) => (
                <List key={user.nickname}>
                    <p>{user.nickname}</p>
                    <p>{user.luck}점</p>
                </List>
            ))}
        </ContentBox>
      </PaperBox>
    </LeftBox>
    <RightBox>
      <MyRank>나의 랭킹: {myRank}등 </MyRank>
      <EmailIcon />
    </RightBox>
  </Wrapper>
)};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const LeftBox = styled.div`
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

const RightBox = styled.div`
  width: 36%;
  height: 100vh;
  display: flex;
  flex-direction: column;
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

const PaperBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${props => (props.right ? '450px' : '542px')};
  height: 655px;

  gap: 54px 110px;
  flex-wrap: wrap;
  border-radius: 30px;
  background: #eedde1;

  /* border: 10px dashed red; 테두리 스타일 및 색상 설정 */
  /* box-shadow: 0 0 0 10px #4872f4 dashed inset; */
`;

const ContentBox = styled.div`
  width: ${props => (props.right ? '430px' : '518px')};
  height: 626px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 26px;
  border: 1px dashed #000;

  background: #eedde1;
`;

const List = styled.div`
  width: 360px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
`;

const Title = styled.p`
  font-size: 25px;
  font-weight: 700;
`;

const MyRank = styled.p`
  color: #fff;
  font-size: 26px;
  font-weight: 700;
  margin-top: 30%;
`;

// 뒤로가기
const BackBtn = styled(Link)`
  color: #fff;
  z-index: 100;
  position: absolute;
  left: 36px;
  top: 3%;
`;

// 아이콘
const EmailIcon = styled(EmailImg)`
  width: 210px;
  height: auto;
  margin-top: 30%;
`;

const SatelliteIcon = styled(Satellite)`
  position: absolute;
  width: 230px;
  height: auto;
  top: 25%;
  right: 30%;
`;

export default Ranking;
