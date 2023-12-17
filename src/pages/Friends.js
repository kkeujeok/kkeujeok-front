import styled from 'styled-components';
import { ReactComponent as Paper } from '../imgs/Paper.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Friends = () => {
  const [searchData, setSearchData] = useState([]);
  const [searchWord, setSearchWord] = useState(""); // 검색어 상태 추가

  // 친구 목록
  const [friendList, setFriendList] = ustState([]);

  const search = () => {
    const userId = 1;

    axios.get(`/users/search/${searchWord}`)
      .then((response) => {
        setSearchData(response.data);
        console.log(response.data);
      })
      .catch(error => console.error(error));
  };

  const handleInputChange = (event) => {
    setSearchWord(event.target.value); // 입력 값으로 searchWord 상태 업데이트
  };


  const findFriendList = () => {
    axios.get(`/friends/${userId}`)
      .then((response) => {
        setFriendList(response.data.Friends)
        console.log(response.data.Friends)
      })
      .catch(error => console.error(error));

  }

  return (
  <Wrapper>
    <LeftBox>
      <BackBtn to="/home">내 우주로 돌아가기</BackBtn>
      <PaperBox>
        <ContentBox>
          <Title>친구 검색</Title>
          <SearchBox>
            <SearchInput 
              placeholder="이메일을 검색하세요" 
              value={searchWord} // input의 value를 searchWord 상태와 연결
              onChange={handleInputChange} // 입력 시 handleInputChange 호출
            />
            <SearchBtn onClick={search}> 검색 </SearchBtn>
          </SearchBox>
          <ResultBox>
            {searchData.map((user, index) => (
              <List key={user.email}>
                <p>{user.nickname}</p>
                <FriendBtn>친구 신청</FriendBtn>
              </List>
            ))}
          </ResultBox>
        </ContentBox>
      </PaperBox>
    </LeftBox>
    <RightBox>
      <PaperBox right>
        <ContentBox right>
          <Title>친구 관리</Title>
            {friendList.map((user, index) => (
              <List key={user.id}>
              <p>{user.name}</p>
              <BtnBox>
                <FriendBtn>방문</FriendBtn>
                <FriendBtn>삭제</FriendBtn>
              </BtnBox>
              </List>
            ))}
            
        </ContentBox>
      </PaperBox>
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
  margin-top: 26px;
`;

// 검색
const SearchBox = styled.div`
  width: 360px;
  height: 71px;
  border-radius: 30px;
  background: #fff;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 60%;
  font-size: 14px;
  margin-left: 30px;
  border: none;

  &:focus {
    outline: none;
  }
`;

const SearchBtn = styled.p`
  font-size: 16px;
  font-weight: 700;

  margin-right: 27px;
`;

const ResultBox = styled.div`
  width: 420px;
  height: 400px;
  margin-top: 10px;
  margin-left: 20px;
  padding-left: 30px;
  overflow: auto;
`;
const Title = styled.p`
  text-align: center;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

// 친구

const FriendName = styled.p`
  font-size: 16px;
  font-weight: 700;
`;

const BtnBox = styled.div`
  width: 160px;
`;

const FriendBtn = styled.button`
  width: 69px;
  height: 43px;
  border-radius: 10px;
  background: #724dbc;
  border: none;
  color: #fff;
  margin: 5px;
`;

// 뒤로가기
const BackBtn = styled(Link)`
  color: #fff;
  z-index: 100;
  position: absolute;
  left: 36px;
  top: 3%;
`;

export default Friends;
